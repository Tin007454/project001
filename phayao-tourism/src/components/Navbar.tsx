import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">Phayao Tourism</div>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:underline">Home</Link>
                    <Link to="/contact" className="text-white hover:underline">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;