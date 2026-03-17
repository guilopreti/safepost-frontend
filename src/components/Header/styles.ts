import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #202024;
  border-bottom: 1px solid #323238;
  position: sticky;
  top: 0;
  z-index: 10;
  gap: 1rem;

  /* Tablet e Desktop */
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  color: #3b82f6;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 250px;
  flex: 1;
  justify-content: flex-end;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #323238;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: #9ca3af;
  }
`;

export const UserInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #323238;
  border-radius: 9999px;
  outline: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background-color: #121214;
  color: #e1e1e6;
  width: 100%; /* Ocupa o restante na mobile */

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &::placeholder {
    color: #7c7c8a;
  }
`;
