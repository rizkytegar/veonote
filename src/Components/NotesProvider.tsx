import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Note {
  id: number;
  title: string;
  description: string;
  date: Date;
}

interface NoteContextProps {
  notes: Note[];
  addNote: (title: string, description: string) => void;
  editNote: (
    id: number,
    updatedTitle: string,
    updatedDescription: string
  ) => void;
  deleteNote: (id: number) => void;
}

const NotesContext = createContext<NoteContextProps | undefined>(undefined);

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const storedNotes = localStorage.getItem('veonote');
    if (!storedNotes) return [];

    return JSON.parse(storedNotes).map((note: Note) => ({
      ...note,
      date: new Date(note.date),
    }));
  });

  useEffect(() => {
    localStorage.setItem('veonote', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, description: string) => {
    const newNote: Note = {
      id: notes.length ? notes[notes.length - 1].id + 1 : 1,
      title,
      description,
      date: new Date(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const editNote = (
    id: number,
    updatedTitle: string,
    updatedDescription: string
  ) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              title: updatedTitle,
              description: updatedDescription,
            }
          : note
      )
    );
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
