// setWebhook.js
require("dotenv").config();
const axios = require('axios');

const BOT_TOKEN = process.env.TOKEN; 
const WEBHOOK_URL = 'https://tgapp.a24.fun/bot' + BOT_TOKEN; 
// Function to set the webhook

async function setWebhook() {
    try {
        const response = await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`, {
            url: WEBHOOK_URL
        });

        console.log('Webhook was set:', response.data);
    } catch (error) {
        console.error('Error setting webhook:', error.message);
    }
}

// Call the function to set the webhook
setWebhook();
 