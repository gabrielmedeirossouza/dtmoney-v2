import { Trans } from 'react-i18next';

import { AppHeader } from '@/components/shared';
import { Button } from '@/components/global';
import { Summary } from './components';

import { useTransactions } from '@/contexts/useTransactions';

export const Dashboard = () => {
  const { createNewTransaction } = useTransactions();

  const handleCreateNewTransaction = () => {
    const data = {
      title: 'Título teste',
      amount: 900,
      type: 'Tipo teste',
      category: 'Categoria teste',
    };

    createNewTransaction(data);
  };

  return (
    <>
      <AppHeader>
        <Button onRequestClick={handleCreateNewTransaction}>
          <Trans i18nKey="pages.dashboard.newTransaction" />
        </Button>
      </AppHeader>

      <Summary />
    </>
  );
};
