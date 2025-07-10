# Slack Message Web Viewer

Shows the latest N messages from a Slack channel using a simple HTML frontend and secure backend proxy.

Default N=20.

⚠️ Replace API bot token and channel ID in server.js

## ⚙️ Setup

1. Clone this repo.
2. Run `npm install`
3. Run the server:
   ```bash
   npm start
   ```
4. Visit: [http://localhost:3000](http://localhost:3000)

> ⚠️ Slack tokens should NEVER be exposed client-side. This project uses a backend to securely access Slack's API.

## 📦 Requirements

- Node.js (v16+ recommended)
- Slack Bot Token with `conversations.history` and `channels:read` permissions

## 📋 Checklist for Slack app + channel:

• App has a Bot Token (starts with xoxb-)
• App has scopes: channels:history, groups:history, im:history, mpim:history, and channels:read
• App is installed to the workspace
• App is added to the channel you want to get messages from
• You know the Channel ID (not name) — can get it from URL or conversations.list API
• Channel is not private
