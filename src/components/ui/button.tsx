import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#214E34] hover:bg-[#1a3f2a] text-white tracking-wide',
  secondary:
    'bg-[#B88A3B] hover:bg-[#a07a30] text-white tracking-wide',
  outline:
    'border-2 border-[#1A1A1A] hover:border-[#214E34] hover:text-[#214E34] text-[#1A1A1A] tracking-wide',
  ghost:
    'text-[#214E34] hover:bg-[#F8F5EF]',
  danger:
    'bg-[#9C3A28] hover:bg-[#7a2e1f] text-white',
};

const sizeClasses = {
  sm: 'h-10 px-5 text-xs',
  md: 'h-12 px-8 text-sm',
  lg: 'h-14 px-10 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild = false,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as object)}>
        {children}
      </Link>
    );
  }

  if (asChild) {
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
