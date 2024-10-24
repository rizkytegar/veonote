import { useState, useEffect } from "react";

type Note = {
  id: number;
  title: string;
  description: string;
  date: Date;
};

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const storedNotes = localStorage.getItem("veonote");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("veonote", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, description: string) => {
    const newNote: Note = {
      id: notes.length ? notes[notes.length - 1].id + 1 : 1,
      title,
      description,
      date: new Date(),
    };
    setNotes([...notes, newNote]);
  };

  const editNote = (
    id: number,
    updatedTitle: string,
    updatedDescription: string
  ) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: updatedTitle, description: updatedDescription }
          : note
      )
    );
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return { notes, addNote, editNote, deleteNote };
};

export default useNotes;
