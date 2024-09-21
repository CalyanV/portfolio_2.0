import React from 'react';
import Navbar from '../layout/Navbar'; // Adjust the path if necessary
import './Header.css'; // Import the new CSS file

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      {/* Other header content */}
    </div>
  );
};

export default Header;

