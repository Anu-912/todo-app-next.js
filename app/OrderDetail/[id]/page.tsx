import { ShoppingLogo } from "@/app/icons/ShoppingLogo";
import React from "react";

const page = () => {
  return (
    <div className='bg-[#404040] flex w-[534px] p-8 flex-col items-start gap-6 rounded-bl-[20px] rounded-tl-[20px]'>
      <div className='flex justify-between itmes-center '>
        <div className='flex gap-3'>
          <ShoppingLogo />
          <p className='text-[20px] font-semibold text-shadow-white'>
            Order Detail
          </p>
        </div>
        <button className='w-9 h-9 rounded-full border-solid border-[1px] border-[#E4E4E7] items-center justify-center flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M12 4L4 12M4 4L12 12'
              stroke='#E4E4E7'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default page;
