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
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-4 flex flex-col items-center">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[400px] bg-neon/5 blur-[100px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-5xl w-full relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
          <Code className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-wider">Our Portfolio</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tools & Solutions
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our existing tools and request similar solutions for your team.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="w-full flex flex-col gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start w-full">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded uppercase tracking-wider ${
                    tool.status === 'Live Demo' ? 'bg-neon/10 text-neon border border-neon/30' : 'bg-gray-800 text-gray-400 border border-gray-700'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {tool.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-[#1a1a1a] border border-[#222] rounded-full text-xs text-gray-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  {tool.demoUrl !== '#' && (
                    <NeonButton href={tool.demoUrl} size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" /> View Live Demo
                    </NeonButton>
                  )}
                  <NeonButton href="/request" variant="outline" size="sm">
                    Request Similar <ArrowRight className="w-4 h-4 ml-2" />
                  </NeonButton>
                </div>
              </div>

              {/* Decorative Right Side (Mock UI / Graphic placeholder) */}
              <div className="hidden md:flex w-[350px] shrink-0 h-[250px] bg-[#0a0a0a] border border-[#222] rounded-xl flex-col shadow-inner overflow-hidden p-4 relative">
                 <div className="flex gap-1 mb-4">
                   <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                   <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                   <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                 </div>
                 <div className="flex-1 border border-white/5 rounded bg-[#111] p-3 flex flex-col gap-2">
                   <div className="w-full h-4 bg-white/5 rounded"></div>
                   <div className="w-3/4 h-4 bg-white/5 rounded"></div>
                   <div className="w-1/2 h-4 bg-white/5 rounded"></div>
                   {tool.status === 'Live Demo' && (
                     <div className="mt-auto self-end w-1/3 h-6 bg-neon/20 rounded"></div>
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
