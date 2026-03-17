# SafePost

Uma aplicação web moderna e responsiva focada em simular um ambiente social seguro. A principal funcionalidade do SafePost é a sua **moderação de conteúdo impulsionada por IA**, que avalia as postagens dos usuários (tanto texto quanto imagens) em busca de conteúdos nocivos antes de sua publicação.

## Funcionalidades

- **Moderação de Conteúdo:** Intercepta as postagens e analisa rigorosamente por discurso de ódio, violência, conteúdo sexual e automutilação.
- **Tags Automáticas em Imagens:** Gera automaticamente hashtags relevantes baseadas no conteúdo visual de imagens aprovadas.
- **UI/UX Interativa:** Utiliza modais flutuantes e notificações toast dinâmicas para manter o usuário informado sobre o status da moderação sem perder o estado e contexto do formulário.
- **Mobile-First & Tema Escuro:** Construído focado em componentes altamente responsivos e em um visual moderno com Dark Mode nativo.
- **Feed Simulado (Mock):** Simula um feed em tempo real com gerenciamento de estado local, sem a necessidade de banco de dados para testes de front-end.

## Tecnologias Utilizadas

- **Biblioteca / Framework:** React
- **Linguagem:** TypeScript
- **Build Tool:** Vite
- **Estilização:** styled-components
- **Cliente HTTP:** Axios
- **Notificações:** goey-toast

## Pré-requisitos

- Node.js (v18 ou superior recomendado)
- npm, yarn, ou pnpm

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone <URL-do-repositorio>
   cd safepost-frontend
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione a URL da sua API de moderação (Azure / Backend):

   ```env
   VITE_API_URL=http://localhost:3333
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   yarn dev
   ```
   A aplicação estará disponível em `http://localhost:5173`.

## Estrutura do Projeto

- `/src/components` - Componentes reutilizáveis de interface (Header, PostForm, Feed, ModerationResult)
- `/src/services` - Integração com a API e lógica de requisições
- `/src/types` - Tipagens e definições do TypeScript
- `/src/mocks` - Dados simulados para iniciar estado visual do feed
