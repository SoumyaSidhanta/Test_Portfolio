import React from 'react';
import { Code, ExternalLink, ArrowRight } from 'lucide-react';
import NeonButton from '@/components/NeonButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools & Portfolio – SSM Test Labs',
  description: 'Explore custom QA tools built by SSM Test Labs. See demos and request similar tools.',
};

const tools = [
  {
    name: 'Bug Report Enhancer',
    description:
      'An AI-powered tool that automatically enhances bug reports with structured details, reproduction steps, and categorization. Makes bug reports more actionable and reduces back-and-forth between developers and QA teams.',
    features: [
      'AI-enhanced descriptions',
      'Auto-categorization',
      'Structured reproduction steps',
      'Priority suggestion',
    ],
    demoUrl: 'https://bug-report-enhancer-six.vercel.app',
    status: 'Live Demo',
  },
  {
    name: 'Test Setup Optimizer',
    description: 'A tool that automatically cleans up testing environments between CI/CD pipeline runs to reduce flaky tests caused by state pollution.',
    features: [
      'Pre-flight state checks',
      'Automated teardown',
      'Database snapshot restore',
    ],
    demoUrl: '#',
    status: 'In Development',
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen text-white pt-32 pb-20 px-4 flex flex-col items-center relative">

      <div className="max-w-5xl w-full relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="neon-badge mb-6 animate-fade-in">
          <Code className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-widest">Our Portfolio</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Tools & <span className="text-neon-gradient text-glow">Solutions</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our existing tools and request similar solutions for your team.
          </p>
        </div>

        {/* Tools */}
        <div className="w-full flex flex-col gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="glass-card p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start w-full animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                    tool.status === 'Live Demo' 
                      ? 'bg-[rgba(0,255,136,0.08)] text-neon border border-[rgba(0,255,136,0.2)] shadow-[0_0_12px_rgba(0,255,136,0.08)]' 
                      : 'bg-gray-900 text-gray-400 border border-gray-800'
                  }`}>
                    {tool.status === 'Live Demo' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon mr-1.5 animate-pulse" />}
                    {tool.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {tool.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((f, j) => (
                      <span key={j} className="px-3 py-1.5 bg-[rgba(0,255,136,0.04)] border border-[rgba(0,255,136,0.08)] rounded-full text-xs text-gray-300 hover:border-[rgba(0,255,136,0.2)] hover:text-neon transition-all duration-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  {tool.demoUrl !== '#' && (
                    <NeonButton href={tool.demoUrl} size="sm">
                      <ExternalLink className="w-4 h-4" /> View Live Demo
                    </NeonButton>
                  )}
                  <NeonButton href="/request" variant="outline" size="sm">
                    Request Similar <ArrowRight className="w-4 h-4" />
                  </NeonButton>
                </div>
              </div>

              {/* Decorative UI mockup */}
              <div className="hidden md:flex w-[350px] shrink-0 h-[250px] rounded-xl flex-col overflow-hidden p-4 relative neon-border-card">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <div className="flex-1 border border-[rgba(0,255,136,0.06)] rounded-lg bg-[#050508] p-4 flex flex-col gap-3">
                  <div className="w-full h-4 bg-[rgba(0,255,136,0.04)] rounded-full" />
                  <div className="w-3/4 h-4 bg-[rgba(0,255,136,0.03)] rounded-full" />
                  <div className="w-1/2 h-4 bg-[rgba(0,255,136,0.02)] rounded-full" />
                  {tool.status === 'Live Demo' && (
                    <div className="mt-auto self-end w-1/3 h-7 bg-gradient-to-r from-[rgba(0,255,136,0.1)] to-[rgba(0,240,255,0.05)] rounded-lg border border-[rgba(0,255,136,0.1)]" />
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
