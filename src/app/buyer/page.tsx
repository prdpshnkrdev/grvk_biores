// /app/buyer/page.tsx
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function BuyerPage() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
