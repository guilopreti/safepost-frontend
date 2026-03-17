import { useState } from "react";
import {
  Container,
  Title,
  ChipsContainer,
  Chip,
  ConfirmButton,
} from "./styles";

interface HashtagSelectorProps {
  suggestedTags: string[];
  onConfirm: (selectedTags: string[]) => void;
}

export function HashtagSelector({
  suggestedTags,
  onConfirm,
}: HashtagSelectorProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>(suggestedTags);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <Container>
      <Title>Análise identificou estas tags. Escolha quais quer usar:</Title>

      <ChipsContainer>
        {suggestedTags.map((tag) => (
          <Chip
            key={tag}
            type="button"
            $selected={selectedTags.includes(tag)}
            onClick={() => toggleTag(tag)}
          >
            #{tag}
          </Chip>
        ))}
      </ChipsContainer>

      <ConfirmButton type="button" onClick={() => onConfirm(selectedTags)}>
        Confirmar e Publicar
      </ConfirmButton>
    </Container>
  );
}
