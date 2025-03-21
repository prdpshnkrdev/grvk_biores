"use client";

import { useRouter } from "next/navigation"; // Import the router

export default function SellerDashboard() {
  const router = useRouter(); // Initialize router

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Seller Dashboard</h1>

      {/* Add a button to navigate to Product Management */}
      <button
        onClick={() => router.push("/seller/products")}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        📦 Manage Products
      </button>

      {/* Order Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl">0</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-2xl">$0.00</p>
        </div>
      </div>
    </div>
  );
}
