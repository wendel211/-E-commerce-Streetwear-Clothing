# Documentação do Projeto de E-commerce Streetwear
## Visão Geral do Projeto
Uma plataforma de e-commerce moderna construída com React, TypeScript e Tailwind CSS, focada em produtos de moda streetwear.

## Tech Stack
- Frontend Framework: React com TypeScript
- Estilo: Tailwind CSS
- Roteamento: React Router DOM
- Ferramenta de construção: Vite
- Gerenciamento de estado: React Context API
- Ícones: Lucide React
- Integração de mapas: Google Maps API
## Principais recursos
### 1. Sistema de autenticação
- Implementado em `AuthContext.tsx`
- Recursos:
- Login/logout do usuário
- Registro
- Gerenciamento de estado de autenticação
- Rotas protegidas
### 2. Carrinho de compras
- Gerenciado por `CartContext.tsx`
- Recursos:
- Adicionar/remover itens
- Atualizar quantidades
- Calcular preço total
- Estado do carrinho persistente
### 3. Componentes principais Cabeçalho ( `Header.tsx` )
- Navegação responsiva
- Indicador de carrinho de compras
- Menu otimizado para dispositivos móveis Exibição do produto ( `ProductCard.tsx` )
- Exibição da imagem do produto
- Informações sobre preço
- Etiquetagem de categoria Página de contato ( `Contact.tsx` )
- Formulário de contato
- Integração com o Google Maps
- Exibição de informações comerciais
### 4. Estilo
- Configuração de tema personalizado em `tailwind.config.js`
- Esquema de cores:
- Primário: Preto (#000000)
- Secundário: Cinza escuro (#1a1a1a)
- Destaque: Rosa (#ff0066)
### 5. Estrutura do projeto
```plaintext
src/
├── components/ # Componentes de IU reutilizáveis
├── context/ # Provedores de contexto React
├── pages/ # Componentes da rota principal
├── types/ # Definições TypeScript
└── utils/ # Funções auxiliares e dados
```

## Configuração de desenvolvimento
1. Instalar dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Crie para produção:
```bash
npm run build
```

Este projeto segue as melhores práticas modernas do React, incluindo o uso de componentes funcionais, ganchos e contexto para gerenciamento de estado. A arquitetura é modular e sustentável, com separação clara de preocupações entre componentes, contextos e utilitários.
