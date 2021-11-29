import styled from 'styled-components';
import { ButtonBase } from './ButtonBase';

export const PrimaryButton = styled(ButtonBase)`
  color: ${props => props.theme.colors.lightShade};
  background-color: ${props => props.theme.colors.primary};
  filter: drop-shadow(1px 1px 4px ${props => props.theme.colors.primary});
  transition: filter 0.1s linear;

  &:hover {
    filter: drop-shadow(1px 1px 4px ${props => props.theme.colors.primary})
      brightness(1.1);
  }

  &:active {
    filter: drop-shadow(1px 1px 4px ${props => props.theme.colors.primary})
      brightness(1.3);
  }
`;
