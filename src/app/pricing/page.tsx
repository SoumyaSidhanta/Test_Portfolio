import React from 'react';
import { Check, DollarSign, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen text-white pt-32 pb-20 px-4 flex flex-col items-center relative">

      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="neon-badge mb-6 animate-fade-in">
          <DollarSign className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-widest">Service-Based Pricing</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Transparent <span className="text-neon-gradient text-glow">Pricing</span>
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
                glass-card p-8 flex flex-col relative animate-fade-in
                ${plan.popular ? 'plan-popular' : ''}
              `}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.25)] text-neon text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className={`text-3xl font-extrabold mb-4 ${
                plan.popular 
                  ? 'text-neon-gradient text-glow' 
                  : 'text-white'
              }`}>
                {plan.price}
              </p>
              <p className="text-sm text-gray-400 mb-8 flex-1 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-neon" />
                    </div>
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
