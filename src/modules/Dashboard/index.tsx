import { useTranslation } from 'react-i18next';

import { AppHeader } from '@/components/shared';
import { Button } from '@/components/global';
import { Summary } from './components';

import { useTransactions } from '@/contexts/useTransactions';

export const Dashboard = () => {
  const { t } = useTranslation();
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
        <Button onClick={handleCreateNewTransaction}>
          {t('pages.dashboard.newTransaction')}
        </Button>
      </AppHeader>

      <Summary />
    </>
  );
};
