// models/Product.ts
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
  sold: { type: Number, default: 0 },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
