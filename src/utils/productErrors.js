import Product from "../schemas/Product.js";
import onlyNumbers from "./onlyNumbers.js";
import onlyNumbersOrLetters from "./onlyNumbersOrLetters.js";

const productErrors = async (params, action) => {

    // const name = params[0];
    // const price = params[1];
    // const description = params[2];
    // const category = params[3];
    // const caracteristics = params[4];
    // const image = params[5];
    // const stock = params[6];

    let id = undefined;
    let name = undefined;
    let fullname = undefined;
    let price = undefined;
    let description = undefined;
    let category = undefined;
    let type = undefined;
    let brand = undefined;
    let caracteristics = undefined;
    let image = undefined;
    let stock = undefined;
    let wordsToMatch = undefined;

    console.log("Second Step")

    for(const key in params){
        if(params.hasOwnProperty(key)){
            switch (key) {
                case 'id':
                    id = params.id;
                    break;
                case 'name':
                    name = params.name;
                    break;
                case 'fullname':
                    fullname = params.fullname;
                    break;
                case 'description':
                    description = params.description;
                    break;
                case 'category':
                    category = params.category;
                    break;
                case 'type':
                    type = params.type;
                    break;
                case 'brand':
                    brand = params.brand;
                    break;
                case 'caracteristics':
                    caracteristics = params.caracteristics;
                    break;
                case 'image':
                    image = params.image;
                    break;
                case 'price':
                    price = params.price;
                    break;
                case 'stock':
                    stock = params.stock;
                    break;
                case 'wordsToMatch':
                    wordsToMatch = params.wordsToMatch;
                    break;
                default:
                    throw new Error("No field provided");//OR WRONG FIELDS
                    break;
            }   
        }
    }


    //IMPORTANT: Only Admins are able to postProducts. So the code must identify if a user is logged and which category the user is.

    //IF user is logged && user.category === "Admin" CONTINUE

    // Check that all the necesaries fields are filled


    if(action == "post" ){
        console.log(params);
        if(!name || !fullname || !price || !description || !category || !type || !brand || !caracteristics || !image || !stock) {
            throw new Error("A field is not filled");
        };
    }else if(action == "put"){
        console.log(params);
        if(!id){
            throw new Error("No id provided");
        }
        if(!name && !fullname && !price && !description && !category && !type && !brand && !caracteristics && !image && !stock && !wordsToMatch) {
            throw new Error("At least one field has to be filled");
        };
    }

    // Check that name has the correct format
    if(name){
        onlyNumbersOrLetters(name, "name");
        
        const productWithTheSameName = await Product.find({ name: `${name}` });

        if(productWithTheSameName[0] != undefined){
            throw new Error("Repeated Product");
        }
    }
    

    // Check that the price is correct

    if(price){
        onlyNumbers(price, "price");
    }
    
    

    // Right now, there's no need to check image format. Because in the official
    // web page the image will be a local image or an URL, not only an URL

    // Check that stock only has numbers
    if(stock){
        onlyNumbers(stock, "stock");
    }
    
}

export default productErrors;