import { IconContext } from 'react-icons';
import { DtLogo } from '.';

export function Logo(props: IconContext) {
  const fontSize = Math.floor(Number(props?.size) * 0.6) + 'px';
  return (
    <div
      className="logoContainer"
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: fontSize,
        color: props.color,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <DtLogo size={props.size} fill={props.color} stroke={'#33cc95'} />
      <span>dt money</span>
    </div>
  );
}
