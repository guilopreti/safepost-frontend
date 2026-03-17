import { ScoreContainer, Label, BarTrack, BarFill, ScoreValue } from "./styles";

interface ScoreBarProps {
  label: string;
  score: number;
}

export function ScoreBar({ label, score }: ScoreBarProps) {
  return (
    <ScoreContainer>
      <Label>{label}</Label>
      <BarTrack>
        <BarFill $score={score} />
      </BarTrack>
      <ScoreValue>{score}</ScoreValue>
    </ScoreContainer>
  );
}
