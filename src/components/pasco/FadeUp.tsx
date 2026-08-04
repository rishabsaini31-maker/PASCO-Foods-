'use client';

import { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function FadeUp({ children, className = '' }: FadeUpProps) {
  return <div className={className}>{children}</div>;
}
