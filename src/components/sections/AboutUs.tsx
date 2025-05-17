import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { Shield, Award, Clock, Wind } from "lucide-react";
import img from "../../assets/project2.png";
import img2 from "../../assets/ImgBlog4_2.png";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionTitle
        title="Quem Somos"
        subtitle="Conheça a Ar Brisas e nossa missão"
      />

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            A Ar Brisas é especialista em soluções completas de climatização.
            Oferecemos projetos personalizados, instalação profissional e
            manutenções com qualidade, garantindo conforto e confiança para
            residências e empresas.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={img}
              alt="Imagem de destaque"
              loading="lazy"
              className="rounded-xl shadow-xl max-h-48 object-cover animate-float"
            />

            <img
              src={img2}
              alt="Imagem de destaque"
              loading="lazy"
              className="rounded-xl shadow-xl max-h-48 object-cover animate-float"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ValueCard
              icon={<Shield className="text-secondary" size={36} />}
              title="Confiança"
              description="Serviços garantidos e com total transparência"
            />
            <ValueCard
              icon={<Award className="text-secondary" size={36} />}
              title="Qualidade"
              description="Excelência em cada instalação e manutenção"
            />
            <ValueCard
              icon={<Clock className="text-secondary" size={36} />}
              title="Pontualidade"
              description="Respeitamos seu tempo e seus prazos"
            />
            <ValueCard
              icon={<Wind className="text-secondary" size={36} />}
              title="Inovação"
              description="Soluções modernas e eficientes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutUs;
