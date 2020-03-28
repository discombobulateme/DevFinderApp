const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://paloma:p1411@cluster0-2oykm.mongodb.net/devFinderApi?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

