import React from 'react';

export const Layout = ({children}) => (
  <>
    <div className="sidebar">
      <h2>This is the Sidebar</h2>
    </div>
    {children}
  </>
)

export default Layout