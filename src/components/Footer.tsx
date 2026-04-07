import React from 'react';
import Link from 'next/link';
import { Bug } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/tools', label: 'Tools' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,255,136,0.06)] bg-[#050508]/80 backdrop-blur-xl overflow-hidden">
      {/* Neon glow behind footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[250px] bg-neon/[0.03] blur-[120px] pointer-events-none rounded-t-full" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.15)] flex items-center justify-center transition-all duration-300 group-hover:border-[rgba(0,255,136,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                  <Bug className="w-6 h-6 text-neon" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SSM <span className="text-neon-gradient">Test Labs</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mt-2 font-light">
              Custom software testing tools built for your specific workflow. From simple utilities to complex AI-powered platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-2">
              Platform
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-neon transition-all duration-300 text-sm flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-neon group-hover:shadow-[0_0_8px_rgba(0,255,136,0.4)] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-2">
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:contact.ssmtechlabs@gmail.com"
                className="text-gray-500 hover:text-neon transition-all duration-300 text-sm"
              >
                contact.ssmtechlabs@gmail.com
              </a>
              <Link
                href="https://ssmtechlabs.com"
                target="_blank"
                className="text-gray-500 hover:text-neon transition-all duration-300 text-sm"
              >
                ssmtechlabs.com
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.04)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 SSM Test Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-sm text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
