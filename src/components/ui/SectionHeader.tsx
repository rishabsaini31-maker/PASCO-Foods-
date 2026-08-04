import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: '',
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B] mb-3">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-semibold text-[#1A1A1A] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-[#6B6B6B] leading-relaxed ${
            align === 'center' ? 'max-w-xl mx-auto' : 'max-w-lg'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
