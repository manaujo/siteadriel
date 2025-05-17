import React from "react";
import Button from "../ui/Button";
import { Sparkles, MessageCircle } from "lucide-react";
import img from "../../assets/WhatsApp Image 2025-05-16 at 19.09.32.jpeg";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-primary">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(" + img + ")",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Ar Brisas
            <span className="block text-secondary">Ar Condicionado</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Sinta o conforto do ar puro. Tecnologia e bem-estar ao seu alcance.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              href="#servicos"
              variant="primary"
              size="lg"
              icon={<Sparkles size={20} />}
            >
              Nossos Serviços
            </Button>
            <Button
              href="#contato"
              variant="outline"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
