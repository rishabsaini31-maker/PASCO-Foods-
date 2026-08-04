'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { CartItem } from '@/types';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: {
    id: number | string;
    name: string;
    category?: string;
    price: string;
    image: string;
    weight?: string;
  }) => void;
  removeFromCart: (productId: number | string) => void;
  updateQuantity: (productId: number | string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('pasco-cart');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('pasco-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback(
    (item: {
      id: number | string;
      name: string;
      category?: string;
      price: string;
      image: string;
      weight?: string;
    }) => {
      setItems(prev => {
        const existing = prev.find(i => i.productId === item.id);
        if (existing) {
          return prev.map(i =>
            i.productId === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [
          ...prev,
          {
            id: `cart-${item.id}-${Date.now()}`,
            productId: item.id,
            name: item.name,
            category: item.category,
            price: item.price,
            image: item.image,
            quantity: 1,
            weight: item.weight,
          },
        ];
      });
    },
    []
  );

  const removeFromCart = useCallback((productId: number | string) => {
    setItems(prev => prev.filter(i => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number | string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.productId !== productId));
      return;
    }
    setItems(prev => prev.map(i => (i.productId === productId ? { ...i, quantity } : i)));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => {
    const price = parseFloat(i.price.replace('£', ''));
    return sum + (isNaN(price) ? 0 : price * i.quantity);
  }, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
