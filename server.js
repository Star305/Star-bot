const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const baileyApiKey = 'YOUR_BAILEY_API_KEY';
const baileyPhoneNumberId = 'YOUR_BAILEY_PHONE_NUMBER_ID';

app.post('/generate-session-id', (req, res) => {
  const sessionId = Math.random().toString(36).substr(2) + Date.now().toString(36);
  res.json({ sessionId });
});

app.post('/send-whatsapp-message', (req, res) => {
  const { phoneNumber, message } = req.body;
  axios.post(`https:                                
    phone_number_id: baileyPhoneNumberId,
    to: phoneNumber,
    message: message,
  }, {
    headers: {
      'Authorization': `//api.bailey.com/v1/messages`, {
    phone_number_id: baileyPhoneNumberId,
    to: phoneNumber,
    message: message,
  }, {
    headers: {
      'Authorization': `Bearer ${baileyApiKey}`,
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    res.json({ message: 'WhatsApp message sent successfully' });
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ message: 'Error sending WhatsApp message' });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
