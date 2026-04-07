'use client';

import React from 'react';
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import NeonButton from '@/components/NeonButton';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">

      <div className="max-w-lg w-full text-center relative z-10 animate-slide-up">
        {/* Success Icon */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 bg-neon/10 rounded-full blur-xl animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center shadow-[0_0_40px_rgba(0,255,136,0.15)]">
            <CheckCircle2 className="w-10 h-10 text-neon" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
          Request <span className="text-neon-gradient text-glow">Submitted</span>
        </h1>
        <p className="text-gray-400 mb-2">
          Your project details have been logged in our system.
        </p>
        <p className="text-gray-400 mb-10 leading-relaxed">
          Our engineering team will review your requirements and reach out within{' '}
          <span className="text-neon font-semibold text-glow">24 hours</span>.
        </p>

        {/* Neon separator */}
        <div className="neon-line w-24 mx-auto mb-10" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonButton href="/feedback" variant="outline" className="w-full sm:w-auto">
            <MessageSquare className="w-4 h-4" /> Share Feedback
          </NeonButton>
          <NeonButton href="/" className="w-full sm:w-auto">
            Return to Dashboard <ArrowRight className="w-4 h-4" />
          </NeonButton>
        </div>
      </div>
    </div>
  );
}
