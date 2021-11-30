import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { TextButton } from '../../ui-kit/input/TextButton';

type Props = {
  children: string;
};

const PARAGRAPH_BREAK = '\r\n\r\n';

export function DescriptionBox({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = useMemo(() => children.split(PARAGRAPH_BREAK), [children]);

  const showExpandButton = useMemo(
    () => paragraphs.length > 1 && !isExpanded,
    [isExpanded, paragraphs.length]
  );
  const [firstParagraph] = paragraphs;

  return (
    <Box id="description-box">
      {showExpandButton ? (
        <>
          <Paragraph
            dangerouslySetInnerHTML={{ __html: firstParagraph }}
          ></Paragraph>
          <TextButton onClick={() => setIsExpanded(true)}>Read More</TextButton>
        </>
      ) : (
        paragraphs.map(p => (
          <Paragraph
            dangerouslySetInnerHTML={{ __html: p }}
            key={p}
          ></Paragraph>
        ))
      )}
      {/*       
      {showExpandButton && (
        <TextButton onClick={() => setIsExpanded(true)}>More</TextButton>
      )} */}
    </Box>
  );
}

const Box = styled.div`
  padding-top: 1rem;
`;

const Paragraph = styled.p`
  margin: 0 0 0.5rem;
`;
