const onlyNumbersOrLetters = (string, field) => {

    console.log(string);

    for (let i = 0; i < string.length; i++) {

        const regex = /[a-zA-Z]/;

        if(isNaN(string[i]) && !regex.test(string[i])){
            switch(field){
                case "username":
                    console.log("The username is wrong")
                    throw new Error("Wrong username format")
                    break;
                case "name":
                    console.log("The name is wrong")
                    throw new Error("Wrong name format")
                    break;
                default:
                    throw new Error
            }
        }
    }
}

export default onlyNumbersOrLetters