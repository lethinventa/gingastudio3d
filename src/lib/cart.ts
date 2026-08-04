import { formatBRL, parsePrice } from './format';

export interface CartItem {
  slug: string;
  name: string;
  price: string;
  image?: string;
  qty: number;
}

const STORAGE_KEY = 'ginga-cart';
const WHATSAPP_NUMBER = '5584991275141';

function readCart(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart:updated', { detail: items }));
}

export function getCart(): CartItem[] {
  return readCart();
}

export function addToCart(item: { slug: string; name: string; price: string; image?: string }, qty = 1) {
  const items = readCart();
  const existing = items.find((i) => i.slug === item.slug);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({ ...item, qty });
  }
  writeCart(items);
}

export function updateQty(slug: string, qty: number) {
  const items = readCart();
  const item = items.find((i) => i.slug === slug);
  if (!item) return;
  if (qty <= 0) {
    writeCart(items.filter((i) => i.slug !== slug));
    return;
  }
  item.qty = qty;
  writeCart(items);
}

export function removeFromCart(slug: string) {
  writeCart(readCart().filter((i) => i.slug !== slug));
}

export function clearCart() {
  writeCart([]);
}

export function getCartCount(items: CartItem[] = readCart()): number {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

export function getCartTotal(items: CartItem[] = readCart()): number {
  return items.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0);
}

export function buildWhatsAppMessage(items: CartItem[]): string {
  const lines = items.map(
    (i) => `• ${i.name} (x${i.qty}) — ${formatBRL(parsePrice(i.price) * i.qty)}`,
  );
  return [
    'Olá! Gostaria de fazer o seguinte pedido:',
    '',
    ...lines,
    '',
    `Total: ${formatBRL(getCartTotal(items))}`,
  ].join('\n');
}

export function buildWhatsAppUrl(items: CartItem[]): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(items))}`;
}

export function openCart() {
  window.dispatchEvent(new Event('cart:open'));
}
