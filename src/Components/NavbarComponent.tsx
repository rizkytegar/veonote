import React from 'react';
const NavbarComponent: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white py-4 px-7 md:px-12 flex justify-between">
            <div className="mt-auto mb-auto">
                <div className="text-2xl">VeoNote</div>
            </div>
            <div className="flex bg-gray-700 px-4 py-2 rounded-full mt-auto mb-auto">
                <div className="text-2xl">R</div>
            </div>
        </nav>
    );
};

export default NavbarComponent;