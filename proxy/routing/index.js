const express = require('express');
const router = express.Router();
const proxyService = require('../services/proxyService');

router.get('/', async (req, res) => {
  try {
    const result = await proxyService.fetchDataFromApi();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
