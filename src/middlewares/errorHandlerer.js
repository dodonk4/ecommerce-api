const errorHandlerer = (err, req, res, next) => {
    switch (err.message) {

        case "Product with id not found"://FOR HANDLERING SHOPPING CART
        res.status(400).send("The product with the ID: " + err.customMessage + " does not exist");
        break;
        
        case "Product not found"://FOR HANDLERING SHOPPING CART
            res.status(400).send("A product in the shoppingCart does not exist");
            break;

        case "User not found":
            res.status(400).send("The user was not found");
            break;

        case "No username or password":
            res.status(400).send("You must provide a username and a password");
            break;

        case "ShoppingCart is not an array":
            res.status(400).send("The content in the cart must be an array with an spececific format (<name>-<stock>)");
            break;
    
        case "Content is not string":
            res.status(400).send("The content in the cart must not have content apart from strings");
            break;

        case "Bad Login":
            res.status(400).send("Failed to login");
            break;

        case "ShoppingCart content wrong format":
            res.status(400).send("The format for every string inside shoppingCart array has to be <name>-<stock>");
            break;

        case "Stock is not a number":
            res.status(400).send("The stock has to be pure numbers");
            break;

        case "Price is not a number":
            res.status(400).send("The price has to be pure numbers");
            break;
        
        case "Wrong username format":
            res.status(400).send("The username must have only letters and/or numbers");
            break;

        case "Wrong name format":
            res.status(400).send("The name must have only letters and/or numbers");
            break;

        case "A field is not filled":
            res.status(400).send("All the fields must be filled to create a product");
            break;

        case "No token detected":
            res.status(400).send("You must be logged in");
            break;

        case "No id provided":
            res.status(400).send("You must provide an ID");
            break;

        case "No field provided":
            res.status(400).send("You must provide at least one field");
            break;

        case "Repeated name":
            res.status(400).send("You cannot name a new product with the name of a existent one");
            break;

        default:
            console.log("Error: " + err.message);
            res.send("Error: " + err.message)
            break;
    }
}

export default errorHandlerer