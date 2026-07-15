/**
 * @snae/n8n-nodes-feishu
 * n8n community node for Feishu/Lark API integration
 */

module.exports = {
	nodeTypes: {
		lark: require('./dist/nodes/Lark/Lark.node').Lark,
		larkTrigger: require('./dist/nodes/Lark/LarkTrigger.node').LarkTrigger,
		larkWebhookTrigger: require('./dist/nodes/Lark/LarkWebhookTrigger.node').LarkWebhookTrigger,
		respondToLark: require('./dist/nodes/Lark/RespondToLark.node').RespondToLark,
	},
	credentialTypes: {
		larkApi: require('./dist/credentials/LarkTokenApi.credentials').LarkTokenApi,
		larkOAuth2Api: require('./dist/credentials/LarkOAuth2Api.credentials').LarkOAuth2Api,
	},
};
