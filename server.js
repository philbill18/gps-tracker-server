const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});
app.post('/gps-data', (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send(req.body);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
