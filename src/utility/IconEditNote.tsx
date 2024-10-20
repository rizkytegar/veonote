import { IconEdit } from '@tabler/icons-react';

interface IconEditNoteProps {
  color: string;
  size: number;
}

const IconEditNote: React.FC<IconEditNoteProps> = ({ color, size }) => {
  return (
    <IconEdit color={color} size={size} />
  )
}

export default IconEditNote