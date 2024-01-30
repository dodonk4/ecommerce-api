import db from "../../database/db.js";
import User from "../../schemas/User.js";

const getUsers = async (req, res) => {

        const users = await User.find();
        res.send(users);

}

export default getUsers;