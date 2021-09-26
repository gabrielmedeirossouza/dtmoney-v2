import {createContext, ReactNode, useContext, useState} from "react";

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface Context {
  transactions: Transaction[]
  createNewTransaction: (transaction: TransactionInput) => void
}

interface Props {
  children: ReactNode
}

const TransactionsContext = createContext<Context>(
  {} as Context
)

export function TransactionsProvider({ children }: Props) {

  const [transactions] = useState<Transaction[]>([])

  function createNewTransaction(input: TransactionInput) {
    console.log(input)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createNewTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
