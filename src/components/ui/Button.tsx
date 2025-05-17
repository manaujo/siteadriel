import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md';
  
  const variantClasses = {
    primary: 'bg-secondary hover:bg-secondary-dark text-white',
    secondary: 'bg-primary hover:bg-primary-dark text-white',
    outline: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-6',
    lg: 'text-lg py-3 px-8',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const handleClick = (e: React.MouseEvent) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
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
    }
    
    if (onClick) onClick();
  };
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={handleClick}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;