import { DtIncome, DtOutcome, DtTotal } from '../../icons/dtMoney';
import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <DtIncome size={'2rem'} color={'#33CC95'} />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <DtOutcome size={'2rem'} color={'#E52e54'} />
        </header>
        <strong>- R$ 200,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <DtTotal size={'2rem'} />
        </header>
        <strong>R$ 800,00</strong>
      </div>
    </Container>
  );
}
