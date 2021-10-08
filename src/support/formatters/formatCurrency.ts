interface Props {
  amount: number,
  type?: 'income' | 'withdraw'
}

export const formatCurrency = ({ amount, type }: Props) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);

  if (!type) {
    return formattedCurrency;
  }

  const signal = type === 'income' ? '' : '-';
  const formattedCurrencyWithSignal = `${signal} ${formattedCurrency}`;
  return formattedCurrencyWithSignal;
};
