'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: number;
}

export default function StarRating({
  rating,
  onRatingChange,
  readonly = false,
  size = 24,
}: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoveredStar || rating);
        return (
          <button
            key={star}
            type="button"
            onClick={() => !readonly && onRatingChange?.(star)}
            onMouseEnter={() => !readonly && setHoveredStar(star)}
            onMouseLeave={() => !readonly && setHoveredStar(0)}
            className={`
              transition-all duration-200
              ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110 active:scale-95'}
              ${isFilled ? 'text-neon drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]' : 'text-gray-800'}
            `}
            disabled={readonly}
          >
            <Star
              size={size}
              fill={isFilled ? 'currentColor' : 'none'}
              strokeWidth={1.5}
            />
          </button>
        );
      })}
    </div>
  );
}
