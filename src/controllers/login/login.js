import jwt from "jsonwebtoken";
import onlyNumbersOrLetters from "../../utils/onlyNumbersOrLetters.js";
import bcrypt from "bcrypt";
import User from "../../schemas/User.js";

const login = async (req, res, next) => {
    try {
        // Look for user and his password

        const username_test = req.body.username;
        const password_test = req.body.password;

        console.log("ESTÁS EN EL LOGIN.JS")
        console.log(username_test, password_test)

        //Check for right format
        onlyNumbersOrLetters(username_test, "username");
        
        //Look for the user

        const user_test = await User.findOne({ username: username_test }, 'username password category shoppingCart')

        

        if(user_test === null){
            throw new Error ("User not found")
        }

        //compare user_test_password with encrpyt password_test

        const compare = await bcrypt.compare(password_test, user_test.password);

        console.log(compare);

        if (compare) {
            console.log('Correct Password');
            const user = {
                username: user_test.username,
                category: user_test.category,
                shoppingCart: user_test.shoppingCart,
            }
            
            const token = jwt.sign(user, process.env.TOKEN_KEY, {
                expiresIn: '7d',
            })
    
            res.json({
                message: 'Atutenticación exitosa',
                token: token,
            })
        } else {
            throw new Error("Wrong password");
        }

        
    } catch (error) {
        next(error)
    }
    
}

export default login;