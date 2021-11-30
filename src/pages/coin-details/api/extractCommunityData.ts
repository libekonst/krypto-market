import { CoinDetailsAPIResponse } from './CoinDetailsAPIResponse';
import { CommunityData } from '../community-data/CommunityData';

export const extractCommunityData = (
  res: CoinDetailsAPIResponse
): CommunityData => {
  const {
    links,
    community_data,
    developer_data,
    sentiment_votes_down_percentage,
    sentiment_votes_up_percentage
  } = res;

  return {
    weblinks: getWeblinks(res),
    twitterLink: links?.twitter_screen_name
      ? generateTwitterLink(links.twitter_screen_name)
      : undefined,
    twitterName: links?.twitter_screen_name
      ? generateSocialName(links?.twitter_screen_name)
      : undefined,
    twitterStat: community_data?.twitter_followers ?? undefined,
    facebookLink: links?.facebook_username
      ? generateFacebookLink(links.facebook_username)
      : undefined,
    facebookName: links?.facebook_username
      ? generateSocialName(links.facebook_username)
      : undefined,
    facebookStat: community_data?.facebook_likes ?? undefined, // Likes
    redditLink: links?.subreddit_url ?? undefined,
    redditName: links?.subreddit_url
      ? generateRedditName(links?.subreddit_url)
      : undefined,
    redditStat: community_data?.reddit_subscribers ?? undefined, // Subs
    githubLinks: getGithubRepoLinks(res),
    githubStats: {
      forks: developer_data?.forks ?? undefined,
      stars: developer_data?.stars ?? undefined,
      subscribers: developer_data?.subscribers ?? undefined,
      totalIssues: developer_data?.total_issues ?? undefined
    },
    reputationPercentageUp: sentiment_votes_up_percentage ?? undefined,
    reputationPercentageDown: sentiment_votes_down_percentage ?? undefined
  };
};

const getWeblinks = (res: CoinDetailsAPIResponse): string[] | undefined => {
  const links: string[] = [];

  if (res.links?.homepage)
    res.links.homepage
      .filter(link => link !== '')
      .forEach(link => links.push(link));

  if (res.links?.blockchain_site)
    res.links.blockchain_site
      .filter(link => link !== '')
      .forEach(link => links.push(link));

  if (res.links?.official_forum_url)
    res.links.official_forum_url
      .filter(link => link !== '')
      .forEach(link => links.push(link));

  if (links.length === 0) return;
  return links;
};

const generateTwitterLink = (accName: string) =>
  `https://twitter.com/${accName}`;
const generateFacebookLink = (accName: string) =>
  `https://www.facebook.com/${accName}`;
const generateSocialName = (accName: string) => `@${accName}`;
const generateRedditName = (url: string) => {
  const dilimiter = '/r/';
  const position = url.indexOf(dilimiter);
  if (position < 0) return;

  return url.slice(position, url.length - 1);
};

const getGithubRepoLinks = (
  res: CoinDetailsAPIResponse
): string[] | undefined => {
  if (!res.links?.repos_url?.github?.length) return;

  return res.links.repos_url.github.filter(url => url !== '');
};
