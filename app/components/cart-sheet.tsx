"use client";

import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../cart/cart-store";

export function CartSheet() {
  const {
    items,
    removeItem,
    increaseQty,
    decreaseQty,
    totalItems,
    totalPrice,
  } = useCartStore();

  const count = totalItems();
  const total = totalPrice();

  return (
    // Sheet is the container — it manages open/close state
    <Sheet>
      {/* SheetTrigger is the button that OPENS the cart panel */}
      <SheetTrigger asChild>
        <button
          type='button'
          aria-label='Open cart'
          className='relative flex items-center justify-center'
        >
          {/* Cart icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <g clipPath='url(#clip0_cart)'>
              <path
                d='M2.05005 2.05H4.05005L6.71005 14.47C6.80763 14.9249 7.06072 15.3315 7.42576 15.6199C7.7908 15.9082 8.24495 16.0604 8.71005 16.05H18.49C18.9452 16.0493 19.3865 15.8933 19.7411 15.6078C20.0956 15.3224 20.3422 14.9245 20.4401 14.48L22.09 7.05H5.12005M9.00005 21C9.00005 21.5523 8.55233 22 8.00005 22C7.44776 22 7.00005 21.5523 7.00005 21C7.00005 20.4477 7.44776 20 8.00005 20C8.55233 20 9.00005 20.4477 9.00005 21ZM20 21C20 21.5523 19.5523 22 19 22C18.4478 22 18 21.5523 18 21C18 20.4477 18.4478 20 19 20C19.5523 20 20 20.4477 20 21Z'
                stroke='#E4E4E7'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_cart'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                />
              </clipPath>
            </defs>
          </svg>

          {/* Red badge showing number of items — only shows if cart has items */}
          {count > 0 && (
            <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white'>
              {count}
            </span>
          )}
        </button>
      </SheetTrigger>

      {/* SheetContent is the panel that slides in from the right */}
      <SheetContent
        side='right'
        className='flex w-full flex-col sm:max-w-md bg-white p-0'
        showCloseButton={true}
      >
        {/* Header of the panel */}
        <SheetHeader className='border-b px-6 py-4'>
          <SheetTitle className='flex items-center gap-2 text-xl font-semibold'>
            <ShoppingCart className='h-5 w-5' />
            Your Cart
            {count > 0 && (
              <span className='ml-1 text-sm font-normal text-gray-500'>
                ({count} {count === 1 ? "item" : "items"})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* MAIN CONTENT — the list of cart items */}
        <div className='flex-1 overflow-y-auto px-6 py-4'>
          {/* Empty state — shown when cart has nothing */}
          {
            items.length === 0 ?
              <div className='flex flex-col items-center justify-center gap-4 py-20 text-center'>
                <ShoppingCart className='h-16 w-16 text-gray-300' />
                <p className='text-lg font-medium text-gray-500'>
                  Your cart is empty
                </p>
                <p className='text-sm text-gray-400'>
                  Add some delicious food to get started!
                </p>
              </div>
              // List of items — each item is one row
            : <ul className='flex flex-col gap-4'>
                {items.map((item) => (
                  <li
                    key={item.id}
                    className='flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-3'
                  >
                    {/* Food image — shows the picture from your database */}
                    <div className='relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl'>
                      <Image
                        src={item.image}
                        alt={item.foodName}
                        fill
                        sizes='80px'
                        className='object-cover'
                      />
                    </div>

                    {/* Item details */}
                    <div className='flex flex-1 flex-col gap-2'>
                      {/* Name and delete button on same row */}
                      <div className='flex items-start justify-between'>
                        <p className='font-semibold leading-tight text-gray-900'>
                          {item.foodName}
                        </p>
                        {/* Delete button — removes item completely */}
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.foodName} from cart`}
                          className='ml-2 flex-shrink-0 rounded-full p-1 text-gray-400 transition hover:bg-red-50 hover:text-red-500'
                        >
                          <Trash2 className='h-4 w-4' />
                        </button>
                      </div>

                      {/* Price and quantity controls on same row */}
                      <div className='flex items-center justify-between'>
                        {/* Price — multiplied by quantity */}
                        <p className='text-sm font-semibold text-gray-700'>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        {/* Quantity controls: minus, number, plus */}
                        <div className='flex items-center gap-2 rounded-full border border-gray-200 bg-white px-1'>
                          {/* Minus button */}
                          <button
                            onClick={() => decreaseQty(item.id)}
                            aria-label='Decrease quantity'
                            className='flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-gray-100'
                          >
                            <Minus className='h-3 w-3' />
                          </button>

                          {/* Current quantity number */}
                          <span className='w-6 text-center text-sm font-semibold'>
                            {item.quantity}
                          </span>

                          {/* Plus button */}
                          <button
                            onClick={() => increaseQty(item.id)}
                            aria-label='Increase quantity'
                            className='flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-gray-100'
                          >
                            <Plus className='h-3 w-3' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

          }
        </div>

        {/* Footer — total price and checkout button, only shown when cart has items */}
        {items.length > 0 && (
          <SheetFooter className='border-t bg-white px-6 py-4'>
            <div className='w-full space-y-4'>
              {/* Total price row */}
              <div className='flex items-center justify-between'>
                <span className='text-base font-medium text-gray-600'>
                  Total
                </span>
                <span className='text-xl font-bold text-gray-900'>
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout button */}
              <Button className='w-full rounded-full bg-black py-6 text-white hover:bg-gray-800'>
                Checkout · ${total.toFixed(2)}
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
