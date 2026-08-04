export function parsePrice(price: string): number {
  const cleaned = price.replace(/[^0-9,]/g, '').replace(',', '.');
  return parseFloat(cleaned) || 0;
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function installmentLabel(price: string, times = 6): string {
  const installment = parsePrice(price) / times;
  return `ou ${times}x de ${formatBRL(installment)} sem juros`;
}
