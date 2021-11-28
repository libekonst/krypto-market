import { ReactNode } from 'react';
import { Column } from './Column';
import { Row } from './Row';

type Props = {
  children: ReactNode;
  image: string;
};
export function ErrorPageScaffold({ children, image }: Props) {
  return (
    <Row mainAxis="space-evenly">
      <Column>{children}</Column>
      <img
        src={image}
        alt="logo"
        style={{ height: '70vmin', minHeight: '30vmin' }}
      />
    </Row>
  );
}
