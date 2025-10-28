
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  // FIX: Add onClick property to allow the icon to be clickable.
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, className = '', filled = false, onClick }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}}
    // FIX: Pass the onClick handler to the span element.
    onClick={onClick}
  >
    {name}
  </span>
);

export default Icon;
