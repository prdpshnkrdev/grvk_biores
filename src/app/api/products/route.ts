// app/api/products/route.ts
import connectToDB from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const data = await req.json();
  await connectToDB();
  const product = await Product.create(data);
  return NextResponse.json(product);
}
