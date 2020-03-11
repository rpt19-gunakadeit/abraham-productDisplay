const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index');

app.use(express.static('client/dist'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

//get request to retrieve small images for thumbnails
app.get('/small', (req, res) => {
  res.status(200).send('OK');
});

//get request to retrieve medium images for static images rendering to dom
app.get('/medium', (req, res) => {
  res.status(200).send('OK');
});

//get request to retrieve large images when user clicks on medium size image
app.get('/large', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
})