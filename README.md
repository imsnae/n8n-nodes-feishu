[English](#english) | 中文

# @snae/n8n-nodes-feishu

n8n 社区节点，用于与飞书 / Lark API 交互，支持消息发送、文档操作、日历管理、多维表格、MCP 等功能。

> 本项目 fork 自 [n8n-nodes-feishu-lark](https://github.com/zhgqthomas/n8n-nodes-feishu-lark)，感谢原作者的开源贡献！

## 安装

```bash
npm install @snae/n8n-nodes-feishu
```

或通过 n8n 界面：Settings → Community Nodes → Install → `@snae/n8n-nodes-feishu`

## 节点类型

| 节点 | 说明 | 类型 |
|------|------|------|
| **Lark** | Lark / 飞书 API 操作 | Action |
| **Lark Trigger** | WebSocket 长连接事件触发器 | Trigger |
| **Lark Webhook Trigger** | HTTP Webhook 事件接收器 ✨ 新增 | Trigger |
| **Respond to Lark** | 同步响应卡片交互 ✨ 新增 | Output |

## 凭证类型

| 凭证 | 说明 |
|------|------|
| **Lark Tenant Token API** | 应用级别凭证（App ID + App Secret） |
| **Lark OAuth2 API** | 用户级别凭证（OAuth 2.0 授权） |

## API 覆盖

### 消息 (Message) — 19 个操作
发送 / 回复 / 编辑 / 转发 / 撤回 / 文件上传 / 文件下载 / 图片上传 / 图片下载 / 卡片消息 / 批量消息 / 流式消息 / Send and Wait / Webhook 解析

### 多维表格 (Base/Bitable) — 35 个操作
应用创建/复制/修改 · 表格增删改查 · 记录增删改查/批量操作 · 字段增删改查 · 视图增删改查 · 角色管理 · 成员管理

### 日历 (Calendar) — 20 个操作
日历增删改查/搜索 · 日程增删改查/搜索 · 参与人管理 · 会议群管理 · 空闲查询

### 文档 (Document) — 10 个操作
创建/获取信息/获取纯文本 · 块增删改查/嵌套块 · 内容转换

### 电子表格 (Spreadsheet) — 24 个操作
创建/获取信息/修改 · 工作表管理 · 行列维度管理 · 单元格合并/拆分/查找/替换/样式 · 数据读写/插入/追加/图片

### 云空间 (Space) — 8 个操作
文件/文件夹管理 · 搜索 · 文件上传 · 素材上传/下载

### 通讯录 (Contacts) — 2 个操作
获取用户信息 · 批量获取

### 任务 (Task) — 6 个操作
创建/获取/更新/删除 · 添加/移除成员

### 知识库 (Wiki Spaces) — 13 个操作
空间管理 · 节点增删改查/复制/移动 · 成员管理 · 设置

### MCP — 2 个操作
列出工具 · 执行工具

## 触发器

- **Lark Trigger**：通过 WebSocket 长连接接收飞书事件推送（仅支持中国版飞书）
- **Lark Webhook Trigger ✨**：通过 HTTP Webhook 接收事件回调，支持加密推送解密、URL 验证、schema 1.0/2.0

## 凭证配置

### Tenant Token（应用身份）
1. 在[飞书开放平台](https://open.feishu.cn)创建应用，获取 `App ID` 和 `App Secret`
2. 在 n8n 中添加凭证 → `Lark Tenant Token API`
3. 填入相关凭证信息
4. 选择 Base URL（中国版 `https://open.feishu.cn` 或国际版 `https://open.larksuite.com`）

### User Token（用户身份 / OAuth 2.0）
1. 飞书开放平台配置 OAuth 2.0 重定向 URL
2. n8n 中添加凭证 → `Lark OAuth2 API`
3. 填入 `Client ID` 和 `Client Secret`
4. 配置所需 Scope 权限

## 特殊功能

- **Send and Wait**：发送消息并等待用户响应，支持 Human-in-the-loop 工作流
- **Send Streaming Message**：支持 AI Agent 流式输出到飞书机器人
- **Webhook Parse**：解析飞书事件回调数据（支持加密解密）
- **Synchronous Response**：配合 Respond to Lark 节点实现卡片交互同步响应
- **i18n**：中英文双语支持
- **Bot Detection**：自动识别爬虫请求
- **Content Sanitization**：消息内容安全过滤

## 开发

```bash
npm install
npm run build     # 构建
npm run dev       # 开发模式
npm run lint      # 代码检查
npm test          # 测试
```

## 发布

推送 tag 后 GitHub Actions 自动发布到 npm：

```bash
git tag v2.1.1
git push origin v2.1.1
```

## 许可证

MIT License

## 相关链接

- [GitHub](https://github.com/imsnae/n8n-nodes-feishu)
- [飞书开放平台](https://open.feishu.cn/document/)
- [n8n 社区节点](https://docs.n8n.io/integrations/community-nodes/)
- [原项目](https://github.com/zhgqthomas/n8n-nodes-feishu-lark)

---

<a name="english"></a>

# @snae/n8n-nodes-feishu

n8n community node for Feishu/Lark API integration — messaging, documents, bitable, calendar, MCP, and more.

## Installation

```bash
npm install @snae/n8n-nodes-feishu
```

## Node Types

| Node | Description | Category |
|------|-------------|----------|
| **Lark** | Lark/Feishu API operations | Action |
| **Lark Trigger** | WebSocket long-connection event trigger | Trigger |
| **Lark Webhook Trigger** | HTTP webhook event receiver ✨ New | Trigger |
| **Respond to Lark** | Synchronous response for card interactions ✨ New | Output |

## Credential Types

| Credential | Type |
|------------|------|
| **Lark Tenant Token API** | App-level (App ID + App Secret) |
| **Lark OAuth2 API** | User-level (OAuth 2.0) |

## API Coverage

| Resource | Operations | Highlights |
|----------|-----------|------------|
| **Message** | 19 | Send, reply, edit, recall, stream, cards, file upload, send-and-wait |
| **Base/Bitable** | 35 | Full CRUD for apps, tables, records, fields, views, roles, members |
| **Calendar** | 20 | Calendar/event CRUD, search, attendees, meeting chat, availability |
| **Document** | 10 | Create, read, raw content, block CRUD, nested blocks, conversion |
| **Spreadsheet** | 24 | Sheets, dimensions, cells, merge/split/find/replace/style, data I/O |
| **Space** | 8 | File/folder, search, upload, media download |
| **Contacts** | 2 | Get user info, batch get |
| **Task** | 6 | Create, read, update, delete, member management |
| **Wiki Spaces** | 13 | Space/node CRUD, copy, move, members, settings |
| **MCP** | 2 | List tools, execute tool |

## License

MIT
