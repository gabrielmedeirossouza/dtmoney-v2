import { useTranslation } from 'react-i18next';

import { formatCurrency } from '@/support/formatters/formatCurrency';

import {
  Container,
  Header,
  CardIncome,
  CardWithdraw,
  CardTotal,
  StyledDataTable,
  TData,
} from './styles';

const data: Data[] = [
  {
    id: '1',
    title: 'Supermercado',
    amount: 1000,
    type: 'withdraw',
    category: 'Compras',
    date: '01/10/2021',
  },
  {
    id: '2',
    title: 'Site para harbor',
    amount: 7000,
    type: 'income',
    category: 'Vendas',
    date: '27/09/2021',
  },
];

interface Data {
  id: string
  title: string
  amount: number
  type: 'income' | 'withdraw'
  category: string
  date: string
}

export const Summary = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <CardIncome
          title={t('pages.dashboard.summary.header.incomes')}
          text="R$ 1.200,00"
        />
        <CardWithdraw
          title={t('pages.dashboard.summary.header.withdraws')}
          text="R$ 200,00"
        />
        <CardTotal
          title={t('pages.dashboard.summary.header.total')}
          text="R$ 1.000,00"
        />
      </Header>

      <StyledDataTable>
        <thead>
          <tr>
            <th>
              {t('global.transaction.title')}
            </th>
            <th>
              {t('global.transaction.price')}
            </th>
            <th>
              {t('global.transaction.category')}
            </th>
            <th>
              {t('global.transaction.date')}
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map(({
            id, title, amount, type, category, date,
          }) => (
            <tr key={id}>
              <TData>{title}</TData>
              <TData type={type}>{formatCurrency({ amount, type })}</TData>
              <TData>{category}</TData>
              <TData>{date}</TData>
            </tr>
          ))}
        </tbody>
      </StyledDataTable>
    </Container>
  );
};
