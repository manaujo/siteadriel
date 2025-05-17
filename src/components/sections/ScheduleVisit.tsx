import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Calendar, Phone } from 'lucide-react';

const ScheduleVisit: React.FC = () => {
  const phoneNumber = '5562982210129';
  const message = encodeURIComponent('Olá, gostaria de agendar uma visita técnica com a Ar Brisas.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="container mx-auto px-4">
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/4489766/pexels-photo-4489766.jpeg)'
          }}
        ></div>
        
        <div className="relative z-10">
          <SectionTitle 
            title="Agende uma Visita" 
            subtitle="Entre em contato para um orçamento sem compromisso"
            light={true}
          />
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                Solicite uma visita técnica
              </h3>
              <p className="text-gray-600">
                Nossa equipe está pronta para avaliar suas necessidades e oferecer a melhor solução em climatização para seu ambiente.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full max-w-md flex items-center justify-center bg-primary-light/10 p-4 rounded-lg">
                <Phone className="text-primary mr-3" size={24} />
                <span className="text-primary-dark font-medium">(62) 98221-0129</span>
              </div>
              
              <Button 
                href={whatsappUrl}
                variant="primary" 
                size="lg"
                icon={<Calendar size={20} />}
                className="w-full max-w-md"
              >
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisit;