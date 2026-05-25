import React from "react";

export const OrderStatus = () => {
  return (
    <div className='flex p-1 gap-2 items-center bg-white rounded-full'>
      <button className='bg-red-500 py-1 px-2 rounded-full items-center justify-center '>
        <p className='text-white  text-[18px] font-light'>Card</p>
      </button>
      <button className='bg-red-500 py-1 px-2 rounded-full items-center justify-center '>
        <p className='text-white  text-[18px] font-light'>Order</p>
      </button>
    </div>
  );
};
