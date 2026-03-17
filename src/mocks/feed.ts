import type { FeedPost } from "../types/post";

export const initialMockFeed: FeedPost[] = [
  {
    id: "1",
    username: "alice_smith",
    text: "Que dia incrível para codar! A nova interface em dark mode está ficando sensacional. 🚀",
    hashtags: [],
    createdAt: new Date(Date.now() - 1000 * 60 * 15), // 15 minutos atrás
    moderationResult: {
      approved: true,
      text: {
        analyzed: true,
        categories: { Hate: 0, Violence: 0, Sexual: 0, SelfHarm: 0 },
      },
    },
  },
  {
    id: "2",
    username: "dev_ninja",
    text: "Alguém mais prefere trabalhar de madrugada ou é só eu? Minha produtividade dobra depois da meia-noite! 🦉💻",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    hashtags: ["nightowl", "setup", "developer"],
    createdAt: new Date(Date.now() - 1000 * 60 * 120), // 2 horas atrás
    moderationResult: {
      approved: true,
      text: {
        analyzed: true,
        categories: { Hate: 0, Violence: 0, Sexual: 0, SelfHarm: 0 },
      },
      image: {
        analyzed: true,
        tags: ["nightowl", "setup", "developer"],
        categories: { Hate: 0, Violence: 0, Sexual: 0, SelfHarm: 0 },
      },
    },
  },
];
