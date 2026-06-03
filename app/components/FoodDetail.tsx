"use client";
import React, { useState } from "react";
import { Foods } from "../generated/prisma/client";
import { useCartStore } from "../cart/cart-store";

export const FoodDetail = ({
  card,
  onClose,
}: {
  card: Foods;
  onClose: () => void;
}) => {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const priceNumber = parseFloat(String(card.price).replace(/[^0-9.]/g, ""));
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: card.id,
        foodName: card.foodName,
        price: priceNumber,
        image: card.image,
      });
    }
    onClose();
  };

  return (
    <div className='flex w-[826px] h-103 p-6 gap-6 rounded-[20px] bg-white'>
      <img
        className='rounded-xl bg-no-repeat bg-cover'
        src={card.image}
        alt={card.foodName}
      />
      <div className='flex-col'>
        <button
          onClick={onClose}
          className='w-9 h-9 rounded-full items-center justify-center '
        >
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
        <p className='text-[30px] font-semibold text-red-500'>
          Sunshine Stackers{" "}
        </p>
        <p className='text-[16px] font-light'>{card.foodDescription}</p>
        <div className='flex justify-between'>
          <div>
            <p className='text-[16px] font-light'>Total price</p>
            <p className='text-[24px] font-semibold'>
              ${(priceNumber * quantity).toFixed(2)}
            </p>
          </div>
          <div className='flex'>
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className='border-black mx-3 border-solid border-[1px] w-11 h-11  flex justify-center  items-center '
            >
              -
            </button>
            <input
              type='number'
              value={quantity}
              readOnly
            />
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className='border-black mx-3 border-solid border-[1px] w-11 h-11  flex justify-center  items-center '
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className='bg-black rounded-full flex items-center px-8 py-2 '
        >
          <p className='text-white text-[14px] font-medium'>
            Add to Cart · ${(priceNumber * quantity).toFixed(2)}
          </p>
        </button>
      </div>
    </div>
  );
};
