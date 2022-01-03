import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  padding: 2rem 1rem 10rem;
  margin: 0 auto;

  button {
    height: 3rem;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);

    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
