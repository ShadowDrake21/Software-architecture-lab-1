const express = require('express');
const app = express();
const routes = require('../routing');

app.use('/', routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Proxy server is listening on port ${port}`);
});

module.exports = app;
