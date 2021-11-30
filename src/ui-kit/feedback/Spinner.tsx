import styled, { keyframes } from 'styled-components';

// export function Spinner() {
//   return <p>Loading...</p>;
// }
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid;
  border-top-color: ${props => props.theme.colors.lightShade};
  border-right-color: ${props => props.theme.colors.darkShade};
  border-bottom-color: ${props => props.theme.colors.darkShade};
  border-left-color: ${props => props.theme.colors.darkShade};
  animation: ${rotate} 1s linear infinite;
`;
