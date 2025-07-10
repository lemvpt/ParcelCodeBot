const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Slack Bot Token and Channel ID
const SLACK_BOT_TOKEN = 'TOKEN_HERE';
const CHANNEL_ID = 'ID_HERE';

app.get('/api/messages', async (req, res) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.history', {
      headers: {
        Authorization: `Bearer ${SLACK_BOT_TOKEN}`
      },
      params: {
        channel: CHANNEL_ID,
        limit: 20
      }
    });

    console.log('Slack API response:', response.data); // ← Debug here

    if (!response.data.ok) {
      return res.status(500).json({ error: response.data.error });
    }

    res.json({ messages: response.data.messages });
  } catch (error) {
    console.error('Error fetching Slack messages:', error.message);
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
