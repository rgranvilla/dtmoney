import { Logo } from '../../icons/dtMoney/Logo';

import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo color={'#fff'} size={'40'} />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
