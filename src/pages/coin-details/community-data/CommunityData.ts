export type CommunityData = Partial<{
  weblinks: string[];
  twitterLink: string;
  twitterName: string;
  twitterStat: number; // Followers
  facebookLink: string;
  facebookName: string;
  facebookStat: number; // Likes
  redditLink: string;
  redditName: string;
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
