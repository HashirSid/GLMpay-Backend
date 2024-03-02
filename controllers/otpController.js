const axios = require('axios');
const { apiKey } = require('../config'); // Add your API key here

exports.sendOTP = async (req, res) => {
  try {
    const { to, message } = req.body;
    const url = 'https://2factor.in/API/R1/';

    const params = new URLSearchParams();
    params.append('module', 'TRANS_SMS');
    params.append('apikey', apiKey);
    params.append('to', to);
    params.append('msg', message);

    const response = await axios.post(url, params);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
