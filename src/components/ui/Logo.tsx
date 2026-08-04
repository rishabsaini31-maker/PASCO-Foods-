import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  linkHref?: string;
}

export default function Logo({ variant = 'default', size = 'md', linkHref = '/' }: LogoProps) {
  const sizeClasses = {
    sm: { circle: 'w-8 h-8', text: 'text-sm', label: 'text-[9px]' },
    md: { circle: 'w-9 h-9', text: 'text-lg', label: 'text-[10px]' },
    lg: { circle: 'w-12 h-12', text: 'text-xl', label: 'text-xs' },
  };

  const colorClasses = {
    default: {
      circle: 'bg-[#214E34]',
      text: 'text-[#1A1A1A]',
      label: 'text-[#6B6B6B]',
    },
    footer: {
      circle: 'bg-[#214E34]',
      text: 'text-white',
      label: 'text-[#6B6B6B]',
    },
  };

  const s = sizeClasses[size];
  const c = colorClasses[variant];

  return (
    <Link href={linkHref} className="flex items-center gap-2 shrink-0" aria-label="Pasco Foods Home">
      <div className={`${s.circle} ${c.circle} rounded-full flex items-center justify-center`}>
        <span
          className={`text-white font-bold ${s.text}`}
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          P
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${c.text} ${s.text} font-semibold tracking-tight`} style={{ fontFamily: 'var(--font-playfair)' }}>
          Pasco
        </span>
        <span className={`${c.label} tracking-[0.15em] uppercase`}>
          Foods
        </span>
      </div>
    </Link>
  );
}
