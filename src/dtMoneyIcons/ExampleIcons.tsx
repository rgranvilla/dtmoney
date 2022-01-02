import { DtClose, DtIncome, DtLogo, DtOutcome, DtTotal } from '.';
import { Logo } from './Logo';

export function ExampleIcons() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <DtClose size={40} />
      <DtIncome size={40} />
      <DtOutcome size={40} />
      <DtTotal size={40} />
      <DtLogo fill={'#f4f4f4'} stroke={'#33cc95'} size={40} />
      <Logo color={'#f4f4f4'} size={'40'} />
    </div>
  );
}
