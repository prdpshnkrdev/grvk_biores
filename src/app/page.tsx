import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to the Ecommerce Platform
      </h1>
      <div className="space-x-4">
        <Link
          href="/buyer"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          I’m a Buyer
        </Link>
        <Link
          href="/seller/dashboard"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          I’m a Seller
        </Link>
      </div>
    </main>
  );
}
