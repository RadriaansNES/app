import React from 'react';
import MenuNavbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <MenuNavbar />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;