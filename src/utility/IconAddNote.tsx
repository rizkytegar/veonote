import { IconPlus } from '@tabler/icons-react';

interface IconEditNoteProps {
  color: string;
  size: number;
}

const IconAddNote: React.FC<IconEditNoteProps> = ({ color, size }) => {
  return (
    <IconPlus color={color} size={size} />
  )
}

export default IconAddNote