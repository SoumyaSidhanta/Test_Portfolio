'use client';

import React, { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-[rgba(0,255,136,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Bug className="w-7 h-7 text-neon transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,255,136,0.6)]" />
              <div className="absolute inset-0 bg-neon/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              SSM <span className="text-neon-gradient">Test Labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full relative ${
                    isActive
                      ? 'text-neon bg-[rgba(0,255,136,0.08)] shadow-[inset_0_0_12px_rgba(0,255,136,0.06)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-neon rounded-full shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <NeonButton href="/request" size="sm">
              Request a Tool
            </NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-gray-400 hover:text-neon transition-colors rounded-xl hover:bg-white/5"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`md:hidden fixed top-20 left-0 right-0 transition-all duration-400 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-[#050508]/95 backdrop-blur-2xl border-b border-[rgba(0,255,136,0.08)] px-6 py-8 flex flex-col gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-[rgba(0,255,136,0.08)] text-neon border-l-2 border-neon'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
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
        </div>
      </div>
    </nav>
  );
}
