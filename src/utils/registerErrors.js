import checkFormatForShoppingCart from "./checkFormatForShoppingCart.js"

const registerErrors = async (username, password, shoppingCart) => {
    if (!username || !password) {
        throw new Error ("No username or password")
    }

    if(shoppingCart){

        
        if(!Array.isArray(shoppingCart)){
            throw new Error ("ShoppingCart is not an array")
        }

        const allProductsInShoppingCart = {};

        for (let i = 0; i < shoppingCart.length; i++) {

            if(typeof shoppingCart[i] != "string"){
                throw new Error ("Content is not string")
            }

            await checkFormatForShoppingCart(shoppingCart[i]);

            const product = shoppingCart[i].split('-')[0];

            if(allProductsInShoppingCart[product]){
                throw new Error ("The product is repeated")
            }

            allProductsInShoppingCart[product] = true;


        }
    }
}

export default registerErrors;