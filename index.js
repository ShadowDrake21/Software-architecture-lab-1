require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send(process.env.RESPONSE);
});
app.listen(3000);

module.exports = app;
