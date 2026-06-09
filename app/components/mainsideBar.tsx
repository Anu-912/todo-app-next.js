"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { CartSidebar } from "./Cartsidebar";
import { OrderSidebar } from "./ordersidebar";

export function MainSideBar({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"cart" | "order">("cart");

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
      <div className="w-full max-w-md bg-white shadow-2xl flex flex-col h-full">
        {/* Header/Tabs */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Order detail</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="flex p-1 bg-zinc-100 rounded-xl">
            <button
              onClick={() => setActiveTab("cart")}
              className={`flex-1 py-2 rounded-lg font-medium transition ${activeTab === "cart" ? "bg-red-500 text-white" : "text-zinc-600"}`}
            >
              Cart
            </button>
            <button
              onClick={() => setActiveTab("order")}
              className={`flex-1 py-2 rounded-lg font-medium transition ${activeTab === "order" ? "bg-red-500 text-white" : "text-zinc-600"}`}
            >
              Order
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "cart" ? (
            <CartSidebar onClose={onClose} />
          ) : (
            <OrderSidebar />
          )}
        </div>
      </div>
    </div>
  );
}
