import React from 'react';
import { Wind } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#inicio" className="flex items-center space-x-2 text-white">
      <div className="bg-secondary rounded-full p-1.5">
        <Wind size={24} className="text-white" />
      </div>
      <div>
        <h1 className="font-bold text-xl leading-tight">AR BRISAS</h1>
        <p className="text-xs opacity-80 leading-tight">Ar Condicionado</p>
      </div>
    </a>
  );
};

export default Logo;