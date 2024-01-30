import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    category: {
        type: String,
        enum: ["Client", "Admin"],
    },
    shoppingCart: {
        type: [String],
    },
})

export default mongoose.model("User", UserSchema);