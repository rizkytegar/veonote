import React from 'react';
import IconAddNote from '../utility/IconAddNote';
import { useTheme } from './ThemeProvider';

const HeaderComponent: React.FC = () => {
  const { theme } = useTheme();

  const openAddModal = () => {
    const dialog = document.getElementById('note_modal') as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <div className="flex justify-end">
      <button
        className={`btn border-none px-7 ${
          theme === 'light'
            ? 'bg-gray-200 text-black hover:bg-gray-300'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
        onClick={openAddModal}
      >
        <IconAddNote color={theme === 'light' ? 'black' : 'white'} size={24} />{' '}
        Add Note
      </button>
    </div>
  );
};

export default HeaderComponent;
