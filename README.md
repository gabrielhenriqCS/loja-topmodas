# Projeto Loja Top Modas

## Estrutura de pastas
loja-topmodas/
├── prisma/
│   └── schema.prisma                # Definição dos modelos do banco (Category, Product, Image, etc.)
│
├── public/                          # Arquivos estáticos servidos na raiz (logos, ícones, banners)
│   ├── logo-topmodas.svg
│   └── placeholder.svg
│
├── src/
│   ├── app/                         # App Router do Next.js
│   │   ├── (public)/                # GRUPO PÚBLICO: Compartilha o Layout da loja (Header + Footer)
│   │   │   ├── layout.tsx           # Layout público com <Header />, <Footer /> e <FloatingWhatsApp />
│   │   │   ├── page.tsx             # Página inicial (Home / Vitrine / Hero)
│   │   │   ├── colecoes/
│   │   │   │   ├── page.tsx         # Catálogo completo com filtros e busca
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx     # Página de departamento específico (ex: /colecoes/feminino)
│   │   │   └── contatos/
│   │   │       └── page.tsx         # Página Fale Conosco
│   │   │
│   │   ├── (admin)/                 # GRUPO ADMIN: Protegido por autenticação (Layout próprio)
│   │   │   ├── layout.tsx           # Layout restrito com barra superior do admin e verificação de sessão
│   │   │   └── dashboard/
│   │   │       ├── page.tsx         # Visão geral de métricas, produtos e conversões
│   │   │       └── produtos/
│   │   │           ├── page.tsx     # Tabela de gerenciamento de produtos (listar/ativar/excluir)
│   │   │           └── novo/
│   │   │               └── page.tsx # Formulário de cadastro de novo produto
│   │   │
│   │   ├── admin/
│   │   │   └── login/
│   │   │       └── page.tsx         # Tela de Login do Administrador
│   │   │
│   │   ├── api/                     # API ROUTES: Endpoints HTTP para seu front-end consumir
│   │   │   ├── products/
│   │   │   │   ├── route.ts         # GET (listar produtos) e POST (cadastrar produto com Prisma)
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts     # GET (detalhes), PUT/PATCH (editar) e DELETE (excluir)
│   │   │   ├── categories/
│   │   │   │   └── route.ts         # GET (listar categorias) e POST (criar categoria)
│   │   │   └── events/
│   │   │       └── route.ts         # POST (registrar clique do WhatsApp ou visualização)
│   │   │
│   │   ├── layout.tsx               # Root Layout global (fontes, metadados globais, HTML base)
│   │   └── globals.css              # Estilos globais Tailwind CSS
│   │
│   ├── components/                  # Componentes reutilizáveis compartilhados
│   │   ├── ui/                      # Componentes base de interface (shadcn/ui: button, card, badge)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
│   │   └── GoogleMapFrame.tsx       # Componente do mapa do rodapé
│   │
│   ├── lib/                         # Configurações de bibliotecas e clientes de conexão
│   │   ├── prisma.ts                # Instância Singleton do Prisma Client
│   │   ├── utils.ts                 # Utilitários gerais (ex: função cn() para Tailwind)
│   │   ├── supabase/                # Clientes do Supabase (para Auth e Storage de fotos)
│   │   │   ├── client.ts            # Cliente para componentes do navegador
│   │   │   ├── server.ts            # Cliente para Server Components / Server Actions
│   │   │   └── middleware.ts        # Atualização de cookies e sessão
│   │   └── validations/             # Schemas Zod para validar dados do formulário e das APIs
│   │       └── product.ts           # Validação dos dados do produto antes de salvar no Prisma
│   │
│   ├── types/                       # Tipagens TypeScript personalizadas
│   │   └── index.ts                 # Tipos compartilhados da loja
│   │
│   └── middleware.ts                # Middleware na raiz de src/ que protege rotas e renova sessões
│
├── .env                             # Variáveis de ambiente secretas (DATABASE_URL, SUPABASE_KEYS)
├── .env.example                     # Modelo demonstrativo de variáveis
├── next.config.ts                   # Configuração do Next.js (domínios de imagens permitidos)
├── package.json                     # Dependências e scripts do projeto
└── tsconfig.json                    # Configurações do TypeScript
