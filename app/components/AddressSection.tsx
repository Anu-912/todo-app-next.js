import React from "react";

export const AddressSection = () => {
  return (
    <div className='bg-white rounded-[20px] px-6 py-8 flex -col gap-24px '>
      <div className='flex justify-between'>
        <p className='text-[24px] font-semibold'>
          Please write your delivery address!
        </p>
        <button className='w-10 h-10 rounded-full fle items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M12 4L4 12M4 4L12 12'
              stroke='#18181B'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>
      <input
        className='flex h-20 flex-col justify-start gap-2 px-3 roudned-md border-solid border-[#E4E4E7] border-[1px]'
        type='text'
      />
      <div className=' flex gap-4 justify-end'>
        <button className='border-solid px-4 rounded-md items-center flex border-[#E4E4E7]'>
          <p className='text-[14px] font-medium'>Cancel</p>
        </button>
        <button className='rounded-md bg-black px-4 fle items-center '>
          <p className='text-[14px] font-medium text-shadow-white'>
            Deliver Here{" "}
          </p>
        </button>
      </div>
    </div>
  );
};
