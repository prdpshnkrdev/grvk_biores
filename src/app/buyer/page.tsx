"use client";

import { useEffect, useState } from "react";

export default function BuyerPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const placeOrder = async () => {
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buyer: "test_buyer", products: cart }),
    });
    alert("Order placed!");
    setCart([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Buyer Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.inventory}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 p-4 bg-gray-200 rounded">
          <h2 className="text-xl font-bold">Cart</h2>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} x {item.quantity}
            </p>
          ))}
          <button
            onClick={placeOrder}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
