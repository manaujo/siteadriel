import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const ContactItem: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode }> = ({ 
  icon, 
  title, 
  content 
}) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 bg-primary p-3 rounded-full text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-primary-dark mb-1">{title}</h4>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const phoneNumber = '5562982210129';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <div className="container mx-auto px-4">
      <SectionTitle 
        title="Contato" 
        subtitle="Entre em contato conosco pelos canais abaixo"
      />
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <ContactItem 
            icon={<Phone size={24} />}
            title="Telefone"
            content={
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                (62) 98221-0129
              </a>
            }
          />
          
          <ContactItem 
            icon={<MapPin size={24} />}
            title="Endereço"
            content={
              <address className="not-italic">
                Rua Guadalajara Qd 01 Lt 13<br />
                Jardim Novo Mundo<br />
                Goiânia, GO
              </address>
            }
          />
          
          <ContactItem 
            icon={<Instagram size={24} />}
            title="Instagram"
            content={
              <a 
                href="https://instagram.com/araujo.condicionado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                @araujo.condicionado
              </a>
            }
          />
          
          <ContactItem 
            icon={<Facebook size={24} />}
            title="Facebook"
            content={
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Ar Brisas no Facebook
              </a>
            }
          />
        </div>
        
        <div className="h-80 md:h-full min-h-72">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.841010479961!2d-49.22699699999999!3d-16.6879937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12e80c1f30d%3A0x3f6ecc2f20f178e1!2sRua%20Guadalajara%20-%20Jardim%20Novo%20Mundo%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1720292153972!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa para Ar Brisas"
          ></iframe>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ar Brisas - Ar Condicionado. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Contact;