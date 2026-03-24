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
    <footer className="border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-neon/5 blur-[100px] pointer-events-none rounded-t-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Bug className="w-6 h-6 text-neon" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SSM <span className="text-neon">Test Labs</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-2 font-light">
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
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon/0 group-hover:bg-neon transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-2">
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:contact.ssmtechlabs@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                contact.ssmtechlabs@gmail.com
              </a>
              <Link
                href="https://ssmtechlabs.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                ssmtechlabs.com
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 SSM Test Labs. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-gray-500">Privacy Policy</span>
            <span className="text-sm text-gray-500">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
