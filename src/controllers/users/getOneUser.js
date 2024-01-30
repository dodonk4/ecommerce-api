import User from "../../schemas/User.js"

const getOneUser = async (req, res, next) => {

    try {
        

        if(req.body.username){
            const user = await User.findOne({username: req.body.username}, "username shoppingCart");
            
            res.send(user);

        }else{  
            //Error you need to pass an username and password
            throw Error("You need to write your username and password")
        }

    } catch (error) {
        next(error)
    }

    

}

export default getOneUser