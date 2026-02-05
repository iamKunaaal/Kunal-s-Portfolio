import React from 'react';

export default function Webflow({ className }: { className?: string }) {
  return (
    <img
      src="https://cdn.simpleicons.org/webflow/4353FF"
      alt="Webflow"
      className={className || 'h-full w-full object-contain'}
    />
  );
}
