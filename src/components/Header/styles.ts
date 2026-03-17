import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #3b82f6; /* Azul moderno */
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const UserInput = styled.input`
  padding: 0.6rem 1.2rem;
  border: 1px solid #e5e7eb;
  border-radius: 9999px; /* Formato de pílula */
  outline: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  background-color: #f9fafb;
  width: 200px;

  &:focus {
    border-color: #3b82f6;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;
