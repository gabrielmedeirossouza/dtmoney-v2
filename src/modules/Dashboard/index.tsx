import { AppHeader } from '@/components/shared'
import { Button } from '@/components/global'
import { Summary } from './components'

import { useTransactions } from '@/contexts/useTransactions'

export function Dashboard() {
  const { createNewTransaction } = useTransactions()

  function handleCreateNewTransaction() {
    const data = {
      title: 'Título teste',
      amount: 900,
      type: 'Tipo teste',
      category: 'Categoria teste'
    }

    createNewTransaction(data)
  }

  return (
    <>
      <AppHeader>
        <Button onRequestClick={handleCreateNewTransaction}>
          Nova Transação
        </Button>
      </AppHeader>

      <Summary />
    </>
  )
}
