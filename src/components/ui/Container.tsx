import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
}

export default function Container({ children, className = '', as = 'div' }: ContainerProps) {
  const Tag = as;
  return (
    <Tag className={`container-pasco ${className}`.trim()}>
      {children}
    </Tag>
  );
}
