import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #323238;
`;

export const Title = styled.h3`
  font-size: 0.875rem;
  color: #e1e1e6;
  margin-bottom: 0.75rem;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Chip = styled.button<{ $selected: boolean }>`
  background-color: ${({ $selected }) =>
    $selected ? "rgba(59, 130, 246, 0.2)" : "#121214"};
  color: ${({ $selected }) => ($selected ? "#3b82f6" : "#7c7c8a")};
  border: 1px solid ${({ $selected }) => ($selected ? "#3b82f6" : "#323238")};
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
    color: ${({ $selected }) => ($selected ? "#3b82f6" : "#e1e1e6")};
  }
`;

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;
