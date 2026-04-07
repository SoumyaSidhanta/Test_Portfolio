'use client';

import React, { useRef } from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
  style?: React.CSSProperties;
}

export default function GlowCard({ children, className = '', hover = true, glowColor = '0,255,136', style }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hover) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glass-card p-6 ${className}`}
      style={{
        '--glow-color': glowColor,
        ...style,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
