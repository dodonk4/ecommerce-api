import Product from "../../schemas/Product.js";
import productErrors from "../../utils/productErrors.js";


const postProduct = async (req, res, next) => {

    try {

        const productObject = {
            name: req.body.name,
            fullname: req.body.fullname,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            type: req.body.type,
            brand: req.body.brand,
            caracteristics: req.body.caracteristics,
            image: req.body.image,
            stock: req.body.stock,
            wordsToMatch: req.body.wordsToMatch
        }

        await productErrors(productObject, "post");


        const product = new Product({
            name: req.body.name,
            fullname: req.body.fullname,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            type: req.body.type,
            brand: req.body.brand,
            caracteristics: req.body.caracteristics,
            image: req.body.image,
            stock: req.body.stock,
            wordsToMatch: req.body.wordsToMatch
        });
    
        product.save();
    
        res.send(product);

    } catch (error) {
        
        next(error);

    }

    
}

export default postProduct;