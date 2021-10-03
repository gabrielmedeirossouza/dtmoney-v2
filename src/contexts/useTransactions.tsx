import {
  createContext, ReactNode, useContext, useState,
} from 'react';

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
  createNewTransaction(input: TransactionInput): void
}

interface Props {
  children: ReactNode
}

const TransactionsContext = createContext<Context>(
  {} as Context,
);

export const TransactionsProvider = ({ children }: Props) => {
  const [transactions] = useState<Transaction[]>([]);

  const createNewTransaction = (input: TransactionInput) => {
    console.log(input);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
};
