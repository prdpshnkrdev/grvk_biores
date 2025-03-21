// app/api/products/[id]/route.ts
import connectToDB from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  await connectToDB();
  const updated = await Product.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await connectToDB();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
