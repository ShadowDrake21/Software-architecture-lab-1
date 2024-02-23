const axios = require('axios');
require('dotenv').config();

function createProxyService() {
  const apiUrl = `${process.env.API_URL}:${process.env.API_PORT}`;

  async function fetchData() {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching from API: ${error.message}`);
    }
  }

  return { fetchData };
}

module.exports = { createProxyService };
