'use client';

import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Loader2, MapPin, Clock } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-4 flex flex-col items-center">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[400px] bg-neon/5 blur-[100px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 mb-6">
            <Mail className="w-4 h-4 text-neon" />
            <span className="text-neon text-xs font-semibold uppercase tracking-wider">Get in Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-neon" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-1">Email Us</h3>
                <a href="mailto:contact.ssmtechlabs@gmail.com" className="text-base text-white hover:text-neon transition-colors break-all">
                  contact.ssmtechlabs@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-neon" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-1">Response Time</h3>
                <p className="text-base text-white">
                  Within <span className="text-neon font-semibold">24 hours</span>
                </p>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-neon" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-1">Website</h3>
                <a href="https://ssmtechlabs.com" target="_blank" rel="noreferrer" className="text-base text-white hover:text-neon transition-colors">
                  ssmtechlabs.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#111111] border border-white/5 p-6 md:p-8 rounded-2xl h-full shadow-2xl flex flex-col justify-center">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-neon" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you! We'll get back to you within 24 hours.
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
                          <Loader2 className="w-5 h-5 animate-spin mr-2" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" /> Send Message
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
