import Product from "../../schemas/Product.js";

const deleteProduct = async (req, res, next) => {

    try {

        if(!req.body.id){
            throw new Error ("No id provided")
        }
    
        const product = await Product.findById(req.body.id);

        if(!product){
            throw new Error ("Product with id not found");
        }

        await Product.deleteOne({ _id: req.body.id })
    
        res.send(product);

    } catch (error) {

        if(error.message == "Product with id not found"){
            error.customMessage = req.body.id;
        }

        next(error);
    }

}

export default deleteProduct;