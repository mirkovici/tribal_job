"use client";

import React from 'react';

export const Checkbox = React.forwardRef(({ 
  className = '', 
  checked, 
  onCheckedChange,
  id,
  ...props 
}, ref) => {
  return (
    <input
      type="checkbox"
      id={id}
      className={`w-[18px] h-[18px] rounded border cursor-pointer accent-[#FE0032] ${className}`}
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      ref={ref}
      {...props}
    />
  );
});

Checkbox.displayName = 'Checkbox';
