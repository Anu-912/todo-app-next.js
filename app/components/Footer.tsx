import React from "react";
import { FoodLogo } from "../icons/FoodLogo";
import { Nomnom } from "../icons/Nomnom";
import MarqueeBanner from "./Marqueebanner";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className='flex-col justify-end bg-black py-12'>
      <MarqueeBanner />
      <div className='my-19 px-22 flex justify-start'>
        <div className='mr-55 '>
          <FoodLogo />
          <Nomnom />
          <p className='text-white font-light text-[12px]'>Swift delivery</p>
        </div>
        <div className='gap-28 flex'>
          <div className='space-y-4'>
            <p className='text-[16px] font-light text-[#71717A]'>NOMNOM</p>
            <Link href={""}>
              {" "}
              <p className='text-[16px] font-light'>Home</p>{" "}
            </Link>
            <p className='text-[16px] font-light'>Contact us</p>
            <p className='text-[16px] font-light'>Delivery zone</p>
          </div>
        </div>
      </div>
    </div>
  );
};
