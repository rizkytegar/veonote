import React from 'react';
import AddNoteModal from '../Components/AddNoteModal';
import HeaderComponent from '../Components/HeaderComponent';
import NoteCardComponent from '../Components/NoteCardComponent';
import PaginationComponent from '../Components/PaginationComponent';
import { useTheme } from '../Components/ThemeProvider';

const NotePage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col px-4 md:px-8 lg:px-12 py-4 gap-4 min-h-screen ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
      }`}
    >
      {/* Header stays at the top */}
      <div>
        <HeaderComponent />
      </div>

      {/* Note Cards should grow to fill the available space */}
      <div>
        <NoteCardComponent />
      </div>

      {/* Pagination stays at the bottom */}
      <div className="flex-grow overflow-auto pb-5">
        <PaginationComponent />
      </div>

      {/* Modals */}
      <AddNoteModal />
    </div>
  );
};

export default NotePage;
