import { Header } from '../../components/shared'
import { AppButton } from '../../components/global'
import { Summary } from './components'

import { useTransactions } from '../../contexts/useTransactions'

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
      <Header>
        <AppButton onRequestClick={handleCreateNewTransaction}>
          Nova Transação
        </AppButton>
      </Header>

      <Summary />
    </>
  )
}
