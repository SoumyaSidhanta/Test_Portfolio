'use client';

import React, { useRef } from 'react';
import { Sparkles, Rocket, ArrowRight, Target, Cpu, Zap, ShieldCheck, Code2, Users } from 'lucide-react';
import NeonButton from '@/components/NeonButton';
import GlowCard from '@/components/GlowCard';

const features = [
  {
    icon: Target,
    title: 'Custom Solutions',
    desc: 'Every tool is built specifically for your workflow and testing requirements. No one-size-fits-all.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    desc: 'Leverage artificial intelligence to enhance bug detection, test generation, and quality analysis.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Get your custom tool delivered quickly. We focus on rapid development with iterative feedback.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Secure',
    desc: 'Built with security and reliability in mind. Your tools work securely when you need them most.',
  },
  {
    icon: Code2,
    title: 'Modern Tech Stack',
    desc: 'Built with cutting-edge technologies like Next.js, React, and modern APIs for optimal performance.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    desc: 'Direct communication with our team. We work closely with you throughout the development process.',
  },
];

const stats = [
  { value: '10+', label: 'Tools Built' },
  { value: '24h', label: 'Response Time' },
  { value: '100%', label: 'Custom Built' },
];

export default function HomePage() {
  const featuresRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen text-white">

      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 pb-20 px-4 flex flex-col items-center text-center max-w-5xl mx-auto">

        {/* Badge */}
        <div className="neon-badge mb-8 mt-10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-widest">AI-Powered Quality Assurance</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05] animate-slide-up">
          <span className="block">Custom Software</span>
          <span className="text-neon-gradient text-glow-strong inline-block mt-1">
            Testing Tools
          </span>
        </h1>

        {/* Decorative neon line under title */}
        <div className="neon-line w-32 mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }} />

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          AI-powered QA tools & custom solutions for your workflow.{' '}
          <span className="text-gray-300">We build the testing tools you need, exactly how you need them.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-24 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <NeonButton href="/request" size="lg" className="w-full sm:w-auto">
            <Rocket className="w-5 h-5" /> Request a Tool
          </NeonButton>

          <NeonButton href="/tools" variant="outline" size="lg" className="w-full sm:w-auto">
            View Tools <ArrowRight className="w-4 h-4 ml-1" />
          </NeonButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-24 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="text-3xl md:text-5xl font-black stat-number mb-2 transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="neon-line max-w-xl mx-auto my-4" />

      {/* ═══ INTRO TEXT ═══ */}
      <section className="py-16 max-w-3xl mx-auto text-center px-4">
        <p className="text-gray-400 mb-4 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          We specialize in building{' '}
          <span className="text-neon font-semibold">custom QA tools</span>{' '}
          tailored to your unique testing needs.
        </p>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section ref={featuresRef} className="px-4 pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <GlowCard key={i} className="p-8 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` } as React.CSSProperties}>
                <div className="neon-icon-box mb-6">
                  <Icon className="w-5 h-5 text-neon" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </GlowCard>
            );
          })}
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="px-4 pb-32 max-w-4xl mx-auto">
        <div className="neon-border-card p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to <span className="text-neon-gradient text-glow">level up</span> your testing?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Tell us what you need and we&apos;ll build it. Custom tools, fast delivery, zero compromises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NeonButton href="/request" size="lg">
              <Rocket className="w-5 h-5" /> Get Started
            </NeonButton>
            <NeonButton href="/pricing" variant="outline" size="lg">
              View Pricing
            </NeonButton>
          </div>
        </div>
      </section>

    </div>
  );
}
