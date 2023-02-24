import React, { FC } from 'react';

interface NavItemProps {
  onHandleClick: (componentName:string) => void
  isActive: boolean,
  children: any
}

const NavItem: FC<NavItemProps> = ({ onHandleClick, isActive, children }) => {
  const handleNavClick = () => {
    console.log(children);
    onHandleClick(children)
  }
  const classes = isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  return (
      <button onClick={handleNavClick} className={classes} aria-current={isActive && "page"}>{children}</button>
  );
};

export default NavItem;
