import { ReactChild } from 'react';
import { IoLogoTwitter } from 'react-icons/io';
import { FaRedditAlien } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import styled from 'styled-components';
import { Column } from '../../../ui-kit/layout/Column';
import { Dot } from '../../../ui-kit/layout/Dot';
import { Row } from '../../../ui-kit/layout/Row';
import { CoinAnalysis } from '../CoinAnalysis';
import { Header } from './Header';
import { LinkBase } from './LinkBase';
import { shortenLink } from './shortenLink';

type Props = {
  coinAnalysis: CoinAnalysis;
};

export function SocialLinks({ coinAnalysis }: Props) {
  const {
    twitterLink,
    twitterStat,
    twitterName,
    facebookLink,
    facebookStat,
    facebookName,
    redditLink,
    redditStat,
    redditName,
    githubLinks,
    githubStats
  } = coinAnalysis;
  if (
    !twitterLink &&
    !twitterStat &&
    !twitterName &&
    !facebookLink &&
    !facebookStat &&
    !facebookName &&
    !redditLink &&
    !redditStat &&
    !redditName &&
    !githubLinks
  )
    return null;

  return (
    <Column crossAxis="flex-start" style={{ marginBottom: '1rem' }}>
      <Header>Socials</Header>
      <SocialButton
        link={twitterLink}
        stat={twitterStat}
        name={twitterName}
        icon={<IoLogoTwitter />}
      />
      <SocialButton
        link={facebookLink}
        stat={facebookStat}
        name={facebookName}
        icon={<ImFacebook />}
      />
      <SocialButton
        link={redditLink}
        stat={redditStat}
        name={redditName}
        icon={<FaRedditAlien />}
      />
      {githubLinks &&
        githubLinks.map(link => (
          <SocialButton
            link={link}
            name={shortenLink(link)}
            icon={<AiFillGithub />}
          />
        ))}
    </Column>
  );
}

const Text = styled.div`
  padding-left: 0.4rem;
`;

type ButtonProps = {
  link?: string;
  stat?: number;
  name?: string;
  icon: ReactChild;
};
function SocialButton({ link, stat, name, icon }: ButtonProps) {
  if (!link && !stat && !name) return null;

  return (
    <LinkBase target="blank" href={link}>
      <Row>
        {icon} {(name || link) && <Text>{name || link}</Text>}
        {stat && (
          <>
            <Dot /> <Text>{stat}</Text>
          </>
        )}
      </Row>
    </LinkBase>
  );
}
