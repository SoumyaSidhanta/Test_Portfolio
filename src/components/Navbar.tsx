'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bug, Menu, X } from 'lucide-react';
import NeonButton from '@/components/NeonButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tools', label: 'Tools' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/feedback', label: 'Feedback' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Bug className="w-7 h-7 text-neon transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-white tracking-tight">
              SSM <span className="text-gray-400">Test Labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 px-4 py-1.5 rounded-full ${
                    isActive
                      ? 'bg-neon/10 text-neon'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          
          {/* Desktop Right */}
          <div className="hidden md:flex items-center">
            <NeonButton href="/request" size="sm" className="px-5 py-2">
              Request a Tool
            </NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="md:hidden fixed top-20 left-0 right-0 bg-[#0a0a0a] border-b border-white/5 px-6 py-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium p-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-neon/10 text-neon'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 border-t border-white/5">
              <NeonButton href="/request" className="w-full text-center py-4 text-base">
                Request a Tool
              </NeonButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
