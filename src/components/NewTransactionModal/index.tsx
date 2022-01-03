import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { DtClose, DtIncome, DtOutcome } from '../../icons/dtMoney';
import { TransactionsContext } from '../../TransactionsContext';
import { Container, RadioBox, TransactionsTypeContainer } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({
      title,
      amount,
      category,
      type,
    });
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(Number(event.target.value))
          }
        />

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

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCategory(event.target.value)
          }
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
