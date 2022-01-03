import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] =
    useState<boolean>(false);

  function handleOpenTransactionModal() {
    setNewTransactionModalIsOpen(true);
  }

  function handleCloseTransactionModal() {
    setNewTransactionModalIsOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
