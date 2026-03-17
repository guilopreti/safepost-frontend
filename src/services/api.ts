import axios from "axios";
import type { ModerationResult } from "../types/post";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const analyzePost = async (
  text?: string,
  image?: File,
): Promise<ModerationResult> => {
  const formData = new FormData();
  if (text) formData.append("text", text);
  if (image) formData.append("image", image);

  const { data } = await api.post<ModerationResult>("/posts", formData);
  return data;
};
