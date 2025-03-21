import Layout from "@/components/Layout";
import { products } from "@/data/products";

export default function Dashboard() {
  const totalProducts = products.length;
  const totalSales = products.reduce((sum, p) => sum + p.sold * p.price, 0);
  const totalInventory = products.reduce((sum, p) => sum + p.inventory, 0);

  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4">Seller Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-2xl font-bold">{totalProducts}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-sm text-gray-500">Total Sales</p>
          <p className="text-2xl font-bold">${totalSales.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-sm text-gray-500">Inventory</p>
          <p className="text-2xl font-bold">{totalInventory}</p>
        </div>
      </div>
    </Layout>
  );
}
