'use client';

import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({ children, className = '', hover = true }: GlowCardProps) {
  return (
    <div
      className={`
        bg-[#111111] border border-white/5 rounded-2xl p-6
        transition-all duration-300 ease-out
        ${hover ? 'hover:border-neon/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] hover:scale-[1.01]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
