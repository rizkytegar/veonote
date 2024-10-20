import React from 'react';
import { useTheme } from './ThemeProvider';
import IconEditNote from '../utility/IconEditNote';
import IconDeleteNote from '../utility/IconDeleteNote';
import DumyNotesList from '../__data__/DumyNotesList';

const NoteCardComponent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {DumyNotesList.map((note) => (
        <div
          key={note.id}
          className={`${
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
          } border shadow-md rounded-2xl p-5 hover:shadow-2xl flex flex-col`}
        >
          <div className="mb-5 flex-grow">
            <h1 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {note.title}
            </h1>
            <p className={`font-base text-sm ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}>
              {note.description}
            </p>
          </div>
          <div className="flex justify-between">
            <div className={`text-sm mt-auto mb-auto ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
              {note.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="flex gap-2">
              <button className="px-5 py-2 rounded-md" style={{ backgroundColor: theme === 'light' ? '#E5E7EB' : '#374151' }}>
                <IconEditNote color={theme === 'light' ? 'black' : 'white'} size={20} />
              </button>
              <button className="px-5 py-2 rounded-md" style={{ backgroundColor: theme === 'light' ? '#E5E7EB' : '#374151' }}>
                <IconDeleteNote color={theme === 'light' ? 'black' : 'white'} size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCardComponent;