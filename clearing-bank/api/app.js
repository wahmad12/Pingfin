const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK - clearing' });
});

// OB → CB → BB
app.post('/process', async (req, res) => {
  try {
    const payment = req.body;

    // 👉 stuur naar team02 (of dynamisch later)
    const response = await axios.post(
      'http://team02-api:8011/payment',
      payment
    );

    res.json({
      message: 'Processed via clearing',
      result: response.data
    });

  } catch (err) {
    res.status(500).json({ error: 'Failed to forward payment' });
  }
});

app.listen(8500, () => {
  console.log('Clearing bank running on 8500');
});