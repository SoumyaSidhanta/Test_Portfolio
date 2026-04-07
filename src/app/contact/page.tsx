'use client';

import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, Loader2 } from 'lucide-react';
import NeonButton from '@/components/NeonButton';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const infoCards = [
    {
      icon: Mail,
      title: 'Email Us',
      content: (
        <a href="mailto:contact.ssmtechlabs@gmail.com" className="text-base text-white hover:text-neon transition-all duration-300 break-all">
          contact.ssmtechlabs@gmail.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: (
        <p className="text-base text-white">
          Within <span className="text-neon font-semibold text-glow">24 hours</span>
        </p>
      ),
    },
    {
      icon: MapPin,
      title: 'Website',
      content: (
        <a href="https://ssmtechlabs.com" target="_blank" rel="noreferrer" className="text-base text-white hover:text-neon transition-all duration-300">
          ssmtechlabs.com
        </a>
      ),
    },
  ];

  return (
    <div className="min-h-screen text-white pt-32 pb-20 px-4 flex flex-col items-center relative">

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center animate-slide-up">
          <div className="neon-badge mb-6">
            <Mail className="w-4 h-4 text-neon" />
            <span className="text-neon text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Contact <span className="text-neon-gradient text-glow">Us</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or want to discuss a project? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="glass-card p-6 flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="neon-icon-box shrink-0">
                    <Icon className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 mb-1">{card.title}</h3>
                    {card.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="neon-border-card p-6 md:p-8 h-full flex flex-col justify-center">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,136,0.1)]">
                    <Mail className="w-8 h-8 text-neon" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                  <div className="space-y-2 flex-grow-0">
                    <label className="text-sm font-medium text-gray-400">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2 flex-grow-0">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={handleChange}
                      className="input-field flex-1 resize-none min-h-[150px]"
                    />
                  </div>

                  <div className="pt-2 mt-auto">
                    <NeonButton type="submit" disabled={loading} className="w-full h-12">
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </NeonButton>
                  </div>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
