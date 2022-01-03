import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

type transactionsProps = {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: Date;
};

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<transactionsProps[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'deposit'
                  ? `R$ ${transaction.amount}`
                  : ` - R$ ${transaction.amount}`}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
