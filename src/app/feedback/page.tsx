'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react';
import NeonButton from '@/components/NeonButton';
import StarRating from '@/components/StarRating';

export default function FeedbackPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.rating === 0) {
      alert('Please select a rating.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to submit feedback. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-md neon-border-card p-12 animate-slide-up">
          <div className="w-16 h-16 rounded-full bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center mb-6 mx-auto shadow-[0_0_30px_rgba(0,255,136,0.1)]">
            <CheckCircle2 className="w-8 h-8 text-neon" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-white">Feedback Logged!</h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Thank you for helping us improve. Your insights are invaluable.
          </p>
          <NeonButton href="/" className="w-full">Return Home</NeonButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white pt-32 pb-20 px-4 flex flex-col items-center relative">

      <div className="max-w-2xl w-full relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="neon-badge mb-6 animate-fade-in">
          <MessageSquare className="w-4 h-4 text-neon" />
          <span className="text-neon text-xs font-semibold uppercase tracking-widest">System Feedback</span>
        </div>

        {/* Header */}
        <div className="text-center mb-10 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Share Your <span className="text-neon-gradient text-glow">Experience</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Your telemetry helps us build better tools. Rate your experience and analyze our performance.
          </p>
        </div>

        {/* Form */}
        <div className="neon-border-card p-6 md:p-8 w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
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

            {/* Rating */}
            <div className="space-y-2 py-5 border-y border-[rgba(0,255,136,0.06)] my-4 flex flex-col items-center">
              <label className="text-sm font-medium text-gray-400 mb-3">
                Overall Experience Rating
              </label>
              <div className="flex justify-center">
                <StarRating
                  rating={form.rating}
                  onRatingChange={(rating) => setForm({ ...form, rating })}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Your Feedback</label>
              <textarea
                name="message"
                required
                placeholder="Log your experience, feature requests, or bug reports here..."
                value={form.message}
                onChange={handleChange}
                className="input-field resize-y min-h-[120px]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <NeonButton type="submit" disabled={loading} className="w-full h-12">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Saving Feedback...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Submit Feedback
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
