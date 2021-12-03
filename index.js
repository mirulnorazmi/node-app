const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json('Hello world');
})

app.get('/.well-known/pki-validation/ ', (req, res, next) => {
  res.json('test');
})

app.listen(PORT || process.env.PORT , () => {
  console.log('App runing on port : ', PORT);
});