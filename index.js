const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json('Hello world');
})

app.listen(PORT || process.env.PORT , () => {
  console.log('App runing on port : ', PORT);
});