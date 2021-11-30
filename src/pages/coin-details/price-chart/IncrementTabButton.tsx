import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { TextButton } from '../../../ui-kit/input/TextButton';

type Props = {
  active?: boolean;
  onClick?: () => void;
  children?: ReactNode;
};

export function IncrementTabButton({ active, onClick, children }: Props) {
  if (active) return <SelectedTab onClick={onClick}>{children}</SelectedTab>;
  return <UnselectedTab onClick={onClick}>{children}</UnselectedTab>;
}

const UnselectedTab = styled(TextButton)`
  padding: 0.3rem 0.7rem;
  margin-right: 0.5rem;
`;

const activeStyles = css`
  color: ${props => props.theme.colors.darkShade};
  background-color: ${props => props.theme.colors.lightShade};
  font-weight: 600;
`;

const SelectedTab = styled(UnselectedTab)`
  ${activeStyles}
`;
