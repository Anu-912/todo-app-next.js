"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function OrderSidebar() {
  // In a real app, this data comes from your API/database
  const orders = [
    {
      id: "20156",
      total: 26.97,
      status: "Pending",
      items: ["Sunshine Stackers", "Sunshine Stackers"],
      date: "2024/12/20",
    },
    {
      id: "20156",
      total: 12.99,
      status: "Delivered",
      items: ["Sunshine Stackers"],
      date: "2024/12/20",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {orders.map((order, idx) => (
        <Card key={idx} className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">
              ${order.total} (#{order.id})
            </h3>
            <Badge
              variant={order.status === "Pending" ? "default" : "secondary"}
            >
              {order.status}
            </Badge>
          </div>

          <div className="text-sm text-zinc-600 space-y-1">
            {order.items.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>{item}</span>
                <span>x 1</span>
              </div>
            ))}
            <p className="pt-2 text-xs text-zinc-400">📅 {order.date}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
