export type CommunityData = Partial<{
  weblinks: string[];
  twitterLink: string;
  twitterStat: number; // Followers
  facebookLink: string;
  facebookStat: number; // Likes
  redditLink: string;
  redditStat: number; // Subs
  githubLinks: string[];
  githubStats: Partial<{
    forks: number;
    stars: number;
    subscribers: number;
    totalIssues: number;
  }>;
  reputationPercentageUp: number;
  reputationPercentageDown: number;
}>;
