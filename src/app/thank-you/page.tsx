'use client';

import React from 'react';
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import NeonButton from '@/components/NeonButton';
import type { Metadata } from 'next';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-neon/5 blur-[100px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mb-8 mx-auto">
          <CheckCircle2 className="w-8 h-8 text-neon" />
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
          Request <span className="text-neon">Submitted</span>
        </h1>
        <p className="text-gray-400 mb-2">
          Your project details have been logged in our system.
        </p>
        <p className="text-gray-400 mb-10 leading-relaxed">
          Our engineering team will review your requirements and reach out within{' '}
          <span className="text-neon font-semibold text-glow">24 hours</span>.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonButton href="/feedback" variant="outline" className="w-full sm:w-auto">
            <MessageSquare className="w-4 h-4 mr-2" /> Share Feedback
          </NeonButton>
          <NeonButton href="/" className="w-full sm:w-auto">
            Return to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
          </NeonButton>
        </div>
      </div>
    </div>
  );
}
