//"postUser" is different from "register" because it is a direct way to
//write an user by avoiding the simulation of the registration of a web page.
//On the other hand, register is trying to simulate registration of a web page

import User from "../../schemas/User.js";
import registerErrors from "../../utils/registerErrors.js";
import bcrypt from "bcrypt";

const register = async (req, res, next) => {
    try {
        
        if(!req.body.username || !req.body.email || !req.body.password || !req.body.shoppingCart){
            throw new Error("Not all gaps are filled")
        }

        await registerErrors(req.body.username, req.body.password, req.body.shoppingCart);

        const saltRounds = 10;

        bcrypt.genSalt(saltRounds, (err, salt)=>{
            if(err){
                console.error('Error creating salt:', err);
            }else{
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) {
                        console.error("Error creating hash:", err);
                    } else {

                        const user = new User({
                            username: req.body.username,
                            password: hash,
                            email: req.body.email,
                            category: "Client",
                            shoppingCart: req.body.shoppingCart
                        })
                        
                        user.save();
                
                        res.send(user);
                    }
                })
            }
        })

        
        
    } catch (error) {
        next(error);
    }
    
}

export default register;