import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #202024;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #323238;
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: #121214;
  border: 1px solid #323238;
  border-radius: 8px;
  padding: 0.875rem;
  color: #e1e1e6;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &::placeholder {
    color: #7c7c8a;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Para lidar bem com telas muito finas */
  gap: 1rem;
`;

export const FileLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(59, 130, 246, 0.1);
  }

  input {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 0.6rem 1.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition:
    background-color 0.2s,
    opacity 0.2s;

  &:hover:not(:disabled) {
    background-color: #2563eb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%; /* No mobile, cresce de acordo com a tela */
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #323238;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 300px; /* Limite de altura caso enviem imagens verticais gignates */
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(
      239,
      68,
      68,
      0.9
    ); /* Fica vermelho ao passar o mouse */
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
