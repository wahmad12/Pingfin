const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK - team01' });
});

// OB → Clearing Bank
app.post('/send-payment', async (req, res) => {
  try {
    console.log("Team01 received:", req.body); // debug

    const response = await axios.post(
      'http://clearing-api:8500/process',
      req.body // 👈 HEEL BELANGRIJK
    );

    res.json({
      message: 'Sent to clearing',
      data: response.data
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Clearing error' });
  }
});


app.listen(8001, () => {
  console.log('Team01 running on 8001');
});