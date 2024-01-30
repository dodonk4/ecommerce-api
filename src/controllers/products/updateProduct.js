import Product from "../../schemas/Product.js";
import onlyNumbersOrLetters from "../../utils/onlyNumbersOrLetters.js";
import productErrors from "../../utils/productErrors.js";

const updateProduct = async (req, res, next) => {
    try {

        let stringToPassAsProps = {};
        let filter = {};
        
        console.log("First Step")

        for (const key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                switch (key) {
                    case 'id':
                        stringToPassAsProps.id = req.body.id;
                        break;
                    case 'name':
                        // onlyNumbersOrLetters(req.body.name)
                        stringToPassAsProps.name = req.body.name;
                        break;
                    case 'fullname':
                        stringToPassAsProps.fullname = req.body.fullname;
                        break;
                    case 'description':
                        onlyNumbersOrLetters(req.body.description);
                        stringToPassAsProps.description = req.body.description;
                        break;
                    case 'category':
                        // Código para manejar el CATEGORY
                        stringToPassAsProps.category = req.body.category;
                        break;
                    case 'type':
                        // Código para manejar el CATEGORY
                        stringToPassAsProps.type = req.body.type;
                        break;
                    case 'brand':
                        // Código para manejar el CATEGORY
                        stringToPassAsProps.brand = req.body.brand;
                        break;
                    case 'caracteristics':
                        // Código para manejar CARACTERISTICS
                        stringToPassAsProps.caracteristics = req.body.caracteristics;
                        break;
                    case 'image':
                        // Código para manejar la IMAGE
                        stringToPassAsProps.image = req.body.image;
                        break;
                    case 'price':
                        // Código para manejar el PRICE
                        stringToPassAsProps.price = req.body.price;
                        break;
                    case 'stock':
                        // Código para manejar el STOCK
                        stringToPassAsProps.stock = req.body.stock;
                        break;
                    case 'wordsToMatch':
                        stringToPassAsProps.wordsToMatch = req.body.wordsToMatch;
                        break;
                    default:
                        throw new Error("No field provided");//OR WRONG FIELDS
                        break;
                }   

            }

        }

        await productErrors(stringToPassAsProps, "put");

        await Product.findByIdAndUpdate(req.body.id, stringToPassAsProps);

        const productUpdated = await Product.findById(req.body.id);

        res.send(productUpdated);

    } catch (error) {
        next(error);
    }
}

export default updateProduct;