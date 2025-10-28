
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const navItems = [
  { path: '/home', icon: 'home', label: 'Início' },
  { path: '/search', icon: 'search', label: 'Buscar' },
  { path: '/library', icon: 'library_music', label: 'Sua Biblioteca' },
];

const BottomNav: React.FC = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center w-full transition-colors ${
      isActive
        ? 'text-primary'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-white/10 dark:border-black/20">
      <div className="flex justify-around h-16">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={getLinkClass}>
            {({ isActive }) => (
              <>
                <Icon name={item.icon} filled={isActive} />
                <span className={`text-xs mt-1 ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
