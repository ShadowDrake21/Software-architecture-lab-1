require('dotenv').config();
const express = require('express');
const { createRouter } = require('./router');
const app = express();

app.use('/', createRouter());

console.log(`Start listening on port ${process.env.PORT}`);
app.listen(process.env.PORT);

module.exports = app;
