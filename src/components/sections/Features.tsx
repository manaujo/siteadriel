import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Clock, UserCheck, Shield, PenTool as Tool } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0 p-3 bg-secondary rounded-full text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-primary-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "Atendimento Ágil",
      description: "Respostas rápidas e soluções eficientes para suas necessidades."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Profissionais Qualificados",
      description: "Equipe treinada e certificada para garantir o melhor serviço."
    },
    {
      icon: <Tool size={24} />,
      title: "Suporte Técnico Personalizado",
      description: "Atendimento com foco nas necessidades específicas do cliente."
    },
    {
      icon: <Shield size={24} />,
      title: "Garantia nos Serviços",
      description: "Garantia real em todos os serviços prestados e peças utilizadas."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <SectionTitle 
        title="Por Que Nos Escolher" 
        subtitle="Nossos diferenciais garantem a excelência em cada serviço prestado"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;