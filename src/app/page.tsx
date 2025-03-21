"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-5 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Ecommerce Platform</h1>
        <div>
          <Link
            href="/buyer"
            className="mr-4 text-gray-700 hover:text-blue-600"
          >
            Buyer
          </Link>
          <Link
            href="/seller/dashboard"
            className="text-gray-700 hover:text-blue-600"
          >
            Seller
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-20">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to the Ecommerce Platform
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Buy and sell products effortlessly
        </p>

        {/* CTA Buttons */}
        <div className="space-x-4">
          <Link
            href="/buyer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            I'm a Buyer
          </Link>
          <Link
            href="/seller/dashboard"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            I'm a Seller
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="mt-16 w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hardcoded products for now (later, fetch from API) */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">Sneakers</h3>
            <p className="text-gray-600">$59.99</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">Backpack</h3>
            <p className="text-gray-600">$29.99</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">Headphones</h3>
            <p className="text-gray-600">$99.99</p>
          </div>
        </div>
      </section>
    </main>
  );
}
