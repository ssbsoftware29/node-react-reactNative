const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://ssbsoftware:ssbsoftware2908@ssbsoftware-amkg3.mongodb.net/devtinder?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);

// M - Model, V - View, C - controller