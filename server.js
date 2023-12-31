const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'https://philbill18.github.io', // Replace with the actual URL of your client
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});
app.post('/gps-data', (req, res) => {
    //console.log(req);
    console.log(req.body);
    const gpsData = req.body;
    res.send(gpsData);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
