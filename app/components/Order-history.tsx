import React from "react";
import { Foods } from "../generated/prisma/client";
import { Foodicon } from "../icons/Foodicon";

export const OrderHistory = ({ order }: { order: Foods }) => {
  return (
    <div className='flex-col gap-3'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <p className='text-[16px] font-bold'>{order.price}</p>
          <p className='text-[16px] font-bold'></p>
        </div>
        <div className='border-[1px] border-red-500 rounded-[20px] flex items-center justify-center'></div>
      </div>
      <div>
        <Foodicon />
      </div>
    </div>
  );
};
