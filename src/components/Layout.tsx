import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">Ecommerce Platform</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
