import React from "react";

export const AddedCard = () => {
  return (
    <div className='absolute left-[537px] top-[112px] gap-4 flex items-center justify-center bg-black border-solid border-white border-[1px] '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <path
          d='M13.3334 4L6.00002 11.3333L2.66669 8'
          stroke='#E4E4E7'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
      <p className='text-white text-[20px] font-medium '>
        Food is being added to the cart!
      </p>
    </div>
  );
};
