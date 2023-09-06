import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;