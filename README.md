# Slack Message Viewer

This project shows the latest 20 messages from a Slack channel using a simple frontend and secure backend proxy.

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
