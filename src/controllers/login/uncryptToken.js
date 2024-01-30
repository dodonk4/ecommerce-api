import jwt from 'jsonwebtoken';

const uncryptToken = (req, res, next) => {
    try {

        const token = req.body.token;

        if(!token){
            throw new Error("There is no token");
        }

        // if(token == undefined){
        //     throw new Error ("The token is undefined")
        // }

        const decodedToken = jwt.verify(token, "shhhh");

        res.send(decodedToken);

    } catch (error) {
        next(error);
        // console.log(error);
    }
    

}

export default uncryptToken;