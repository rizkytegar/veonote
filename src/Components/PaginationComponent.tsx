import React from 'react';
import { useTheme } from './ThemeProvider';

const PaginationComponent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-2 justify-end">
      <button
        onClick={() => {
          alert('Prev');
        }}
        className="px-7 py-2 rounded-md"
        style={{
          backgroundColor: theme === 'light' ? '#E5E7EB' : '#374151',
          color: theme === 'light' ? 'black' : 'white',
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          alert('Next');
        }}
        className="px-7 py-2 rounded-md"
        style={{
          backgroundColor: theme === 'light' ? '#E5E7EB' : '#374151',
          color: theme === 'light' ? 'black' : 'white',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;