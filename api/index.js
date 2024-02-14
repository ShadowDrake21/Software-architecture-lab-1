require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello, World!');
});
console.log('Start listeting port 3000');
app.listen(3000);

module.exports = app;
