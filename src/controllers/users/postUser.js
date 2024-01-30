//"postUser" is different from "register" because it is a direct way to
//write an user by avoiding the simulation of the registration of a web page.
//On the other hand, register is trying to simulate registration of a web page


import User from "../../schemas/User.js"

const postUser = (req, res, next) => {

    try {

        const user = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            category: req.body.category,
            shoppingCart: req.body.shoppingCart
        });
    
        user.save();
    
        res.send(user);

    } catch (error) {

        next(error)

    }

    
};

export default postUser;