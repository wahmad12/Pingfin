const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK - team03' });
});

app.post('/process', async (req, res) => {
  try {
    console.log("Clearing received:", req.body); // debug

    const payment = req.body;

    const response = await axios.post(
      'http://team02-api:8011/payment',
      payment // 👈 DOORSTUREN
    );

    res.json({
      message: 'Processed via clearing',
      result: response.data
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Forwarding failed' });
  }
});

app.post('/payment', (req, res) => {
  console.log('Payment received:', req.body);

  res.json({
    message: 'Payment processed by team03'
  });
});

app.listen(8021, () => {
  console.log('Team03 running on 8021');
});