const request = require('request');
const express = require('express');
const proxy = require('express-http-proxy');

require('dotenv').config();
const {PORT, APIURL, AUTHURL} = process.env;
const app = express();

app.post('/authorize', proxy(AUTHURL, {
  filter: () => {
    return true;
  }
}));

app.all('/*', proxy(APIURL, {
  filter: () => {
    return true;
  }
}));

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});
