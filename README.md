# n8n-nodes-feishu

n8n 社区节点，用于与飞书/Lark API 交互，支持消息发送、文档操作、日历管理、多维表格等功能。

> **v2.1.0 新增**: Lark Webhook Trigger（HTTP Webhook 触发器）、Respond to Lark（同步响应节点）

本项目 fork 自 [n8n-nodes-feishu-lark](https://github.com/zhgqthomas/n8n-nodes-feishu-lark)，并进行了以下改进：
- 适配最新 n8n 版本 (v2.x)
- 更新 Node.js 引擎要求至 v22+
- 添加 npm provenance 支持
- 修复代码质量问题

> 部分功能（Webhook Trigger、Respond 节点、自动分页、超时批次管理）参考自 [luka-n8n-nodes/n8n-nodes-feishu](https://github.com/luka-n8n-nodes/n8n-nodes-feishu)

## 安装

在 n8n 中安装此节点：

```bash
npm install @snae/n8n-nodes-feishu
```

或者通过 n8n 界面安装：Settings > Community Nodes > Install > 输入 `@snae/n8n-nodes-feishu`

## 功能特性

### 支持的资源

- **消息 (Message)**: 发送、回复、编辑、转发、撤回消息；查询消息内容与历史记录；上传/下载文件、图片、音频、视频等资源
- **群组 (Chat/Group)**: 创建/更新/删除群聊、搜索群组、添加/移除/查询成员、管理群主
- **多维表格 (Base/Bitable)**: 创建/更新/删除应用、表格、记录、字段、视图；批量操作
- **日历 (Calendar)**: 创建/管理日历和日程事件；管理日程参与人；日历搜索与空闲查询
- **文档 (Document)**: 创建/读取云文档，管理文档块
- **云空间 (Space)**: 文件管理（递归列表/搜索/上传/下载）、文件夹创建/删除、空间统计、导入导出
- **电子表格 (Spreadsheet)**: 读写表格数据、管理工作表、行列操作、单元格样式/合并/查找替换
- **通讯录 (Contacts)**: 查询用户信息、批量获取用户；部门搜索及子部门/成员列表管理
- **任务 (Task)**: 任务管理
- **知识库 (Wiki Spaces)**: 知识库空间管理

### 触发器

- **Lark Trigger**: 通过 WebSocket 长连接接收飞书事件推送（仅支持中国版飞书）。支持卡片回调同步响应（Response Node 模式）。
- **Lark Webhook Trigger** ✨ 新增: 通过 HTTP Webhook 接收事件回调，支持加密推送解密、URL 验证、Response Node 模式
- **Webhook**: 通过 n8n Webhook 节点接收事件（支持国际版 Lark）

### 响应节点

- **Respond to Lark** ✨ 新增: 同步响应飞书卡片交互，支持 WebSocket 和 Webhook 两种模式

### 特殊操作

- **Send and Wait**: 发送消息并等待用户响应，支持 Human-in-the-loop 工作流
- **Send Streaming Message**: 支持 AI Agent 流式输出到飞书机器人
- **Parse Message**: 解析飞书事件回调数据

## 凭证配置

### Tenant Token（应用身份）

1. 在飞书开放平台创建应用，获取 `App ID` 和 `App Secret`
2. 在 n8n 中添加凭证，选择 `Lark Tenant Token API`
3. 填入 `App ID` 和 `App Secret`
4. 选择合适的 Base URL（中国版或国际版）

### User Token（用户身份）

1. 在飞书开放平台配置 OAuth2 重定向 URL
2. 在 n8n 中添加凭证，选择 `Lark OAuth2 API`
3. 填入 `Client ID` 和 `Client Secret`
4. 配置所需的 Scope 权限（建议包含 `offline_access`）

详细配置请参考[飞书开放平台文档](https://open.feishu.cn/document/)。

飞书开放平台 API 文档: [Server Docs](https://open.feishu.cn/document/server-docs)

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 开发模式（监听文件变化）
npm run dev

# 代码检查
npm run lint

# 测试
npm test
```

## 发布

本项目使用 GitHub Actions 自动发布到 npm。当推送 tag 时会自动触发发布流程：

```bash
# 创建新版本 tag
git tag v2.0.1
git push origin v2.0.1
```

发布时会自动添加 npm provenance 签名，确保包的可信性。

## 许可证

MIT License

## 相关链接

- [GitHub 仓库](https://github.com/imsnae/n8n-nodes-feishu)
- [飞书开放平台文档](https://open.feishu.cn/document/)
- [n8n 社区节点文档](https://docs.n8n.io/integrations/community-nodes/)
- [原项目仓库](https://github.com/zhgqthomas/n8n-nodes-feishu-lark)
