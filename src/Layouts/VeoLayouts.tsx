// Layouts/VeoLayouts.tsx
import React, { ReactNode } from 'react';
import NavbarComponent from '../Components/NavbarComponent';

interface VeoLayoutsProps {
    children: ReactNode;
}

const VeoLayouts: React.FC<VeoLayoutsProps> = ({ children }) => {
    return (
        <div>
            <NavbarComponent />
            {children}
        </div>
    );
};

export default VeoLayouts;
