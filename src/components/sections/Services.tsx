import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { WrenchIcon, PenTool as Tool, Settings, FileText, Lightbulb } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary group">
      <div className="inline-block p-3 bg-accent rounded-lg mb-4 group-hover:bg-secondary transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <WrenchIcon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Instalação de Ar-condicionado",
      description: "Instalação profissional de sistemas residenciais e comerciais, com eficiência e durabilidade."
    },
    {
      icon: <Tool size={28} className="text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Manutenção Corretiva",
      description: "Diagnóstico e reparo técnico de falhas no sistema de climatização."
    },
    {
      icon: <Settings size={28} className="text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Manutenção Preventiva",
      description: "Limpeza e verificação periódica para aumentar a vida útil dos aparelhos."
    },
    {
      icon: <FileText size={28} className="text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Elaboração de Estudos e Projetos",
      description: "Planejamento técnico personalizado de sistemas de climatização."
    },
    {
      icon: <Lightbulb size={28} className="text-primary group-hover:text-white transition-colors duration-300" />,
      title: "Consultoria e Assessoria",
      description: "Orientação especializada sobre os melhores equipamentos e soluções."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <SectionTitle 
        title="Nossos Serviços" 
        subtitle="Conheça as soluções que oferecemos para seu conforto térmico"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;