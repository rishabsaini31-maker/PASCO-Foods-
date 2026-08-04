'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import type { NavLink } from '@/types';

interface NavigationProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  mobileNavRef?: React.Ref<HTMLDivElement>;
}

interface DesktopNavProps {
  links: NavLink[];
}

export function DesktopNav({ links }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Primary menu">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-[#1A1A1A] hover:text-[#214E34] transition-colors font-medium tracking-wide"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNav({ mobileOpen, setMobileOpen }: NavigationProps) {
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  if (!mobileOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 pt-[calc(40px+64px)] bg-white z-40 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="container-pasco py-6">
        <ul className="space-y-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3.5 text-[#1A1A1A] text-base font-medium border-b border-[#F5F5F5] hover:text-[#214E34] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-3">
          <Link
            href="/login"
            className="block w-full text-center border-2 border-[#214E34] text-[#214E34] font-semibold py-3 rounded-lg transition-colors text-sm hover:bg-[#214E34] hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="block w-full text-center bg-[#214E34] hover:bg-[#1a3f2a] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Create Account
          </Link>
        </div>
        <div className="mt-6 space-y-3 text-sm text-[#6B6B6B]">
          <p className="flex items-center gap-2">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
            01942 493220
          </p>
          <p className="flex items-center gap-2">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
            sales@pascofoods.com
          </p>
        </div>
      </nav>
    </div>
  );
}
