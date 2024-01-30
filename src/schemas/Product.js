import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        // required: true,
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String, //It could be an enum once all categories are declared
        required: true,
    },
    type: {
        type: String, //It could be an enum once all categories are declared
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    caracteristics: {
        type: [String], //Max of 3 strings
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    wordsToMatch: {
        type: [String],
        required: false
    },
})

export default mongoose.model("Product", ProductSchema);