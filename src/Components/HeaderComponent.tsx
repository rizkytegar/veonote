import React from 'react';
import IconAddNote from '../utility/IconAddNote';
import { useTheme } from './ThemeProvider';

const HeaderComponent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-2 justify-between">
      <div></div>
      <div>
        <button
          onClick={() => {
            alert('Add Note');
          }}
          className={`flex inline-flex px-7 py-2 rounded-md ${
            theme === 'light'
              ? 'bg-gray-200 text-black'
              : 'bg-gray-800 text-white'
          }`}
        >
          <IconAddNote color={theme === 'light' ? 'black' : 'white'} size={24} /> Add Note
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;