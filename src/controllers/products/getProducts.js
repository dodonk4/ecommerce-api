import db from "../../database/db.js";
import Product from "../../schemas/Product.js";

const getProducts = async (req, res) => {



    let products;
    let product;
    let productsByWordsToMatch;


    if(req.query.category){

        products = await Product.find({ category: req.query.category })
        
    }else if(req.query.filter){

        let filter = req.query.filter;

        if(filter.length === 1){
            return undefined;
        }
        
        productsByWordsToMatch = await Product.find({ wordsToMatch: { $regex: filter, $options: 'i'} })

        products = await Product.find({ category: { $regex: filter, $options: 'i'} })

        if(products[0] === undefined){
            products = await Product.find({ type: { $regex: filter, $options: 'i'} })
        }
        if(products[0] === undefined){
            products = await Product.find({ brand: { $regex: filter, $options: 'i'} })
        }
        if(products[0] === undefined){
            products = await Product.find({ fullname: { $regex: filter, $options: 'i'} })
        }
        
        if(productsByWordsToMatch[0] != undefined){
            productsByWordsToMatch.forEach(element => {
                products.push(element);
            });
        }
    }else if(req.query.product){
        products = await Product.findOne({ name: req.query.product })
    }else{
        products = await Product.find();
    }

    res.send(products);
}

export default getProducts;