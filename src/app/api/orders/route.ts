// app/api/orders/route.ts
import connectToDB from "@/lib/mongoose";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB();
  const orders = await Order.find();
  return NextResponse.json(orders);
}

// app/api/orders/route.ts
import Product from "@/models/Product";

export async function POST(req: Request) {
  const { buyer, products } = await req.json();
  await connectToDB();

  let total = 0;
  const updatedProducts = [];

  for (let item of products) {
    const product = await Product.findById(item.productId);
    if (!product || product.inventory < item.quantity) {
      return NextResponse.json(
        { error: "Product out of stock" },
        { status: 400 }
      );
    }

    product.inventory -= item.quantity;
    product.sold += item.quantity;
    await product.save();

    updatedProducts.push({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
    });

    total += product.price * item.quantity;
  }

  const order = await Order.create({ buyer, products: updatedProducts, total });
  return NextResponse.json(order);
}
