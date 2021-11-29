export type CoinDetailsAPIResponse = {
  // Coin Info
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string | null;
    small: string | null;
    large: string | null;
  } | null;
  description?: {
    en?: string | null;
  } | null;

  // Socials and Contact
  links: {
    homepage: string[] | null; // weblinks
    blockchain_site: string[] | null; // weblinks
    official_forum_url: string[] | null; // weblinks
    twitter_screen_name: string | null;
    facebook_username: string | null;
    subreddit_url: string | null;
    repos_url: {
      github: string[] | null;
    } | null;
  } | null;
  community_data: {
    facebook_likes: number | null;
    twitter_followers: number | null;
    reddit_average_posts_48h: number | null;
    reddit_average_comments_48h: number | null;
    reddit_subscribers: number | null;
    reddit_accounts_active_48h: number | null;
    telegram_channel_user_count: number | null;
  };
  sentiment_votes_up_percentage: number | null;
  sentiment_votes_down_percentage: number | null;
  developer_data: {
    forks: number | null;
    stars: number | null;
    subscribers: number | null;
    total_issues: number | null;
  } | null;

  // Market Statistics
  market_data: {
    current_price: { usd: number | null } | null;
    price_change_percentage_24h_in_currency: { usd: number | null } | null;
    price_change_percentage_7d_in_currency: { usd: number | null } | null;
    price_change_percentage_14d_in_currency: { usd: number | null } | null;
    price_change_percentage_30d_in_currency: { usd: number | null } | null;
    price_change_percentage_60d_in_currency: { usd: number | null } | null;
    price_change_percentage_200d_in_currency: { usd: number | null } | null;
    price_change_percentage_1y_in_currency: { usd: number | null } | null;
    price_change_24h_in_currency: { usd: number | null } | null;
    high_24h: { usd: number | null } | null;
    low_24h: { usd: number | null } | null;
    ath: { usd: number | null } | null;
    ath_date: { usd: string | null } | null;
    atl: { usd: number | null } | null;
    atl_date: { usd: string | null } | null;
  } | null;
};
