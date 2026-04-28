const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK - team02' });
});

// BB ontvangt betaling
app.post('/payment', (req, res) => {
  console.log('Payment received from clearing:', req.body);

  res.json({
    message: 'Payment processed by team02'
  });
});

app.listen(8011, () => {
  console.log('Team02 running on 8011');
});