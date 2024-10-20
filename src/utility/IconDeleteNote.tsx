import { IconTrash } from '@tabler/icons-react';

interface IconDeleteNoteProps {
    color: string;
    size: number;
}

const IconDeleteNote: React.FC<IconDeleteNoteProps> = ({ color, size }) => {
    return (
        <IconTrash color={color} size={size} />
    )
}

export default IconDeleteNote