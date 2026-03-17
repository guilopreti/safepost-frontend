export interface CategoryScores {
  Hate: number;
  Violence: number;
  Sexual: number;
  SelfHarm: number;
}

export interface TextResult {
  analyzed: boolean;
  categories: CategoryScores;
}

export interface ImageResult {
  analyzed: boolean;
  tags: string[];
  categories: CategoryScores;
}

export interface ModerationResult {
  approved: boolean;
  text?: TextResult;
  image?: ImageResult;
}

export interface FeedPost {
  id: string;
  username: string;
  text: string;
  imageUrl?: string;
  hashtags: string[];
  moderationResult: ModerationResult;
  createdAt: Date;
}
