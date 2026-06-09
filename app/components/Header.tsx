"use client"; // Required for useState and event handlers
import React, { useState } from "react";
import { FoodLogo } from "../icons/FoodLogo";
import { Nomnom } from "../icons/Nomnom";
import Link from "next/link";
import { MainSideBar } from "./mainsideBar";

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="w-full bg-black px-22 py-3 flex justify-between items-center">
      <div className="flex gap-3">
        <FoodLogo />
        <div>
          <Nomnom />
          <p className="text-white font-light text-[12px]">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-[13px] items-center">
        {/* Cart Trigger Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.36621 1.36621H2.69954L4.47288 9.64621C4.53793 9.94945 4.70666 10.2205 4.95002 10.4128C5.19338 10.605 5.49615 10.7064 5.80621 10.6995H12.3262C12.6297 10.6991 12.9239 10.5951 13.1602 10.4048C13.3966 10.2145 13.561 9.94923 13.6262 9.65288L14.7262 4.69954H3.41288M5.99954 13.9995C5.99954 14.3677 5.70107 14.6662 5.33288 14.6662C4.96469 14.6662 4.66621 14.3677 4.66621 13.9995C4.66621 13.6314 4.96469 13.3329 5.33288 13.3329C5.70107 13.3329 5.99954 13.6314 5.99954 13.9995ZM13.3329 13.9995C13.3329 14.3677 13.0344 14.6662 12.6662 14.6662C12.298 14.6662 11.9995 14.3677 11.9995 13.9995C11.9995 13.6314 12.298 13.3329 12.6662 13.3329C13.0344 13.3329 13.3329 13.6314 13.3329 13.9995Z"
              stroke="#18181B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <Link className="bg-white rounded-full px-3 py-2 " href="/signup">
          <p className="font-medium text-[14px] text-black">Sign up</p>
        </Link>
        <Link className="bg-red-500 rounded-full px-3 py-2 " href="/login">
          <p className="font-medium text-[14px] text-white">Login</p>
        </Link>
      </div>
      {isCartOpen && <MainSideBar onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};
