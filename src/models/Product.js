const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: { type: String, reqired: true },
    desc: { type: String, reqired: true },
    price: { type: String, reqired: true },
    dprice: { type: String, reqired: false },
    stock: { type: String, reqired: true },
    color: { type: String, reqired: true },
    category:{ type: String, reqired: false },
    images: [{ type: String, reqired: true}],

}, { timestamps: true })

mongoose.models = {}
export default mongoose.model("Product", ProductSchema);
