// setWebhook.js
require("dotenv").config();
const axios = require('axios');

const BOT_TOKEN = process.env.TOKEN; // Replace with your bot token
// const WEBHOOK_URL = 'https://a24.fun/bot' + BOT_TOKEN; // Replace with your HTTPS URL
const WEBHOOK_URL = '/bot' + BOT_TOKEN; // Replace with your HTTPS URL
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
