const mongoose = require('mongoose');


//creating Schema
const productSchema = mongoose.Schema({
    name: {
        type:String, required: true
    },
    price : {
        type:Number, required: true
    }
});

//creating model

module.exports = mongoose.model('Product',productSchema);