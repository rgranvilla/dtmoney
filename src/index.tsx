import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 4500,
          type: 'deposit',
          category: 'Renda Extra',
          createdAt: new Date('2022-01-08 09:00:00'),
        },
        {
          id: 2,
          title: 'Salário',
          amount: 5800,
          type: 'deposit',
          category: 'Salário',
          createdAt: new Date('2022-01-08 09:00:00'),
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 980,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2022-01-08 09:00:00'),
        },
        {
          id: 4,
          title: 'Condomínio',
          amount: 320,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2022-01-08 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
