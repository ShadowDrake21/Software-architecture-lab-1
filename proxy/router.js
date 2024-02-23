const express = require('express');
const { createProxyService } = require('./services');

function createRouter() {
  const router = express.Router();
  const proxyService = createProxyService();

  router.use('/', async (request, response) => {
    try {
      const data = await proxyService.fetchData();
      response.send(data);
    } catch (error) {
      console.error('Error while fetching:', error.message);
      response.status(500).send('Internal Error');
    }
  });

  return router;
}

module.exports = { createRouter };
