import { LoginImage } from "@/app/icons/LoginImage";
import { Long_Cang } from "next/font/google";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className='bg-white w-full h-full flex '>
      <div className='flex-col ml-25 gap-6  '>
        <Link href={""}>
          <button className='w-9 h-9 border-[#E4E4E7] justify-center itmes-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M10 12L6 8L10 4'
                stroke='#18181B'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </Link>
        <div>
          <p className='text-[24px] font-semibold text-black'>Log in</p>
          <p className='text-[16px] font-light'>
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <div className=' flex-col gap-4'>
          <input
            type='email'
            className='h-9 w-104 px-3 items-centers'
          />
          <input
            type='password'
            className='h-9 w-104 px-3 items-centers'
          />
          <Link href={""}>
            <p className='text-[14px] font-light border-b-[2px] border-b-black'>
              Forget password?
            </p>
          </Link>
        </div>
        <Link href={""}>
          <button className='w-104 h-9 flex items-center justify-center'>
            <p className='text-white text-[14px] font-semibold'>lets go </p>
          </button>
        </Link>
        <div className='flex justify-center'>
          <p className='text-[16px] font-light text-[#71717A]'>
            Don’t have an account?
          </p>
          <Link href={""}>
            <p className='text-[#2563EB] text-[14px] font-light'>Sign up</p>
          </Link>
        </div>
      </div>
      <LoginImage />
    </div>
  );
};

export default page;
