import axios, { AxiosInstance } from 'axios';
import { Joke, JokeApiResponse } from '../types/joke';

class JokeService {
  private baseURL = 'https://v2.jokeapi.dev';
  private client: AxiosInstance;
  private retryAttempts = 3;
  private retryDelay = 1000;

  constructor() {
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
    });
  }

  /**
   * Retry mechanism for handling API rate limits and temporary failures
   */
  private async retryRequest<T>(fn: () => Promise<T>): Promise<T> {
    for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
      try {
        return await fn();
      } catch (error: any) {
        const isLastAttempt = attempt === this.retryAttempts - 1;
        const status = error.response?.status;
        const shouldRetry = status === 429 || status >= 500;

        if (!shouldRetry || isLastAttempt) {
          throw error;
        }

        const delay = this.retryDelay * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    throw new Error('Max retry attempts exceeded');
  }

  /**
   * Get a random joke from any category
   */
  async getRandomJoke(): Promise<Joke> {
    return this.retryRequest(() =>
      this.client.get<JokeApiResponse>('/joke/Any').then(res => ({
        ...res.data,
        nsfw: res.data.flags.nsfw,
        safe: !res.data.flags.nsfw && !res.data.flags.explicit,
      }))
    );
  }

  /**
   * Get a random joke from a specific category
   */
  async getJokeByCategory(category: string): Promise<Joke> {
    return this.retryRequest(() =>
      this.client.get<JokeApiResponse>(`/joke/${category}`).then(res => ({
        ...res.data,
        nsfw: res.data.flags.nsfw,
        safe: !res.data.flags.nsfw && !res.data.flags.explicit,
      }))
    );
  }

  /**
   * Get multiple jokes
   */
  async getMultipleJokes(count: number = 5, category: string = 'Any'): Promise<Joke[]> {
    const promises = Array(count).fill(null).map(() =>
      this.getJokeByCategory(category).catch(() => ({
        error: true,
        category,
        type: 'single' as const,
        joke: 'Failed to fetch joke',
        nsfw: false,
        safe: false,
      }))
    );

    return Promise.all(promises);
  }

  /**
   * Get a programming joke
   */
  async getProgrammingJoke(): Promise<Joke> {
    return this.getJokeByCategory('Programming');
  }

  /**
   * Get a knock-knock joke
   */
  async getKnockKnockJoke(): Promise<Joke> {
    return this.getJokeByCategory('Knock-Knock');
  }

  /**
   * Get available joke categories
   */
  getAvailableCategories() {
    return ['Any', 'General', 'Programming', 'Knock-Knock'];
  }
}

export default JokeService;
