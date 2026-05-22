export interface Joke {
  id?: string;
  type: 'single' | 'twopart';
  category: string;
  joke?: string;
  setup?: string;
  delivery?: string;
  nsfw: boolean;
  safe: boolean;
  error?: boolean;
  message?: string;
}

export interface JokeApiResponse {
  error: boolean;
  category: string;
  type: 'single' | 'twopart';
  joke?: string;
  setup?: string;
  delivery?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
}

export interface JokeCategory {
  name: string;
  value: string;
  emoji: string;
}
