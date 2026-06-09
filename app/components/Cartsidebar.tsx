"use client";
import { useCart } from "@/hooks/use-cart";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartSidebar({ onClose }: { onClose: () => void }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );

  return (
    <div className="flex flex-col h-full p-6">
      {/* Items List */}
      <div className="flex-1 overflow-y-auto space-y-6">
        {cart.length === 0 ? (
          <div className="text-center py-10 text-zinc-500">
            <p>Your cart is empty</p>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <img
                src={item.image || "/placeholder.jpg"}
                className="w-16 h-16 rounded-lg object-cover"
                alt={item.foodName}
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.foodName}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => addToCart(item, -1)}>
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item, 1)}>
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-bold">
                  ${(Number(item.price) * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Section */}
      {cart.length > 0 && (
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold"
            onClick={() => {
              /* Add your auth check here */
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
