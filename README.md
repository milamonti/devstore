# DevStore 🛍️

E-commerce moderno para produtos de tecnologia, desenvolvido com Next.js 15 e as mais recentes tecnologias do ecossistema React.

## 📸 Preview

Uma loja virtual elegante com foco em produtos para desenvolvedores, apresentando uma interface moderna e responsiva com animações suaves e uma experiência de usuário otimizada.

## 🚀 Tecnologias

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript
- **[Cypress](https://www.cypress.io/)** - Testes E2E

## ✨ Funcionalidades

- 🏠 **Página inicial** com produtos em destaque
- 🔍 **Busca de produtos** em tempo real
- 🛒 **Carrinho de compras** com Context API
- 📦 **Páginas de produto** com detalhes completos
- 🖼️ **Open Graph images** dinâmicas para compartilhamento
- ⚡ **Loading states** com Skeleton screens
- 🎨 **Animações** suaves em hover e transições
- 📱 **Design responsivo** e moderno
- 🧪 **Testes E2E** com Cypress

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/milamonti/devstore.git
cd devstore
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local na raiz do projeto
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
APP_URL="http://localhost:3000"
```

4. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no navegador

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start

# Linting
pnpm lint

# Testes E2E (Cypress)
npx cypress open
```

## 🗂️ Estrutura do Projeto

```
devstore/
├── src/
│   ├── app/
│   │   ├── (store)/          # Rotas da loja
│   │   │   ├── (home)/       # Página inicial
│   │   │   ├── product/      # Páginas de produtos
│   │   │   └── search/       # Busca de produtos
│   │   ├── api/              # API Routes
│   │   │   └── products/     # Endpoints de produtos
│   │   ├── globals.css       # Estilos globais
│   │   └── layout.tsx        # Layout raiz
│   ├── components/           # Componentes React
│   │   ├── add-to-cart-button.tsx
│   │   ├── cart-widget.tsx
│   │   ├── header.tsx
│   │   ├── search-form.tsx
│   │   └── skeleton.tsx
│   ├── contexts/             # Context API
│   │   └── cart-context.tsx
│   ├── data/                 # Tipos e funções de dados
│   │   ├── api.ts
│   │   └── types/
│   └── env.ts                # Validação de variáveis de ambiente
├── cypress/                  # Testes E2E
│   └── e2e/
├── public/                   # Arquivos estáticos
└── package.json
```

## 🛠️ Funcionalidades Técnicas

### Otimização de Performance
- **ISR (Incremental Static Regeneration)** - Revalidação de páginas a cada hora
- **Image Optimization** - Otimização automática de imagens com Next.js Image
- **Code Splitting** - Carregamento otimizado de componentes

### Context API
- Gerenciamento de estado do carrinho de compras
- Adicionar produtos ao carrinho
- Controle de quantidade de itens

### API Routes
- Endpoints RESTful para produtos
- Busca de produtos por slug
- Filtro de produtos em destaque
- Busca por query

### Validação
- Validação de variáveis de ambiente com Zod
- Validação de parâmetros de rotas
- Type-safety em todo o projeto

## 🧪 Testes

O projeto inclui testes E2E com Cypress:

```bash
# Executar testes no modo interativo
npx cypress open

# Executar testes no modo headless
npx cypress run
```

**Cenários de teste incluídos:**
- ✅ Adicionar produto ao carrinho
- ✅ Evitar duplicação de itens no carrinho
- ✅ Buscar produtos
- ✅ Navegação entre páginas

## 🎨 Customização

### Tailwind CSS
O projeto utiliza Tailwind CSS 4 com configuração via PostCSS. Para customizar o tema, edite o arquivo `postcss.config.mjs`.

### Fontes
Utiliza as fontes Geist Sans e Geist Mono do Google Fonts, configuradas em `src/app/layout.tsx`.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
