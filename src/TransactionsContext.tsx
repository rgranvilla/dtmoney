import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transactions[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
