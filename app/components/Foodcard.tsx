import Link from "next/link";
import React from "react";
import { Foods } from "../generated/prisma/client";

export const Foodcard = ({ card }: { card: Foods }) => {
  return (
    <Link
      className='block'
      href={"/foodDetail" + card.id}
    >
      <div className='flex flex-col items-start bg-white rounded-[20px] p-4 gap-5 '>
        <img
          src={`https://images.tmdb.org/t/p/w300${card.poster_path}`}
          alt={card.foodName}
          className='flex p-5 items-end justify-end rounded-[12px] absolute '
        />
        <button className='flex justify-center items-center w-11 h-11 bg-white rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M8.00016 3.33331V12.6666M3.3335 7.99998H12.6668'
              stroke='#EF4444'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
        <div className=' flex justify-between'>
          <p className='text-red-500 text-6 font-semibold'>{card.foodName}</p>
          <p className='text-black text-[18px] font-semibold'>{card.price}</p>
        </div>
        <p className='text-[14px] font-light'>{card.foodDescription}</p>
      </div>
    </Link>
  );
};
// import React from "react";
// import { img, MovieSummary } from "../type";
// import Image from "next/image";
// import Link from "next/link";

// export const Moviecards = ({ card }: { card: MovieSummary }) => {
//   return (
//     <Link
//       href={"/movieDetail/" + card.id}
//       // href={`/movie/${card.id}`} "/product/" + product.id
//       className='block'
//     >
//       <img
//         className='aspect-230/340 w-full object-cover rounded-t-md hover:opacity-80 bg-black'
//         src={`https://images.tmdb.org/t/p/w300${card.poster_path}`}
//         alt={card.title}
//       />
//       <div className='p-2 bg-[#F4F4F5] rounded-b-md'>
//         <div className='flex items-center'>
//           <svg
//             width='16'
//             height='18'
//             viewBox='0 0 16 18'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M7.99967 3.3335L10.0597 7.50683L14.6663 8.18016L11.333 11.4268L12.1197 16.0135L7.99967 13.8468L3.87967 16.0135L4.66634 11.4268L1.33301 8.18016L5.93967 7.50683L7.99967 3.3335Z'
//               fill='#FDE047'
//               stroke='#FDE047'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             />
//           </svg>
//           {card.vote_average.toFixed(1)}/10
//         </div>
//         <div className='text-[#09090B] text-lg line-clamp-2 max-14 overflow-hidden'>
//           {card.title}
//         </div>
//       </div>
//     </Link>
//   );
// };
