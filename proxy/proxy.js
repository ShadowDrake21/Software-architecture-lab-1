// require('dotenv').config();
// const { config } = require('dotenv');
// const express = require('express');
// const app = express();

// app.use('/', (request, response) => {
//   response.redirect(process.env.URL);
// });
// console.log(`Start listeting port ${process.env.PORT}`);
// app.listen(process.env.PORT);

// module.exports = app;

require('dotenv').config();
const app = require('./server');

module.exports = app;
