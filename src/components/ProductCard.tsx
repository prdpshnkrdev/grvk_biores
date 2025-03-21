import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  inventory: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">${product.price}</p>
      <p className="text-sm">In Stock: {product.inventory}</p>
    </div>
  );
}
