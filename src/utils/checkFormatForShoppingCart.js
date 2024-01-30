import Product from "../schemas/Product.js";

const checkFormatForShoppingCart = async (input) => {


        let countForDash = 0;

        for (let i = 0; i < input.length; i++) {
            input[i] === '-' ? countForDash++ : '';
        }

        if(countForDash != 1){
            throw new Error ("ShoppingCart content wrong format")
        }

        //Checking the two dash sides
        const productName = input.split('-')[0];
        const stock = input.split('-')[1];

        const productToFind = await Product.findOne({ name: productName }, 'name');
        
        for (let i = 0; i < stock.length; i++) {
            if(isNaN(parseInt(stock[i]))){
                throw new Error("Stock is not a number");
            }
        }

        if(productToFind === null){
            throw new Error ("Product not found")
        }

};


export default checkFormatForShoppingCart;