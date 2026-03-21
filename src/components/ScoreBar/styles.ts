import styled from "styled-components";

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

export const Label = styled.span`
  color: #c4c4cc;
  min-width: 120px;
`;

export const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  background-color: #323238;
  border-radius: 4px;
  margin: 0 1rem;
  overflow: hidden;
`;

const getScoreColor = (score: number) => {
  if (score === 2) return "#eab308"; // Amarelo (Risco Baixo - Reprovado)
  if (score === 4) return "#f97316"; // Laranja (Risco Médio - Reprovado)
  return "#ef4444"; // Vermelho (Risco Alto / Fallback)
};

export const BarFill = styled.div<{ $score: number }>`
  height: 100%;
  width: ${({ $score }) => ($score / 6) * 100}%;
  background-color: ${({ $score }) => getScoreColor($score)};
  border-radius: 4px;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
`;

export const ScoreValue = styled.span`
  color: #e1e1e6;
  font-weight: 600;
  width: 20px;
  text-align: right;
`;
