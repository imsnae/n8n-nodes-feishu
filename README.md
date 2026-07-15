[English](./README-EN.md)

# n8n-nodes-feishu

**@snae/n8n-nodes-feishu** is a community node package for n8n that integrates Feishu (Lark) APIs. It lets you build workflows around messaging, bitable (multi-dimensional tables), calendar, documents, spreadsheets, contacts, tasks, wiki spaces, and more.

Version: 2.0.0 | License: MIT

## Installation

Install via npm in your n8n environment:

```bash
npm install @snae/n8n-nodes-feishu
```

Or install through the n8n UI: **Settings > Community Nodes > Install**, then enter `@snae/n8n-nodes-feishu`.

Requires **Node.js >= 22** and **n8n-workflow >= 1.0.0**.

## Node Types

| Node | Description |
|------|-------------|
| **Lark** | Action node. Consume Lark APIs with a resource/operation model. Covers message, bitable, calendar, document, space, spreadsheet, contacts, task, wiki, and MCP resources. |
| **Lark Trigger** | WebSocket-based trigger. Subscribes to Lark events via a persistent WebSocket connection (Feishu China). |
| **Lark Webhook Trigger** | HTTP webhook-based trigger. Receives Lark events via HTTP, with auto-decryption and URL verification. |
| **Respond to Lark** | Synchronous response node for Lark card interactions. Enables real-time responses in interactive card workflows. |

## Credential Types

### Lark Tenant Token API (App Identity)

Uses `App ID` and `App Secret` to obtain a tenant access token. Required for most API operations.

### Lark OAuth2 API (User Identity)

Uses OAuth2 authorization code flow. Required for operations that need user-level permissions.

