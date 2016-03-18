const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.use(express.static('assets'));

app.listen(3000, () => {
  console.log('Server is started at http://localhost:3000');
});
