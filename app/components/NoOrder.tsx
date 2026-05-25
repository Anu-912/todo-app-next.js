import React from "react";
import { FoodLogo } from "../icons/FoodLogo";

export const NoOrder = () => {
  return (
    <div className='flex flex-col py-8 px-12 bg-[#F4F4F5] rounded-xl items-center  '>
      <FoodLogo />
      <p className='text-[16px] font-bold '>No Orders Yet? </p>
      <p className='text-[#71717A] text-[14px] font-light'>
        🍕 You have not placed any orders yet. Start exploring our menu and
        satisfy your cravings!
      </p>
    </div>
  );
};
