const express = require('express');
const bodyParser = require('body-parser');
const mongoPrac = require('./mongo')
const mongoosePrac = require('./mongoose')

const app = express();

app.use(bodyParser.json());

//using mongodb
// app.post('/products',mongoPrac.createProduct);

// app.get('/products',mongoPrac.getProducts);

///using mongoose
app.post('/products',mongoosePrac.createProduct);

app.get('/products',mongoosePrac.getProducts);

app.listen(3000);