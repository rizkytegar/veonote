import React from 'react';
import { useTheme } from './ThemeProvider';

const NavbarComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`py-4 px-7 md:px-12 flex justify-between ${
      theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
    }`}>
      <div className="mt-auto mb-auto">
        <div className="text-2xl">VeoNote</div>
      </div>
      <div className="flex items-center">
        <button
          className={`px-4 py-2 rounded-full mr-4 ${
            theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-700 text-white'
          }`}
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>
        <div className={`flex px-4 py-2 rounded-full mt-auto mb-auto ${
          theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-700 text-white'
        }`}>
          <div className="text-2xl">R</div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;