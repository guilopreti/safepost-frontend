import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import {
  FormContainer,
  TextArea,
  ActionsContainer,
  FileLabel,
  SubmitButton,
  PreviewContainer,
  PreviewImage,
  RemoveImageButton,
} from "./styles";
import { analyzePost } from "../../services/api";
import { gooeyToast } from "goey-toast";
import type {
  ModerationResult as ModResultType,
  FeedPost,
} from "../../types/post";
import { ModerationResult } from "../ModerationResult";
import { HashtagSelector } from "../HashtagSelector";

interface PostFormProps {
  username: string;
  onPostCreated: (newPost: FeedPost) => void;
}

export function PostForm({ username, onPostCreated }: PostFormProps) {
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [moderationResult, setModerationResult] =
    useState<ModResultType | null>(null);
  const [showHashtags, setShowHashtags] = useState(false);

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setImageFile(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // Se o usuário clicar no botão enquanto a moderação ainda está ali sem escolher hashtag, não faz nada
    if (showHashtags || moderationResult) return;

    if (!text.trim() && !imageFile) return;

    setIsSubmitting(true);

    try {
      setModerationResult(null);
      setShowHashtags(false);

      const analysisPromise = analyzePost(text, imageFile ?? undefined);

      gooeyToast.promise(analysisPromise, {
        loading: "Analisando conteúdo pela IA...",
        success: "Análise concluída!",
        error: "Erro ao conectar com a API",
        fillColor: "#1a1a1e",
      });

      const result = await analysisPromise;

      console.log("Resultado da API:", result);
      setModerationResult(result);

      if (result.approved) {
        gooeyToast.success("Post analisado com sucesso! ✅", {
          fillColor: "#1a1a1e",
        });
      } else {
        gooeyToast.error("Post bloqueado pela moderação!", {
          fillColor: "#1a1a1e",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModeration = () => {
    if (!moderationResult) return;

    if (moderationResult.approved) {
      if (
        moderationResult.image?.tags &&
        moderationResult.image.tags.length > 0
      ) {
        setShowHashtags(true);
        return;
      } else {
        // Sem tags pra escolher, finaliza o post
        const newPost: FeedPost = {
          id: crypto.randomUUID(),
          username: username,
          text: text,
          imageUrl: previewUrl || undefined,
          hashtags: [],
          createdAt: new Date(),
          moderationResult: moderationResult,
        };

        onPostCreated(newPost);
        setText("");
        setImageFile(null);
        setPreviewUrl(null);
        setShowHashtags(false);
      }
    }

    setModerationResult(null);
  };

  const handleFinalizePost = (selectedHashtags: string[]) => {
    if (!moderationResult) return;

    const newPost: FeedPost = {
      id: crypto.randomUUID(),
      username: username,
      text: text,
      imageUrl: previewUrl || undefined,
      hashtags: selectedHashtags,
      createdAt: new Date(),
      moderationResult: moderationResult,
    };

    onPostCreated(newPost);

    setText("");
    setImageFile(null);
    setPreviewUrl(null);
    setModerationResult(null);
    setShowHashtags(false);
  };

  // Se o formulário está aguardando as hashtags ou ja exibindo moderação bloqueada, bloqueia o preenchimento.
  const isFormLocked =
    isSubmitting ||
    showHashtags ||
    (moderationResult && !moderationResult.approved) ||
    false;

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder="O que está acontecendo?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isFormLocked}
        />

        {previewUrl && (
          <PreviewContainer>
            <PreviewImage src={previewUrl} alt="Preview" />
            <RemoveImageButton
              type="button"
              onClick={clearImage}
              disabled={isFormLocked}
            >
              {/* Ícone de X simples */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </RemoveImageButton>
          </PreviewContainer>
        )}

        <ActionsContainer>
          <FileLabel>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              disabled={isFormLocked}
            />
            {/* Ícone de imagem */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            Foto
          </FileLabel>

          <SubmitButton
            type="submit"
            disabled={isFormLocked || (!text.trim() && !imageFile)}
          >
            Postar
          </SubmitButton>
        </ActionsContainer>
      </FormContainer>

      {/* Renderiza as opções de Hashtags se precisar */}
      {showHashtags && moderationResult?.image?.tags && (
        <HashtagSelector
          suggestedTags={moderationResult.image.tags}
          onConfirm={handleFinalizePost}
        />
      )}

      {/* Renderiza o Veridíto de detalhamento num Modal */}
      {moderationResult && !showHashtags && (
        <ModerationResult
          result={moderationResult}
          onClose={handleCloseModeration}
        />
      )}
    </>
  );
}
