import { INodePropertyOptions } from 'n8n-workflow';
import { IResource, ResourceOperation } from '../type/IResource';
import { INodeProperties } from 'n8n-workflow';
import { Credentials } from '../type/enums';

export const OP_COLLECTION_PREFIX = '__op_';

class ResourceBuilder {
	resources: IResource[] = [];

	addResource(resource: INodePropertyOptions) {
		this.resources.push({
			...resource,
			operations: [],
		});
	}

	addOperation(resourceName: string, operation: ResourceOperation) {
		const resource = this.resources.find((resource) => resource.value === resourceName);
		if (resource) {
			resource.operations.push(operation);
		}
	}

	build(): INodeProperties[] {
		// Build Operations
		const list: INodeProperties[] = [];

		// This is a common property for all resources, so add it first
		list.push({
			displayName: 'Authentication',
			name: 'authentication',
			type: 'options',
			default: `${Credentials.TenantToken}`,
			options: [
				{
					name: 'Tenant Access Token',
					value: Credentials.TenantToken,
				},
				{
					name: 'User Access Token',
					value: Credentials.UserToken,
				},
			],
		});

		list.push({
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: this.resources.map((item) => {
				return {
					...item,
					operations: null,
				};
			}),
			default: '',
		});

		for (const resource of this.resources) {
			if (resource.operations.length === 0) continue;
			list.push({
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [resource.value],
					},
				},
				options: resource.operations.map((item) => {
					return {
						...item,
						options: null,
					};
				}),
				default: '',
			});

			for (const operation of resource.operations) {
				if (operation.options.length === 0) continue;
				const collectionName = `${OP_COLLECTION_PREFIX}${resource.value}_${operation.value}`;
				list.push({
					displayName: operation.name as string,
					name: collectionName,
					type: 'fixedCollection',
					typeOptions: {
						multipleValues: false,
					},
					displayOptions: {
						show: {
							resource: [resource.value],
							operation: [operation.value],
						},
					},
					options: [
						{
							name: 'values',
							displayName: 'Parameters',
							values: operation.options.map((opt) => {
								const cloned: INodeProperties = { ...opt } as INodeProperties;
								if (cloned.displayOptions?.show) {
									const { resource: _r, operation: _o, ...rest } = cloned.displayOptions.show;
									if (Object.keys(rest).length > 0) {
										cloned.displayOptions = { show: rest } as any;
									} else {
										delete cloned.displayOptions;
									}
								}
								return cloned;
							}),
						},
					],
					default: {},
				});
			}
		}

		return list;
	}

	getCall(resourceName: string, operateName: string): Function | null {
		const resource = this.resources.find((item) => item.value === resourceName);
		if (!resource) {
			return null;
		}
		const operate = resource.operations.find((item) => item.value === operateName);

		return operate?.call ?? null;
	}
}

export default ResourceBuilder;
