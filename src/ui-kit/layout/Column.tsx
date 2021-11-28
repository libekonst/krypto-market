import styled from 'styled-components';

type FlexJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch ';

type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

type Props = {
  mainAxis?: FlexJustify;
  crossAxis?: FlexAlign;
  noWrap?: boolean;
};

export const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.mainAxis ?? 'flex-start'};
  align-items: ${props => props.crossAxis ?? 'center'};
  flex-wrap: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
`;
