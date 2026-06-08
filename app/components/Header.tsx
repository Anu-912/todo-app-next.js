import React from "react";
import { FoodLogo } from "../icons/FoodLogo";
import { Nomnom } from "../icons/Nomnom";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full bg-black px-22 py-3 flex justify-between ">
      <div className="flex gap-3">
        <FoodLogo />
        <div>
          <Nomnom />
          <p className="text-white font-light text-[12px]">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-[13px]">
        {/* 1. Point href to your /signup folder route */}
        <Link className="bg-white rounded-full px-3 py-2 " href="/signup">
          {" "}
          <p className="font-medium text-[14px] text-black">Sign up</p>
        </Link>
        {/* 2. Point href to your /login folder route */}
        <Link className="bg-red-500 rounded-full px-3 py-2 " href="/login">
          {" "}
          <p className="font-medium text-[14px] text-white">Login</p>
        </Link>
      </div>
    </div>
  );
};
