'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FadeUp from '@/components/pasco/FadeUp';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="border-b border-[#E5E2DB]">
        <div className="container-pasco h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2" aria-label="Pasco Foods Home">
            <div className="w-9 h-9 bg-[#214E34] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-playfair)' }}>P</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#1A1A1A] text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Pasco</span>
              <span className="text-[10px] text-[#6B6B6B] tracking-[0.15em] uppercase">Foods</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center py-16">
        <div className="w-full max-w-md px-6">
          <FadeUp>
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">Create Account</h1>
              <p className="mt-2 text-sm text-[#6B6B6B]">Join Pasco Foods for exclusive offers and order tracking</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg" role="alert">{error}</div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">First Name *</label>
                  <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Email Address *</label>
                <input id="signup-email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Password *</label>
                <div className="relative">
                  <input id="signup-password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleChange} className="w-full h-11 px-4 pr-11 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="Min 8 characters" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#1A1A1A]" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                    ) : (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Confirm Password *</label>
                <input id="confirmPassword" name="confirmPassword" type="password" required value={formData.confirmPassword} onChange={handleChange} className="w-full h-11 px-4 text-sm border border-[#E5E2DB] rounded-lg focus:outline-none focus:border-[#214E34] focus:ring-1 focus:ring-[#214E34]" placeholder="Re-enter password" />
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 mt-0.5 rounded border-[#E5E2DB] text-[#214E34] focus:ring-[#214E34]" />
                <span className="text-sm text-[#6B6B6B] leading-relaxed">I agree to the <Link href="/terms" className="text-[#214E34] hover:text-[#9C3A28] font-medium">Terms &amp; Conditions</Link> and <Link href="/privacy" className="text-[#214E34] hover:text-[#9C3A28] font-medium">Privacy Policy</Link></span>
              </label>

              <button type="submit" disabled={loading} className="w-full h-12 bg-[#214E34] hover:bg-[#1a3f2a] disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors">
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#6B6B6B]">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-[#214E34] hover:text-[#9C3A28] transition-colors">Sign In</Link>
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}