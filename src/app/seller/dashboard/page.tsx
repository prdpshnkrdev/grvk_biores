// app/seller/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function SellerDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then(setOrders);
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Seller Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl">{orders.length}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-2xl">
            ${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6">Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white p-4 shadow rounded">
            <p>
              <strong>Buyer:</strong> {order.buyer}
            </p>
            <p>
              <strong>Total:</strong> ${order.total}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Products:</strong>
            </p>
            <ul>
              {order.products.map((p, index) => (
                <li key={index}>
                  {p.name} x {p.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
