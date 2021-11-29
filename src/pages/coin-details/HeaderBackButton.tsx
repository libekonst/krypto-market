import { useNavigate } from 'react-router';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { TextButton } from '../../ui-kit/input/TextButton';

export function HeaderBackButton() {
  const navigate = useNavigate();
  return (
    <TextButton onClick={() => navigate('/')}>
      <MdOutlineArrowBackIosNew />
      Home
    </TextButton>
  );
}
