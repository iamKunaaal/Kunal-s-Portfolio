import React from 'react';

interface SQLiteProps {
  className?: string;
}

export default function SQLite({ className }: SQLiteProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient id="sqlite-a" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#97D9F6" />
          <stop offset="100%" stopColor="#0F80CC" />
        </linearGradient>
      </defs>
      <path
        d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"
        fill="url(#sqlite-a)"
      />
      <path
        d="M175.388 71.116c-7.86-8.994-19.158-15.61-32.622-17.708-13.462-2.098-26.286.98-36.658 7.99-10.374 7.01-17.708 17.382-20.484 29.79-2.776 12.406-.654 25.608 5.678 36.658 6.332 11.05 16.378 19.158 28.134 23.176 11.756 4.02 24.632 3.366 35.682-1.632 11.05-4.998 19.81-13.786 24.632-24.632 4.822-10.844 5.152-23.394 1.632-34.702-3.52-11.308-11.134-21.028-20.484-28.134"
        fill="#FFF"
        fillOpacity=".3"
      />
      <text
        x="128"
        y="145"
        textAnchor="middle"
        fill="white"
        fontSize="58"
        fontWeight="bold"
        fontFamily="Arial"
      >
        S
      </text>
    </svg>
  );
}
