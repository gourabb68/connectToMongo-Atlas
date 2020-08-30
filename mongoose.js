const mongoose = require('mongoose');

const Products = require('./models/product');
const url ='mongodb+srv://Gourab:Gourab@007@cluster0.dbqee.gcp.mongodb.net/products_test?retryWrites=true&w=majority';
mongoose.connect(url,{ useNewUrlParser: true }).then(()=>{
    console.log('Connected  to DB')
}).catch(()=>{
    console.log('connection Failed')
});



const createProduct = async (req,res,next)=>{
    const createdProduct = new Products({
        name: req.body.name,
        price: req.body.price
    });
    const result =await createdProduct.save();
    //normally _id is type of object ._id
    console.log(typeof createdProduct._id + ' ' +createdProduct._id  )
    //we can convert that to string using mongoose  .id
    console.log(typeof createdProduct.id + ' ' +createdProduct.id  )
    res.json(result);
}

const getProducts = async (req,res,next)=>{
    const result = await Products.find().exec();
    res.json(result);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;