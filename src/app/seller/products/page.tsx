"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SellerProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", inventory: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      name: form.name,
      price: parseFloat(form.price),
      inventory: parseInt(form.inventory),
    };

    if (editingId) {
      await fetch(`/api/products/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    setForm({ name: "", price: "", inventory: "" });
    setEditingId(null);
    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const handleEdit = (product: any) => {
    setForm({
      name: product.name,
      price: product.price.toString(),
      inventory: product.inventory.toString(),
    });
    setEditingId(product._id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

      {/* Navigation to Seller Dashboard */}
      <button
        onClick={() => router.push("/seller/dashboard")}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* Product Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 space-y-4 bg-white p-4 rounded shadow"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Inventory"
          value={form.inventory}
          onChange={(e) => setForm({ ...form, inventory: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <div className="grid gap-4">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Inventory: {product.inventory}</p>
              <p>Sold: {product.sold}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(product)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
