'use client';

import React from 'react';
import { Sparkles, Rocket, ArrowRight, Target, Cpu, Zap, ShieldCheck, Code2, Users } from 'lucide-react';
import NeonButton from '@/components/NeonButton';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      
      {/* Subtle Glow Behind Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-neon/5 blur-[120px] rounded-[100%] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-8 mt-10">
          <Sparkles className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-wider">AI-Powered Quality Assurance</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Custom Software <br />
          <span className="text-neon text-glow drop-shadow-[0_0_12px_rgba(0,255,136,0.6)]">Testing Tools</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered QA tools & custom solutions for your workflow. We build the testing tools you need, exactly how you need them.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20">
          <NeonButton href="/request" size="md" className="w-full sm:w-auto">
            <Rocket className="w-4 h-4" /> Request a Tool
          </NeonButton>
          
          <NeonButton href="/tools" variant="outline" size="md" className="w-full sm:w-auto rounded-full px-6 text-gray-300">
            View Tools <ArrowRight className="w-4 h-4 inline-block ml-1" />
          </NeonButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-24 text-center mt-10">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-neon mb-2 drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]">10+</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium">Tools Built</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-neon mb-2 drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]">24h</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium">Response Time</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-neon mb-2 drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]">100%</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium">Custom Built</div>
          </div>
        </div>
      </section>

      {/* Intro to Tools Text */}
      <section className="py-10 max-w-3xl mx-auto text-center px-4">
        <p className="text-gray-400 mb-12 max-w-xl mx-auto text-base">
          We specialize in building custom QA tools tailored to your unique testing needs.
        </p>
      </section>

      {/* Features Grid */}
      <section className="px-4 pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:bg-[#141414] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6">
              <Target className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Custom Solutions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every tool is built specifically for your workflow and testing requirements. No one-size-fits-all.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:bg-[#141414] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6">
              <Cpu className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">AI-Powered</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leverage artificial intelligence to enhance bug detection, test generation, and quality analysis.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:bg-[#141414] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6">
              <Zap className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Fast Delivery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get your custom tool delivered quickly. We focus on rapid development with iterative feedback.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:bg-[#141414] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Reliable & Secure</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built with security and reliability in mind. Your tools work securely when you need them most.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:bg-[#141414] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6">
              <Code2 className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Modern Tech Stack</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built with cutting-edge technologies like Next.js, React, and modern APIs for optimal performance.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:bg-[#141414] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6">
              <Users className="w-5 h-5 text-neon" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Dedicated Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Direct communication with our team. We work closely with you throughout the development process.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
