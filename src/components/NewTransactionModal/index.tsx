import { useState } from 'react';
import Modal from 'react-modal';
import { DtClose, DtIncome, DtOutcome } from '../../icons/dtMoney';
import { Container, RadioBox, TransactionsTypeContainer } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <DtClose size={40} color="inherit" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />

        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <DtIncome
              size={24}
              alt="Icone com seta para cima"
              color={`var(--green)`}
            />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <DtOutcome
              size={24}
              alt="Icone com seta para baixo"
              color={`var(--red)`}
            />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
