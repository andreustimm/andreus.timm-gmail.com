const express = require('express');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:32768/node_api',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

requireDir('src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
