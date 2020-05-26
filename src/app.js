const express = require('express');
const server = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/ipssong');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const cors = require('cors');
server.use(cors());

const groupRoute = require('./api/routes/groupRoute');
groupRoute(server);

const projectRoute = require('./api/routes/projectRoute');
projectRoute(server);

const timeRoute = require('./api/routes/timeRoute');
timeRoute(server);

const userRoute = require('./api/routes/userRoute');
userRoute(server);

server.listen(port, hostname);
