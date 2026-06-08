"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Your teacher's shadcn button
import { CldUploadWidget } from "next-cloudinary";

export default function AdminDishForm() {
  // 1. Setup local states for all form fields
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [categoryName, setCategoryName] = useState("Appetizers");
  const [imageUrl, setImageUrl] = useState(""); // Stores Cloudinary link string

  const [loading, setLoading] = useState(false);

  // 2. The submit handler that runs when clicking "Save Changes"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // We send a real POST request to the API route we fixed earlier!
      const response = await fetch("/api/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          foodName,
          price: parseFloat(price), // Converts the text input into a standard number
          image: imageUrl, // Pushes the online HTTPS cloud link string to Neon
          ingredients,
          foodDescription,
          categoryName,
        }),
      });

      if (response.ok) {
        alert("🎉 Dish added directly to Neon SQL beautifully!");
        // Clear out the fields after succeeding
        setFoodName("");
        setPrice("");
        setIngredients("");
        setFoodDescription("");
        setImageUrl("");
      } else {
        const errorData = await response.json();
        alert(`Error saving entry: ${errorData.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed connecting to network server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 max-w-md mx-auto bg-white rounded-xl border shadow-sm"
    >
      <h3 className="text-lg font-semibold">Dishes info</h3>

      {/* Dish Name */}
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 block mb-1">
          Dish name
        </label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm focus:outline-slate-400"
          placeholder="Brie Crostini Appetizer"
          required
        />
      </div>

      {/* Category Picker */}
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 block mb-1">
          Dish category
        </label>
        <select
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm bg-white"
        >
          <option value="Appetizers">Appetizers</option>
          <option value="Salads">Salads</option>
          <option value="Pizzas">Pizzas</option>
          <option value="Main dishes">Main dishes</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>

      {/* Ingredients */}
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 block mb-1">
          Ingredients
        </label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
          placeholder="Flour, maple syrup, pancakes"
        />
      </div>

      {/* Price */}
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 block mb-1">
          Price
        </label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
          placeholder="12.99"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 block mb-1">
          Description
        </label>
        <textarea
          value={foodDescription}
          onChange={(e) => setFoodDescription(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm h-20 resize-none"
          placeholder="Describe the item layout details..."
        />
      </div>

      {/* Cloudinary Image Picker Block */}
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-gray-500 block mb-1.5">
          Image File
        </label>
        <CldUploadWidget
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={(result: any) => setImageUrl(result.info.secure_url)}
          options={{ maxFiles: 1 }}
        >
          {({ open }) => (
            <div className="flex items-center gap-3">
              <Button type="button" variant="outline" onClick={() => open()}>
                Choose File
              </Button>
              <span className="text-xs text-muted-foreground">
                {imageUrl ? "✓ Asset ready to submit" : "No image uploaded yet"}
              </span>
            </div>
          )}
        </CldUploadWidget>

        {/* Display thumbnail box if image string is populated */}
        {imageUrl && (
          <div className="mt-3 w-20 h-20 border rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt="Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Submit Form with Shadcn Primary Button Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-900 text-white mt-2"
      >
        {loading ? "Saving entry..." : "Save changes"}
      </Button>
    </form>
  );
}
