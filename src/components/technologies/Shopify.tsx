import React from 'react';

export default function Shopify({ className }: { className?: string }) {
  return (
    <img
      src="https://cdn.simpleicons.org/shopify/7AB55C"
      alt="Shopify"
      className={className || 'h-full w-full object-contain'}
    />
  );
}
