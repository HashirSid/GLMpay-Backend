const axios = require('axios');

exports.postRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to make POST request: ${error.message}`);
  }
};

