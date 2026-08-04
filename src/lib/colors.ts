export const COLORS = {
  primary: '#214E34',
  primaryHover: '#1a3f2a',
  secondary: '#1A1A1A',
  accent: '#B88A3B',
  accentHover: '#a07a30',
  gold: '#B88A3B',
  red: '#9C3A28',
  cream: '#F8F5EF',
  dark: '#1A1A1A',
  gray: '#6B6B6B',
  grayLight: '#9C9690',
  border: '#E5E2DB',
  borderLight: '#F5F5F5',
  white: '#FFFFFF',
} as const;

export type ColorKey = keyof typeof COLORS;
export type ColorValue = typeof COLORS[ColorKey];