See [Credential Configuration](#credential-configuration) for setup details.

## API Coverage

### Message

| Operation | Description |
|-----------|-------------|
| Send | Send text, rich text, image, interactive card, and other message types |
| Reply | Reply to a message in a chat |
| Edit | Edit a sent message |
| Forward | Forward a message to another chat |
| Recall | Recall (withdraw) a sent message |
| Send and Wait | Send a message with approval/response buttons and wait for user interaction |
| Send Streaming | Stream AI agent output as real-time messages |
| Upload Image | Upload an image to Lark |
| Download Image | Download an image from Lark message content |
| Upload File | Upload a file to Lark |
| Download File | Download a file from Lark message content |
| Send Limited Card | Send a message with a card that has limited validity |
| Update Card | Update an interactive card |
| Delete Limited Card | Delete a limited card message |
| Parse Content | Parse Lark message content to extract text/image elements |
| Get Content Info | Get content metadata from a message |
| Get Content Resource | Get the resource (image/file) from message content |
| Parse Webhook | Parse incoming webhook events with challenge verification and encryption support |
| Update Interactive Card | Update an interactive card with new content |

### Base / Bitable

| Operation | Description |
|-----------|-------------|
| Create App | Create a new bitable app |
| Copy App | Copy an existing bitable app |
| Get App Info | Get bitable app metadata |
| Update App | Update bitable app settings |
| Create Table | Create a new table in a bitable |
| Batch Create Tables | Create multiple tables at once |
| Update Table | Update table settings |
| Get Table List | List all tables in a bitable |
| Delete Table | Delete a table |
| Batch Delete Tables | Delete multiple tables at once |
| Create Record | Create a new record in a table |
| Update Record | Update an existing record |
| Search Records | Search records by conditions |
| Get Record List | List records with pagination |
| Delete Record | Delete a record |
| Batch Create Records | Create multiple records at once |
| Batch Update Records | Update multiple records at once |
| Batch Delete Records | Delete multiple records at once |
| Create Field | Create a new field in a table |
| Update Field | Update field configuration |
| Get Field List | List all fields in a table |
| Delete Field | Delete a field |
| Create View | Create a new view |
| Update View | Update view configuration |
| Get View List | List all views in a table |
| Get View Info | Get view details |
| Delete View | Delete a view |
| Create Role | Create a role for the bitable |
| Update Role | Update role configuration |
| Get Role List | List all roles |
| Delete Role | Delete a role |
| Create Member | Add a member to a role |
| Batch Create Members | Add multiple members to a role |
| Get Member List | List role members |
| Delete Member | Remove a member from a role |
| Batch Delete Members | Remove multiple members from a role |

### Calendar

| Operation | Description |
|-----------|-------------|
| Search | Search for calendars |
| Get List | List calendars |
| Get Info | Get calendar details |
| Get Primary Info | Get primary calendar info |
| Create | Create a new calendar |
| Update | Update calendar settings |
| Delete | Delete a calendar |
| Availability | Check calendar availability / free-busy |
| Create Event | Create a calendar event |
| Get Event | Get event details |
| Get Event List | List events in a calendar |
| Search Events | Search for events |
| Update Event | Update an event |
| Delete Event | Delete an event |
| Create Event Attendee | Add attendees to an event |
| Delete Event Attendee | Remove attendees from an event |
| Get Event Attendee List | List event attendees |
| Create Meeting Chat | Create a meeting chat group for an event |
| Unbind Meeting Chat | Unbind a meeting chat from an event |

### Document

| Operation | Description |
|-----------|-------------|
| Create | Create a new cloud document |
| Get Info | Get document metadata |
| Get Raw Content | Get the raw content of a document |
| Get Block List | List blocks in a document |
| Create Block | Add a block to a document |
| Create Nested Block | Add a nested block |
| Update Block | Update block content |
| Get Block | Get a specific block's details |
| Delete Block | Delete a block |
| Convert Block | Convert block type |

### Space (Drive)

| Operation | Description |
|-----------|-------------|
| Create Folder | Create a new folder |
| Delete File or Folder | Delete a file or folder |
| Get File List | List files in a space |
| Search Files | Search for files |
| Upload File | Upload a file |
| Upload Media | Upload media (image/audio/video) |
| Download Media | Download media |
| Get Media Temp Download URL | Get a temporary download URL for media |

### Spreadsheet

| Operation | Description |
|-----------|-------------|
| Create | Create a new spreadsheet |
| Update | Update spreadsheet properties |
| Get Info | Get spreadsheet metadata |
| Create Sheet | Add a sheet to a spreadsheet |
| Copy Sheet | Duplicate a sheet |
| Delete Sheet | Delete a sheet |
| Update Sheet | Update sheet properties |
| Get Sheet List | List all sheets |
| Get Sheet Info | Get sheet details |
| Create Dimension | Add a row/column dimension |
| Insert Dimension | Insert a row/column |
| Update Dimension | Update dimension properties |
| Move Dimension | Move a row/column |
| Delete Dimension | Delete a row/column |
| Merge Cells | Merge a range of cells |
| Split Cells | Split merged cells |
| Find Cells | Search for content in cells |
| Replace Cells | Find and replace content |
| Set Cell Style | Format cell style (font, background, alignment, etc.) |
| Insert Values | Insert data into a range |
| Append Values | Append data to a range |
| Read Values | Read data from a range |
| Write Values | Write data to a range |
| Insert Image | Insert an image into a cell |

### Contact

| Operation | Description |
|-----------|-------------|
| Get User Info | Get a single user's information |
| Batch Get User Info | Lookup multiple users by email or mobile |

### Task

| Operation | Description |
|-----------|-------------|
| Create | Create a task |
| Update | Update task properties |
| Delete | Delete a task |
| Get Info | Get task details |
| Add Members | Add members/assignees to a task |
| Remove Members | Remove members/assignees from a task |

### Wiki (Knowledge Space)

| Operation | Description |
|-----------|-------------|
| Get List | List wiki spaces |
| Get Info | Get wiki space details |
| Setting | Configure wiki space settings |
| Create Node | Create a wiki page node |
| Get Node Info | Get node details |
| Get Node Children | List child nodes |
| Copy Node | Copy a node |
| Move Node | Move a node |
| Update Node Title | Rename a node |
| Add Member | Add a member to the space |
| Delete Member | Remove a member from the space |
| Get Members | List space members |

### MCP (Tool API)

| Operation | Description |
|-----------|-------------|
| List Tools | List available MCP tools registered on the app |
| Execute Tool | Invoke an MCP tool by its name |

## Notable Features

### Webhook Trigger with Encryption Support

The Lark Webhook trigger (via the `parseWebhook` operation in the Lark node) receives events through an HTTP endpoint. It supports:

- **Auto URL verification**: Responds to Lark's `challenge` handshake automatically
- **Encrypted payloads**: Decrypts AES-encrypted event bodies when configured with an `encrypt_key`
- **Verification token**: Validates incoming requests against a configured verification token
- **Event filtering**: Routes events based on event type (e.g., `im.message.receive_v1`)
- **Multi-source events**: Receives events from both bot subscriptions and app subscriptions

To set up, add a Webhook node (n8n built-in) before the Lark node and configure the Lark node with `parseWebhook` operation. Point your Lark app's event subscription URL to the n8n Webhook URL.

### Synchronous Response for Card Interactions

The Lark node supports synchronous responses to Lark interactive card actions. When a user clicks a button on an interactive card, your workflow can return a response directly to Lark, updating the card or sending a toast notification.

This is handled through the Lark node's built-in webhook endpoints (GET/POST) that produce a synchronous response. The workflow can:

- Update the interactive card with new content
- Display a toast notification to the user
- Return a challenge response for URL verification

### WebSocket Long-Connection Trigger

The Lark Trigger connects to Lark's event subscription service via a persistent WebSocket connection. This is the recommended approach for receiving events in real time.

Key characteristics:

- **Feishu China only**: The WebSocket-based trigger works with `https://open.feishu.cn` (China region)
- **One trigger per bot**: Due to Lark's API limits, you can use only one active WebSocket connection per bot at a time
- **Document subscription events**: Supports subscribing to drive file events (bitable, docx, folder, file, slides)
- **Callback toast**: Optionally show a toast notification when an event is handled
- **Unsubscribe on deactivate**: Optionally clean up subscriptions when the workflow is deactivated

### Send and Wait Pattern

The `Send and Wait` operation sends an approval-style interactive card to a chat and waits for the user's response. This enables Human-in-the-Loop workflows directly inside n8n.

The card includes configurable action buttons (approve/disapprove, single/double approval). When a user clicks a button, the workflow resumes:

- **Approval type**: Buttons redirect to a signed resume URL, resuming the workflow with the approval status
- **Free text type**: Opens a form where the user can type a response
- **Custom form type**: Renders a multi-field form for structured input
- **Timeout**: Optional wait time limit (configured via the Limit Wait Time option)

### Streaming Message Support

The `Send Streaming` operation sends incremental message content to a chat. This is useful for AI agent outputs where the response is generated token by token. The streamed content is delivered as it becomes available, creating a real-time typing effect in the chat.

### i18n (English / Chinese)

The node interface supports both English and Chinese locales. Language is detected automatically based on the n8n instance's language setting.

### Bot Detection

The `sendAndWait` webhook handler uses `isbot` to detect and filter out bot user-agent requests, preventing unnecessary workflow processing.

### Content Sanitization

User-generated content, especially CSS and HTML passed through message fields, is sanitized via `sanitize-html` to prevent injection attacks.

## Credential Configuration

### Tenant Token (Application Identity)

1. Go to the [Feishu Open Platform](https://open.feishu.cn/) and create or open your app
2. Get the **App ID** and **App Secret** from the Credentials page
3. In n8n, add a credential and select **Lark Tenant Token API**
4. Enter the App ID and App Secret
5. Select the appropriate Base URL:
   - **Feishu China**: `https://open.feishu.cn`
   - **Lark Global**: `https://open.larksuite.com`

The node automatically obtains and refreshes tenant access tokens.

### User Token (User Identity via OAuth2)

1. In your Lark app settings, configure the **OAuth2 Redirect URL** to your n8n instance URL
2. Add the required **Scope** permissions for the APIs you plan to use (recommend including `offline_access` for token refresh)
3. In n8n, add a credential and select **Lark OAuth2 API**
4. Enter the **Client ID** and **Client Secret**
5. Use the OAuth2 flow to authorize

### Webhook URL Configuration

When using the `parseWebhook` operation to receive events:

1. In your n8n workflow, add a **Webhook** node (n8n built-in) connected to a **Lark** node with `parseWebhook` operation
2. Copy the Webhook URL from the Webhook node
3. In your Lark app's **Event Subscriptions** page, set the **Request URL** to the Webhook URL
4. Configure the **Encrypt Key** and **Verification Token** in the Lark node's `parseWebhook` parameters
5. These values must match what is configured in your Lark app's subscription settings

## Links

- [Feishu Open Platform Documentation](https://open.feishu.cn/document/)
- [Lark Open Platform Documentation](https://open.larksuite.com/document/)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)
- [GitHub Repository](https://github.com/imsnae/n8n-nodes-feishu)

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
npm run test
```
