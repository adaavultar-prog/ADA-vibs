
import React from 'react';
import BottomNav from './BottomNav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-16">
      {children}
      <BottomNav />
    </div>
  );
};

export default Layout;
