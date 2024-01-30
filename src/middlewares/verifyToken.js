import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {


    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token){
        throw new Error("No token detected")
    }

    const bearerToken = token.split(' ')[1];

    let decodedToken;

    jwt.verify(bearerToken, process.env.TOKEN_KEY, (err, decoded)=>{
        if(decoded.category === "Admin"){
            console.log("You are visiting this page as an Admin");
        }else if (decoded.category === "Client"){
            console.log("You are visiting this page as a Client");
        }else{
            console.log("You are visiting this page as a category that is not listed");
        }
    })

    next(decodedToken);

}

export default verifyToken;