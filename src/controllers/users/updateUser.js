import User from "../../schemas/User.js";

const updateUser = async (req, res, next) => {
    try {
        
        let objectToPassAsProps = {};

        console.log(req.body);

        if(!req.body){
            throw new Error("You must update something to use this call") //Colocoarlo en el arbol de errores
        }

        if(!req.body.username){
            throw new Error("You must select an username to point which user you want to update") //Colocoarlo en el arbol de errores
        }

        console.log((req.body.shoppingCart && !req.body.shoppingCartMethod) || (!req.body.shoppingCart && req.body.shoppingCartMethod));

        // if((req.body.shoppingCart && !req.body.shoppingCartMethod) || (!req.body.shoppingCart && req.body.shoppingCartMethod)){
        //     throw new Error("You must pass the shoopingCartMethod with the shoppingCart")
        // }

        if(req.body.newUsername){
            //Controlar que esté bien escrito
            objectToPassAsProps.username = req.body.newUsername;
        }

        if(req.body.password){
            //Revisar si esto no requiere autorización
        }

        if(req.body.email){
            objectToPassAsProps.email = req.body.email;
        }

        if(req.body.category){
            objectToPassAsProps.category = req.body.category;
        }

        if(req.body.shoppingCart){

            if(req.body.shoppingCartMethod == "replace"){
                objectToPassAsProps.shoppingCart = req.body.shoppingCart;
            }else if(req.body.shoppingCartMethod == "add"){
                objectToPassAsProps.$push = { shoppingCart: req.body.shoppingCart};
            }else if(req.body.shoppingCartMethod == "delete"){
                objectToPassAsProps.$pull = { shoppingCart: { $regex: req.body.shoppingCart, $options: 'i' }}; //Y ACORDATE DE LA CANTIDAD A50S-¡¡6!!
                console.log(objectToPassAsProps);
            }else{
                throw new Error("Invalid shoppingCart method: you must indicate 'add' or 'replace'")//Agregar delete
            }
            
        }

        if(req.body.quantity && !req.body.product){
            throw new Error("You must indicate the product to change its quantity")
        }else if(!req.body.quantity && req.body.product){
            throw new Error("You must indicate the quantity to change the product number")
        }else if(req.body.quantity && req.body.product){
            objectToPassAsProps.$pull = { shoppingCart: { $regex: req.body.product, $options: 'i' }};
            await User.findOneAndUpdate({ username: req.body.username }, objectToPassAsProps );
            delete objectToPassAsProps.$pull;
            objectToPassAsProps.$push = { shoppingCart: `${req.body.product}-${req.body.quantity}`};
        }

        console.log(objectToPassAsProps)

        const user = await User.findOneAndUpdate({ username: req.body.username }, objectToPassAsProps );

        res.send(user);

    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default updateUser;