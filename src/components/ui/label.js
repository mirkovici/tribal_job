import React from 'react';

export const Label = React.forwardRef(({ 
  className = '', 
  htmlFor,
  children,
  ...props 
}, ref) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`cursor-pointer select-none ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </label>
  );
});

Label.displayName = 'Label';
