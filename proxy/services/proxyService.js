const axios = require('axios');
const config = require('config');

const fetchDataFromApi = async () => {
  const response = await axios.get(process.env.URL);
  return response.data;
};

module.exports = {
  fetchDataFromApi,
};
