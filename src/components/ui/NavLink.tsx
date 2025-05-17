import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, className = '' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onClick) onClick();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const headerOffset = 80; // Adjust based on your header height
      
      window.scrollTo({
        top: offsetTop - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`text-white hover:text-secondary-light transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;