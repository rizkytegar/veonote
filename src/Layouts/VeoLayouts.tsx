// Layouts/VeoLayouts.tsx
import React, { ReactNode } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import FilterComponent from '../Components/FilterComponent';
import ListNoteComponent from '../Components/ListNoteComponent';
import PaginationComponent from '../Components/PaginationComponent';
import SearchButtonComponent from '../Components/SearchButtonComponent';

interface VeoLayoutsProps {
    children: ReactNode; 
}

const VeoLayouts: React.FC<VeoLayoutsProps> = ({ children }) => {
    return (
     <>
      <NavbarComponent />
      <FilterComponent />
      <ListNoteComponent />
      <PaginationComponent />
      <SearchButtonComponent /> 
      {children}
     </>
    );
};

export default VeoLayouts;
