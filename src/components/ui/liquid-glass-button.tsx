import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'sm' | 'lg' | 'xl';
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden group bg-white/5 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(41,179,223,0.3)]",
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'default',
            'px-8 py-4 text-lg': size === 'lg',
            'px-10 py-5 text-xl font-bold': size === 'xl',
          },
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#01EBCD]/20 via-[#29B3DF]/20 to-[#7C48E8]/20 transition-all duration-500 ease-out group-hover:w-full" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
LiquidButton.displayName = "LiquidButton";
