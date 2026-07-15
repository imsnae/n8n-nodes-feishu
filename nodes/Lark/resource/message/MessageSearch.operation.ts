import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import RequestUtils from '../../../help/utils/RequestUtils';
import { ResourceOperation } from '../../../help/type/IResource';
import { WORDING } from '../../../help/wording';
import { OperationType } from '../../../help/type/enums';
import { returnAllAndLimitOptions } from '../../../help/utils/options';
import { handlePagination } from '../../../help/utils/pagination';

export default {
	name: WORDING.MessageSearch,
	value: OperationType.MessageSearch,
	order: 206,
	options: [
		{
			displayName: 'Query (搜索关键词)',
			name: 'query',
			type: 'string',
			required: true,
			default: '',
			description: 'Search keywords for message content',
		},
		...returnAllAndLimitOptions,
		{
			displayName: WORDING.Options,
			name: 'options',
			type: 'collection',
			placeholder: WORDING.AddField,
			default: {},
			options: [
				{
					displayName: 'User ID Type (用户 ID 类型)',
					name: 'user_id_type',
					type: 'options',
					options: [
						{ name: 'Open ID', value: 'open_id' },
						{ name: 'Union ID', value: 'union_id' },
						{ name: 'User ID', value: 'user_id' },
					],
					default: 'open_id',
				},
			],
		},
		{
			displayName: `<a target="_blank" href="https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/search">${WORDING.OpenDocument}</a>`,
			name: 'notice',
			type: 'notice',
			default: '',
		},
	],
	async call(this: IExecuteFunctions, index: number): Promise<IDataObject> {
		const query = this.getNodeParameter('query', index) as string;
		const options = this.getNodeParameter('options', index, {}) as IDataObject;
		const user_id_type = (options.user_id_type as string) || 'open_id';

		const result = await handlePagination(
			this,
			index,
			async (pageToken?: string) => {
				const body: IDataObject = { query };
				const qs: IDataObject = { user_id_type, page_size: 50 };
				if (pageToken) {
					qs.page_token = pageToken;
				}

				const { data } = await RequestUtils.request.call(this, {
					method: 'POST',
					url: '/open-apis/im/v1/messages/search',
					qs,
					body,
				});
				return data as IDataObject;
			},
			'items',
		);

		return {
			items: result.items,
			has_more: result.hasMore,
			page_token: result.pageToken ?? '',
		};
	},
} as ResourceOperation;
