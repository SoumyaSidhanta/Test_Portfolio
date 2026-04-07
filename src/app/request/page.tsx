'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserPlus, Send, Loader2 } from 'lucide-react';
import NeonButton from '@/components/NeonButton';

export default function RequestPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    requirement: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push('/thank-you');
      } else {
        const data = await res.json();
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white pt-32 pb-20 px-4 flex flex-col items-center relative">

      <div className="max-w-2xl w-full relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="neon-badge mb-6 animate-fade-in">
          <UserPlus className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-widest">Request a Custom Tool</span>
        </div>

        {/* Header */}
        <div className="text-center mb-10 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Tell Us What <span className="text-neon-gradient text-glow">You Need</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Fill out the form below and we will get back to you within 24 hours with a technical proposal.
          </p>
        </div>

        {/* Form Card */}
        <div className="neon-border-card p-6 md:p-8 w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Full Name</label>
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

              <div className="space-y-2">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Estimated Budget</label>
                <div className="relative">
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer pr-10"
                  >
                    <option value="" className="bg-[#0c0c12]">Select your budget</option>
                    <option value="₹2,000 – ₹5,000" className="bg-[#0c0c12]">₹2,000 – ₹5,000 (Starter)</option>
                    <option value="₹5,000 – ₹15,000" className="bg-[#0c0c12]">₹5,000 – ₹15,000 (Advanced)</option>
                    <option value="₹15,000+" className="bg-[#0c0c12]">₹15,000+ (Enterprise)</option>
                    <option value="Not sure" className="bg-[#0c0c12]">Not sure yet</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirement */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Project Details</label>
              <textarea
                name="requirement"
                required
                placeholder="Describe the tool you need, the problem it should solve..."
                value={form.requirement}
                onChange={handleChange}
                rows={5}
                className="input-field resize-y min-h-[120px]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <NeonButton type="submit" disabled={loading} className="w-full h-12">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Submit Request
                  </>
                )}
              </NeonButton>
            </div>
            
          </form>
        </div>
        
      </div>
    </div>
  );
}
