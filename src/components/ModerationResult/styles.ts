import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
`;

export const Container = styled.div`
  background-color: #1a1a1e;
  border: 1px solid #323238;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #323238;
`;

export const Badge = styled.div<{ $approved: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  background-color: ${({ $approved }) =>
    $approved ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)"};
  color: ${({ $approved }) => ($approved ? "#22c55e" : "#ef4444")};
  border: 1px solid
    ${({ $approved }) =>
      $approved ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"};
`;

export const Title = styled.h3`
  font-size: 1rem;
  color: #e1e1e6;
  margin: 0;
`;

export const Section = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 0.875rem;
  color: #7c7c8a;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ActionButton = styled.button<{ $approved: boolean }>`
  width: 100%;
  padding: 0.875rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  background-color: ${({ $approved }) => ($approved ? "#3b82f6" : "#323238")};
  color: ${({ $approved }) => ($approved ? "#ffffff" : "#e1e1e6")};
  cursor: pointer;
  transition:
    opacity 0.2s,
    background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: ${({ $approved }) => ($approved ? "#2563eb" : "#44444c")};
  }
`;
