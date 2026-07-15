import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
	INodeParameters,
	IN8nHttpFullResponse,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

const configuredOutputs = (parameters: INodeParameters) => {
	const enableResponseOutput = parameters.enableResponseOutput as boolean;
	if (enableResponseOutput) {
		return [
			{ type: 'main', displayName: 'Input Data' },
			{ type: 'main', displayName: 'Response Data' },
		];
	}
	return ['main'];
};

export class RespondToLark implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Respond to Lark',
		name: 'respondToLark',
		icon: 'file:lark_icon.svg',
		group: ['output'],
		version: [1],
		defaultVersion: 1,
		description: 'Sends a synchronous response back to Lark WebSocket or Webhook',
		subtitle:
			'={{$parameter["respondWith"] === "json" ? "Returns custom JSON data" : "No response data"}}',
		defaults: {
			name: 'Respond to Lark',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: `={{(${configuredOutputs})($parameter)}}`,
		properties: [
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				required: true,
				default: 'websocket',
				description: 'The trigger mode this node responds to',
				options: [
					{
						name: 'WebSocket',
						value: 'websocket',
						description: 'For Lark Trigger (WebSocket)',
					},
					{
						name: 'Webhook',
						value: 'webhook',
						description: 'For Lark Webhook Trigger (HTTP)',
					},
				],
			},
			{
				displayName: 'Response Content',
				name: 'respondWith',
				type: 'options',
				required: true,
				default: 'noResponse',
				description: 'The content to send back as the response',
				options: [
					{
						name: 'No Response Data',
						value: 'noResponse',
						description: 'Return an empty response body',
					},
					{
						name: 'JSON',
						value: 'json',
						description: 'Return custom JSON data',
					},
				],
			},
			{
				displayName: 'Custom JSON',
				name: 'jsonValue',
				type: 'json',
				required: true,
				default: '{}',
				displayOptions: {
					show: {
						respondWith: ['json'],
					},
				},
				description: 'Custom JSON data to send as the response body',
			},
			{
				displayName: 'Enable Response Output',
				name: 'enableResponseOutput',
				type: 'boolean',
				default: false,
				isNodeSetting: true,
				description: 'Whether to output the response data as a separate output',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		const mode = this.getNodeParameter('mode', 0) as string;
		const respondWith = this.getNodeParameter('respondWith', 0) as string;
		const enableResponseOutput = this.getNodeParameter('enableResponseOutput', 0, false) as boolean;

		let responseBody: IDataObject | string = {};

		if (respondWith === 'json') {
			const jsonValue = this.getNodeParameter('jsonValue', 0) as string;
			if (typeof jsonValue === 'string') {
				try {
					responseBody = JSON.parse(jsonValue);
				} catch (error) {
					throw new NodeOperationError(
						this.getNode(),
						`Invalid JSON in response content: ${error.message}`,
					);
				}
			} else {
				responseBody = jsonValue as IDataObject;
			}
		}

		if (mode === 'webhook') {
			this.sendResponse({
				body: responseBody,
				headers: {},
				statusCode: 200,
			} as IN8nHttpFullResponse);
		} else {
			this.sendResponse(responseBody as IDataObject);
		}

		const responseData = respondWith === 'json' ? responseBody : {};
		const responseItems = this.helpers.constructExecutionMetaData(
			this.helpers.returnJsonArray(responseData as IDataObject),
			{ itemData: { item: 0 } },
		);

		if (enableResponseOutput) {
			return [items, responseItems];
		}

		return [responseItems];
	}
}
