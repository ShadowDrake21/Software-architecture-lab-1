const { createProxyService } = require('./service');

const proxyService = createProxyService();

proxyService
  .fetchData()
  .then((data) => console.log('Received data:', data))
  .catch((error) => console.error('Error:', error.message));
