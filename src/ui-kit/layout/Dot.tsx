import styled from 'styled-components';

export const Dot = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 1px;
  height: 1px;
  margin: 5px;
`;
