import React from 'react';
import { Check, DollarSign } from 'lucide-react';
import NeonButton from '@/components/NeonButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing – SSM Test Labs',
  description: 'Affordable custom QA tool development. Starter, Advanced, and Enterprise pricing plans.',
};

const plans = [
  {
    name: 'Starter Tier',
    price: '₹2,000 - 5,000',
    description: 'Simple scripts, browser extensions, or small automation tools for individual workflows.',
    features: [
      'Single-purpose tool',
      'Basic automation scripts',
      'Source code delivery',
      'Standard support',
    ],
    popular: false,
  },
  {
    name: 'Advanced Tier',
    price: '₹5,000 - 15,000',
    description: 'Full-featured tools with UI, integrations, and advanced logic for team efficiency.',
    features: [
      'Multi-feature tool',
      'Custom Dashboard / UI',
      'API integrations',
      'Priority email support',
      'Documentation included',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Tier',
    price: 'Custom Quote',
    description: 'Complex systems, SaaS tools, and large-scale automated testing platforms.',
    features: [
      'Full-stack application',
      'Database & Auth system',
      'Deployment assistance',
      'Dedicated support channel',
      'Maintenance plan available',
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-4 flex flex-col items-center">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[400px] bg-neon/5 blur-[100px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
          <DollarSign className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-wider">Service-Based Pricing</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Transparent Pricing
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the right tier based on your tool complexity. Final pricing shared after requirement discussion.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                bg-[#111111] rounded-2xl p-8 flex flex-col relative
                ${plan.popular ? 'border-2 border-neon/30' : 'border border-white/5'}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neon/10 border border-neon/30 text-neon text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className={`text-3xl font-extrabold mb-4 ${plan.popular ? 'text-neon drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]' : 'text-white'}`}>
                {plan.price}
              </p>
              <p className="text-sm text-gray-400 mb-8 flex-1 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-neon shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <NeonButton
                href="/request"
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full text-center py-3"
              >
                Request Tool
              </NeonButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
