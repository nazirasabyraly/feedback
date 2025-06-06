export interface Feedback {
  id: string;
  text: string;
  votes: number;
  category?: 'UI' | 'Performance' | 'Feature';
  createdAt: Date;
}

export type SortOption = 'latest' | 'oldest' | 'mostVoted' | 'leastVoted'; 