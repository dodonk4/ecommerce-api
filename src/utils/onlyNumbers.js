const onlyNumbers = (string, field) => {
    for (let i = 0; i < string.length; i++) {

        if(!isNaN(string[i])){
            switch(field){
                case "price":
                    console.log("The price is wrong")
                    throw new Error("Price is not a number")
                    break;
                case "stock":
                    console.log("The stock is wrong")
                    throw new Error("Stock is not a number")
                    break;
                default:
                    throw new Error
            }
        }
    }
}

export default onlyNumbers;