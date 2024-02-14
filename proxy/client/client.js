const axios = require('axios');

const fetchData = async () => {
  const response = await axios.get('/');
  return response.data;
};

module.exports = {
  fetchData,
};
