const mongoose = require('mongoose')


const TopDealsProductSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Reference to Product
  });


mongoose.models = {}
export default mongoose.model("TopDeals", TopDealsProductSchema);