import {
  Overlay,
  Container,
  Header,
  Badge,
  Title,
  Section,
  SectionTitle,
  ActionButton,
} from "./styles";
import { ScoreBar } from "../ScoreBar";
import type {
  ModerationResult as ModResultType,
  CategoryScores,
} from "../../types/post";

interface ModerationResultProps {
  result: ModResultType;
  onClose: () => void;
}

export function ModerationResult({ result, onClose }: ModerationResultProps) {
  const renderScores = (categories: CategoryScores) => (
    <>
      <ScoreBar label="Ódio" score={categories.Hate} />
      <ScoreBar label="Violência" score={categories.Violence} />
      <ScoreBar label="Conteúdo Sexual" score={categories.Sexual} />
      <ScoreBar label="Automutilação" score={categories.SelfHarm} />
    </>
  );

  return (
    <Overlay>
      <Container>
        <Header>
          <Badge $approved={result.approved}>
            {result.approved ? "Aprovado ✅" : "Bloqueado 🚫"}
          </Badge>
          <Title>Resultado da Moderação AI</Title>
        </Header>

        {result.text?.analyzed && (
          <Section>
            <SectionTitle>Análise de Texto</SectionTitle>
            {renderScores(result.text.categories)}
          </Section>
        )}

        {result.image?.analyzed && (
          <Section>
            <SectionTitle>Análise de Imagem</SectionTitle>
            {renderScores(result.image.categories)}
          </Section>
        )}

        <ActionButton $approved={result.approved} onClick={onClose}>
          {result.approved ? "Continuar" : "Tentar Novamente"}
        </ActionButton>
      </Container>
    </Overlay>
  );
}
