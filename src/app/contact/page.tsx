'use client';

import { useState } from 'react';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageLayout breadcrumbs={[{ label: 'Contact' }]}>      {/* Hero */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco text-center">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">Get in Touch</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1A1A1A]">Contact Us</h1>
            <p className="mt-4 text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
              We would love to hear from you. Whether you have a question about our products, want to discuss a foodservice partnership, or simply want to share your feedback, our team is here to help.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-pasco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <FadeUp>
                <h2 className="text-xl font-semibold text-[#1A1A1A]">Contact Details</h2>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#214E34] shrink-0">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Address</p>
                      <p className="mt-1 text-sm text-[#6B6B6B] leading-relaxed">Pasco House, Makerfield Way,<br />Ince, Wigan, WN2 2PR</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#214E34] shrink-0">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Phone</p>
                      <p className="mt-1 text-sm text-[#6B6B6B]">01942 493220</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#214E34] shrink-0">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Email</p>
                      <p className="mt-1 text-sm text-[#6B6B6B]">sales@pascofoods.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#214E34] shrink-0">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Factory Collection</p>
                      <p className="mt-1 text-sm text-[#6B6B6B]">Mon–Fri, 9am–4pm</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeUp delay={100}>
                {submitted ? (
                  <div className="bg-[#F8F5EF] rounded-xl p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#214E34] flex items-center justify-center mx-auto">
                      <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">Message Sent</h3>
                    <p className="mt-2 text-sm text-[#6B6B6B]">Thank you for contacting us. We will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-[#214E34] hover:text-[#9C3A28] transition-colors">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Full Name *</label>
                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="John Smith" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Email Address *</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Phone Number</label>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="01onal 234 5678" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Subject *</label>
                        <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34] bg-white">
                          <option value="">Select a subject</option>
                          <option value="general">General Enquiry</option>
                          <option value="order">Order Enquiry</option>
                          <option value="foodservice">Foodservice / Wholesale</option>
                          <option value="feedback">Product Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Message *</label>
                      <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34] resize-none" placeholder="How can we help?" />
                    </div>
                    <button type="submit" disabled={sending} className="h-12 px-8 bg-[#214E34] hover:bg-[#1a3f2a] disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors">
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}