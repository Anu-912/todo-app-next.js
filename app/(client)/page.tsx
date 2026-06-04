// app/(client)/page.tsx
import React from "react";
import { Hero } from "../components/hero";
import Menu from "../components/menu";

// 1. Create a quick client-side fetch helper
async function getMenuFromApi() {
  try {
    const res = await fetch("http://localhost:3000/api/foods", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error(error);
    return []; // Fallback to an empty list if your server is down
  }
}

export default async function Homepage() {
  // 2. Call your API right here
  const apiMenuFoods = await getMenuFromApi();

  return (
    <div className="bg-[#181818] min-h-screen text-white">
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* 3. Pass your live API data right into the menu! */}
        <Menu foods={apiMenuFoods} />
      </main>
    </div>
  );
}
