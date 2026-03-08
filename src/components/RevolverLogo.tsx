import React from 'react';

export default function RevolverLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Cylinder Body */}
      <path d="M50 5C25.1 5 5 25.1 5 50C5 74.9 25.1 95 50 95C74.9 95 95 74.9 95 50C95 25.1 74.9 5 50 5ZM50 85C30.7 85 15 69.3 15 50C15 30.7 30.7 15 50 15C69.3 15 85 30.7 85 50C85 69.3 69.3 85 50 85Z" />
      
      {/* Central Hole */}
      <circle cx="50" cy="50" r="6" />
      
      {/* 6 Chambers */}
      <circle cx="50" cy="28" r="10" />
      <circle cx="50" cy="72" r="10" />
      <circle cx="69" cy="39" r="10" />
      <circle cx="31" cy="39" r="10" />
      <circle cx="69" cy="61" r="10" />
      <circle cx="31" cy="61" r="10" />
      
      {/* Outer notches for the cylinder look */}
      <circle cx="50" cy="5" r="8" fill="transparent" stroke="none" />
      <path d="M50 0C45 0 42 5 42 10C42 15 45 20 50 20C55 20 58 15 58 10C58 5 55 0 50 0Z" fill="black" transform="rotate(0 50 50)" />
      <path d="M50 0C45 0 42 5 42 10C42 15 45 20 50 20C55 20 58 15 58 10C58 5 55 0 50 0Z" fill="black" transform="rotate(60 50 50)" />
      <path d="M50 0C45 0 42 5 42 10C42 15 45 20 50 20C55 20 58 15 58 10C58 5 55 0 50 0Z" fill="black" transform="rotate(120 50 50)" />
      <path d="M50 0C45 0 42 5 42 10C42 15 45 20 50 20C55 20 58 15 58 10C58 5 55 0 50 0Z" fill="black" transform="rotate(180 50 50)" />
      <path d="M50 0C45 0 42 5 42 10C42 15 45 20 50 20C55 20 58 15 58 10C58 5 55 0 50 0Z" fill="black" transform="rotate(240 50 50)" />
      <path d="M50 0C45 0 42 5 42 10C42 15 45 20 50 20C55 20 58 15 58 10C58 5 55 0 50 0Z" fill="black" transform="rotate(300 50 50)" />
    </svg>
  );
}
