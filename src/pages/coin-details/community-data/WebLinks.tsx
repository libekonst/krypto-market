import { BiWorld } from 'react-icons/bi';
import styled from 'styled-components';
import { Column } from '../../../ui-kit/layout/Column';
import { Row } from '../../../ui-kit/layout/Row';
import { Header } from './Header';
import { LinkBase } from './LinkBase';
import { shortenLink } from '../../../lib/shortenLink';

type Props = {
  links: string[];
};

export function WebLinks({ links }: Props) {
  if (!links.length) return null;

  return (
    <Column crossAxis="flex-start" style={{ marginBottom: '1rem' }}>
      <Header>Community Links</Header>
      {links.map(link => (
        <LinkBase target="blank" href={link} key={link}>
          <Row>
            <BiWorld /> <Text>{shortenLink(link)}</Text>
          </Row>
        </LinkBase>
      ))}
    </Column>
  );
}

const Text = styled.div`
  padding-left: 0.4rem;
`;
