const shielded = (req, res, next) => {
    console.log(req);
    // res.send("I am protected");
    res.send("Hola")
}

export default shielded;