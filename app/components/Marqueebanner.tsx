"use client";

import { useRef } from "react";

const ITEMS = [
  "Fresh fast delivered",
  "Fresh fast delivered",
  "Fresh fast delivered",
  "Fresh fast delivered",
  "Fresh fast delivered",
  "Fresh fast delivered",
  "Fresh fast delivered",
  "Fresh fast delivered",
];

export default function MarqueeBanner() {
  return (
    <div className='marquee-wrapper '>
      <div className='marquee-track'>
        {[...ITEMS, ...ITEMS].map((text, i) => (
          <span
            key={i}
            className='marquee-item'
          >
            {text}
          </span>
        ))}
      </div>

      <style>{`
        .marquee-wrapper {
          overflow: hidden;
          background-color: #f04040;
          padding: 14px 0;
          width: full;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.02em;
          padding: 0 2.5rem;
          white-space: nowrap;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Pause on hover */
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
