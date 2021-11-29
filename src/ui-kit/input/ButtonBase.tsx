import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
`;
