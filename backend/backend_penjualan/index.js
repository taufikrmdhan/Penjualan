// konsep mvc
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
// const Redis = require('./module/redis'); 
// const cookieparser = require('cookie-parser');
// buat route
const cors = require('cors');
const barangRouter = require('./src/router/barang.routes');

const app = express();

try {
  app.use(express.static('public'));
  // app.enable('trust proxy');
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(xss());
  app.use(barangRouter);
  // app.user(cookieparser());
} catch (error) {
  console.log(error);
}

// jalankan express
app.listen(4000, () => {
  console.log('server is running on port 4000');
});
