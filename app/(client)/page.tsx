// app/(client)/page.tsx (or your main layout page)
import React from "react";
import { ProductCard } from "../components/product-card";

// 1. Create the fetch helper
async function getMenuData() {
  // We hit your local API route. Next.js handles this securely.
  const res = await fetch("http://localhost:3000/api/foods", {
    cache: "no-store", // Enforces fresh data on every page reload
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu items from database");
  }

  return res.json();
}

export default async function Homepage() {
  // 2. Await the data right inside your server component
  const menuItems = await getMenuData();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Delicious Menu
      </h1>

      {/* 3. Check if menu is empty */}
      {menuItems.length === 0 ? (
        <p className="text-center text-gray-500">
          No items found. Add some using Thunder Client!
        </p>
      ) : (
        /* 4. Map and render your cards onto the screen flex grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item: any) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </main>
  );
}
