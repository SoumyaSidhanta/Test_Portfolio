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
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-3.5 text-base',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300 ease-out
    cursor-pointer relative overflow-hidden
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const variantStyles: Record<string, string> = {
    primary: `
      bg-gradient-to-r from-[#00ff88] to-[#00e67a] text-black
      shadow-[0_0_20px_rgba(0,255,136,0.3),0_0_60px_rgba(0,255,136,0.1)]
      hover:shadow-[0_0_30px_rgba(0,255,136,0.5),0_0_80px_rgba(0,255,136,0.2)]
      hover:scale-[1.03] active:scale-[0.97]
    `,
    outline: `
      bg-transparent text-gray-300
      border border-[rgba(0,255,136,0.15)]
      hover:text-neon hover:border-[rgba(0,255,136,0.4)]
      hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]
      hover:bg-[rgba(0,255,136,0.04)]
      active:scale-[0.97]
    `,
    ghost: `
      bg-transparent text-gray-400 
      hover:text-neon hover:bg-[rgba(0,255,136,0.05)]
    `
  };

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${className}`;

  const shimmer = variant === 'primary' ? (
    <span
      className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
      aria-hidden="true"
    >
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </span>
  ) : null;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {shimmer}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
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
      {shimmer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
