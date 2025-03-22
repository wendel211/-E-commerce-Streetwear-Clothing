import React from 'react';
import { ShoppingBag, Truck, Shield, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Desde 2020, a Streetwear tem sido referência em moda urbana no Brasil, 
              trazendo as últimas tendências do streetwear mundial para o público brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Qualidade Premium</h3>
              <p className="text-gray-400">
                Selecionamos apenas os melhores materiais e acabamentos para nossos produtos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Entrega Rápida</h3>
              <p className="text-gray-400">
                Enviamos para todo o Brasil com agilidade e segurança.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Compra Segura</h3>
              <p className="text-gray-400">
                Garantimos a segurança de todas as suas transações.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Comunidade</h3>
              <p className="text-gray-400">
                Construímos uma comunidade apaixonada por streetwear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Ana Silva',
                role: 'CEO & Fundadora',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
              },
              {
                name: 'Pedro Santos',
                role: 'Diretor Criativo',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
              },
              {
                name: 'Julia Costa',
                role: 'Gerente de Produto',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Queremos democratizar o acesso à moda streetwear de qualidade no Brasil, 
              inspirando pessoas a expressarem sua individualidade através do estilo urbano 
              e construindo uma comunidade apaixonada por moda e cultura de rua.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};