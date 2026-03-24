'use client';

import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  href?: string;
}

export default function NeonButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  href,
}: NeonButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-colors duration-200 ease-out
    cursor-pointer
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
  `;

  const variantClasses = {
    primary: `
      bg-neon text-black
      shadow-[0_0_15px_rgba(0,255,136,0.3)]
    `,
    outline: `
      bg-transparent text-gray-300 border border-dark-border
      hover:text-white hover:border-gray-500
    `,
    ghost: `
      bg-transparent text-gray-400 hover:text-white
    `
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
