# Pestana Dev — Portfólio

[English](README.md) · **Português**

Portfólio pessoal de **Vitor Pestana**, desenvolvedor Back-end & Full Stack. Além de apresentar o meu trabalho, o site é uma aplicação real: tem autenticação, gerenciamento de perfil, integrações com APIs públicas e um Scrum Board em tempo real, tudo consumindo a minha própria API em .NET (**PestanaDevApi**).

🌐 [www.pestanadev.com.br](https://www.pestanadev.com.br)

## Funcionalidades

- **Home** — apresentação, valores, habilidades e projetos, com animações e fundos interativos.
- **Autenticação** — cadastro com código de confirmação por e-mail, login com credenciais ou com Google, GitHub e LinkedIn, recuperação de senha e Google reCAPTCHA v3.
- **Perfil** — visualização e edição dos dados, troca de senha e exclusão de conta.
- **NASA APOD** — a Imagem Astronômica do Dia da NASA e as imagens da semana.
- **Exposição de Arte** — busca no acervo do Metropolitan Museum of Art.
- **Scrum Board** — quadro Kanban em tempo real, compartilhado com outros usuários (veja [abaixo](#scrum-board)).
- **Internacionalização** — português e inglês em todas as páginas.

## Tecnologias

| Área | Tecnologias |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Estilo | Tailwind CSS 4, shadcn, Motion |
| Dados | TanStack Query, Axios, React Hook Form |
| Autenticação | NextAuth (JWT), Google reCAPTCHA v3 |
| Tempo real | SignalR (`@microsoft/signalr`) |
| Componentes | Cult UI Kanban Board, Swiper, fundos do React Bits |
| i18n | next-intl |
| Testes | Vitest |

## Arquitetura

```
Componente → hook (TanStack Query) → Service → RequestDtoBuilder → /api/proxy (Next.js) → PestanaDevApi
```

- O navegador nunca chama a API diretamente: toda requisição passa pela rota **`/api/proxy`**, que adiciona no servidor o JWT do usuário (guardado pelo NextAuth).
- Os **Services** (`services/`) descrevem cada chamada à API, e o **`RequestDtoBuilder`** centraliza caminhos, path params e query params.
- Os **hooks** (`hooks/api/`) envolvem os services com o TanStack Query, com tratamento global de erros e de carregamento.
- Os erros da API começam com um código de 4 caracteres (ex.: `7E1A`), traduzido em `i18n/translations`.
- O JWT da API nunca chega ao navegador. A única conexão direta é o **SignalR**: a cada conexão, a rota **`/api/hub-token`** pede no servidor um token de vida curta (10 minutos) que só o hub aceita, porque ele tem audience própria e é rejeitado por todos os outros endpoints.

## Como rodar

### Requisitos

- Node.js 20+
- [PestanaDevApi](https://github.com/vitorpestana94) rodando (padrão: `http://localhost:5024`)

### Instalação

```bash
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

| Variável | Descrição |
|---|---|
| `API_URL` | URL da PestanaDevApi (também usada pelo navegador para conectar ao SignalR) |
| `NEXTAUTH_URL` | URL deste site (ex.: `http://localhost:3000`) |
| `NEXTAUTH_SECRET` | Segredo usado para assinar o JWT do NextAuth |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Credenciais OAuth do Google |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | Credenciais OAuth do GitHub |
| `LINKEDIN_CLIENT_ID` / `LINKEDIN_CLIENT_SECRET` | Credenciais OAuth do LinkedIn |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Chave do site do Google reCAPTCHA v3 |

### Executando

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Executa o build de produção |
| `npm run lint` | ESLint |
| `npm test` | Testes unitários (Vitest) |

## Scrum Board

Um quadro Kanban em que os membros organizam tarefas juntos, atualizado em tempo real. Somente usuários autenticados têm acesso.

### Rotas

| Rota | Descrição |
|---|---|
| `/scrum-board` | Abre o último quadro exibido (guardado no cookie do NextAuth) ou o seu primeiro quadro |
| `/scrum-board/create` | Criação de quadro, exibida quando você não tem nenhum |
| `/scrum-board/{id}` | O quadro em si |

### O que é possível fazer

- Criar, renomear, descrever e excluir quadros (dono).
- Criar, editar, mover (arrastar e soltar) e excluir tarefas, com tipo, responsável, descrição e **prazo**. Tarefas atrasadas ficam destacadas.
- Renomear as 5 colunas do quadro.
- Convidar membros por e-mail, remover membros ou sair de um quadro.

### Tempo real

O quadro se conecta ao hub SignalR `/hubs/board` e se atualiza sozinho quando outro membro cria, edita, move ou exclui tarefas, ou altera colunas, membros ou o quadro. Mudanças de prazo exibem uma notificação. Depois de uma reconexão, o quadro é recarregado para continuar sincronizado.

> O SignalR conecta do navegador direto na API, então **a PestanaDevApi precisa permitir a origem deste site na sua política de CORS**.

### Convites

Quando o dono convida um e-mail que ainda não está cadastrado, a API envia um convite para:

```
/{locale}/authentication/sign-up?redirectTo=scrum-board&boardId={boardId}
```

Depois de se cadastrar (ou fazer login), o usuário é redirecionado para o quadro, e o convite é aceito automaticamente.

## Testes

```bash
npm test
```

Os testes unitários com Vitest cobrem a lógica do quadro: datas de prazo (UTC), conversão dos dados da API para o Kanban, atualização do cache em tempo real, montagem das requisições e helpers de strings e erros.

## Estrutura do projeto

```
app/              Rotas (App Router) e rotas de API (proxy, hub-token, NextAuth)
components/       Componentes de interface, agrupados por tipo (buttons, drawers, sections, pages…)
components/ui/    Componentes de terceiros instalados com shadcn (Cult UI Kanban Board)
hooks/            Hooks compartilhados e hooks do TanStack Query (hooks/api)
services/         Chamadas à API e o RequestDtoBuilder
models/           DTOs, requests, responses e enums
utils/            Helpers de autenticação, quadro, datas, erros e proxy
i18n/             Configuração do next-intl e traduções (pt / en)
tests/            Testes unitários
```

## Autor

**Vitor Luiz Pestana Pereira** — Desenvolvedor Back-end & Full Stack

[LinkedIn](https://www.linkedin.com/in/vitor-pestana-9ab88b200/) · [GitHub](https://github.com/vitorpestana94) · vitorpestanadev@gmail.com
