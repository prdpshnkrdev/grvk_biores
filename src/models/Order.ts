// models/Order.ts
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  buyer: { type: String, required: true }, // Simulated buyer ID (later can link to Users)
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
  status: { type: String, default: "Pending" }, // Order status: Pending, Shipped, Delivered
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
