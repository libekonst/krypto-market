import styled from 'styled-components';

type Props = {
  children: string;
};
export function DescriptionBox({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.section`
  width: 100%;
  padding: 1rem;
`;
