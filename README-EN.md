[中文](./README.md)

# n8n-nodes-feishu

n8n community node for interacting with Feishu/Lark API, supporting messaging, document operations, calendar management, bitable (multi-dimensional tables), and more.

This project is forked from [n8n-nodes-feishu-lark](https://github.com/zhgqthomas/n8n-nodes-feishu-lark) with the following improvements:
- Compatible with latest n8n version (v2.x)
- Updated Node.js engine requirement to v22+
- Added npm provenance support
- Fixed code quality issues

## Installation

Install this node in n8n:

```bash
npm install @snae/n8n-nodes-feishu
```

Or install via n8n UI: Settings > Community Nodes > Install > Enter `@snae/n8n-nodes-feishu`

## Features

### Supported Resources

- **Message**: Send, reply, edit, forward, recall messages; upload/download files
- **Base/Bitable**: Create/update/delete apps, tables, records, fields, views
- **Calendar**: Create/manage calendars and events
- **Document**: Create/read cloud documents, manage document blocks
- **Space/Drive**: File management, upload/download
- **Spreadsheet**: Read/write spreadsheet data
- **Contacts**: Query user information
- **Task**: Task management
- **Wiki Spaces**: Knowledge base space management

### Triggers

- **Lark Trigger**: Receive Feishu events via WebSocket (China Feishu only)
- **Webhook**: Receive events via n8n Webhook node (supports international Lark)

### Special Operations

- **Send and Wait**: Send message and wait for user response, supporting Human-in-the-loop workflows
- **Send Streaming Message**: Support AI Agent streaming output to Feishu bot
- **Parse Message**: Parse Feishu event callback data

## Credential Configuration

### Tenant Token (Application Identity)

1. Create an application on Feishu Open Platform, obtain `App ID` and `App Secret`
2. Add credential in n8n, select `Lark Tenant Token API`
3. Enter `App ID` and `App Secret`
4. Select appropriate Base URL (China or International)

### User Token (User Identity)

1. Configure OAuth2 redirect URL on Feishu Open Platform
2. Add credential in n8n, select `Lark OAuth2 API`
3. Enter `Client ID` and `Client Secret`
4. Configure required Scope permissions (recommend including `offline_access`)

For detailed configuration, please refer to [Feishu Open Platform Documentation](https://open.feishu.cn/document/).

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Development mode (watch for changes)
npm run dev

# Lint
npm run lint

# Test
npm test
```

## Publishing

This project uses GitHub Actions for automated npm publishing. Publishing is triggered when pushing tags:

```bash
# Create new version tag
git tag v2.0.1
git push origin v2.0.1
```

npm provenance signing is automatically added during publishing to ensure package authenticity.

## License

MIT License

## Links

- [GitHub Repository](https://github.com/imsnae/n8n-nodes-feishu)
- [Feishu Open Platform Documentation](https://open.feishu.cn/document/)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Original Repository](https://github.com/zhgqthomas/n8n-nodes-feishu-lark)
