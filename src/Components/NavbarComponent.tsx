import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;