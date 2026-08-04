'use client';

import Link from 'next/link';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const deliveryThreshold = 15;
  const deliveryCost = totalPrice >= deliveryThreshold ? 0 : 2.99;
  const orderTotal = totalPrice + deliveryCost;
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  if (items.length === 0) {
    return (
      <PageLayout breadcrumbs={[{ label: 'Cart' }]}>
        <section className="section-spacing bg-white">
          <div className="container-pasco text-center py-20">
            <FadeUp>
              <div className="max-w-md mx-auto">
                <svg
                  className="mx-auto w-16 h-16 text-[#E5E2DB]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <h1 className="mt-6 text-3xl font-semibold text-[#1A1A1A]">Your Cart is Empty</h1>
                <p className="mt-4 text-[#6B6B6B] leading-relaxed">
                  Looks like you haven&apos;t added any products yet. Explore our range of authentic Indian flavours.
                </p>
                <Link
                  href="/products"
                  className="mt-8 inline-flex items-center justify-center h-12 px-8 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors tracking-wide"
                >
                  Browse Products
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout breadcrumbs={[{ label: 'Cart' }]}>
      <section className="section-spacing bg-white">
        <div className="container-pasco">
          <FadeUp>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">Shopping Cart</h1>
              <button
                onClick={clearCart}
                className="text-sm text-[#9C3A28] hover:text-[#7a2e1f] font-medium transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border border-[#E5E2DB] rounded-xl overflow-hidden divide-y divide-[#E5E2DB]">
                {items.map(item => {
                  const lineTotal = parseFloat(item.price.replace('£', '')) * item.quantity;
                  return (
                    <div key={item.productId} className="flex gap-4 p-4 md:p-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden bg-[#F8F5EF]">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-sm md:text-base font-semibold text-[#1A1A1A] leading-snug">{item.name}</h3>
                            {item.category && <p className="mt-1 text-xs text-[#6B6B6B]">{item.category}</p>}
                            {item.weight && <p className="mt-1 text-xs text-[#6B6B6B]">{item.weight}</p>}
                          </div>
                          <button
                            onClick={() => removeFromCart(item.productId)}
                            className="text-[#6B6B6B] hover:text-[#9C3A28] transition-colors shrink-0"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.061-.94-1.75-1.816-1.75H12.25c-.877 0-1.816.69-1.816 1.75v.916"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center border border-[#E5E2DB] rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8F5EF] transition-colors text-sm"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8F5EF] transition-colors text-sm"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-[#1A1A1A]">£{lineTotal.toFixed(2)}</p>
                            {item.quantity > 1 && <p className="text-xs text-[#6B6B6B]">£{item.price} each</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/products"
                className="mt-4 inline-flex items-center text-sm text-[#214E34] hover:text-[#9C3A28] font-medium transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#F8F5EF] rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-[#1A1A1A]">Order Summary</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B6B6B]">Subtotal ({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
                    <span className="font-medium text-[#1A1A1A]">£{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B6B6B]">Delivery</span>
                    <span className="font-medium text-[#1A1A1A]">{totalPrice >= deliveryThreshold ? 'Free' : `£${deliveryCost.toFixed(2)}`}</span>
                  </div>
                  {totalPrice < deliveryThreshold && (
                    <p className="text-xs text-[#B88A3B]">
                      Add £{(deliveryThreshold - totalPrice).toFixed(2)} more for free delivery
                    </p>
                  )}
                  <div className="border-t border-[#E5E2DB] pt-3 flex justify-between">
                    <span className="text-base font-semibold text-[#1A1A1A]">Total</span>
                    <span className="text-base font-semibold text-[#1A1A1A]">£{orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="mt-6 w-full h-12 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors tracking-wide">
                  Proceed to Checkout
                </button>
                <p className="mt-3 text-xs text-[#6B6B6B] text-center">Free UK delivery on orders over £15</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
