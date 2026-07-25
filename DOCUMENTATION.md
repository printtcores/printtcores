# 📘 Documentação da Aplicação — Printt Cores

> **Gráfica & Estúdio de Impressão Premium em Salvador**  
> Aplicação Web de alta performance, estruturada como Single Page Application (SPA), focada em alta taxa de conversão (CRO), SEO otimizado, heurísticas de UX/UI modernas e micro-interações dinâmicas.

---

## 📐 Visão Geral da Arquitetura

A aplicação foi desenvolvida seguindo os mais altos padrões de design e engenharia web modernos:

- **Arquitetura One-Page**: Toda a experiência do usuário se concentra em uma única página fluida, com navegação por *scroll suave* e sincronização bidirecional do hash de rota na URL (`#hero`, `#servicos`, `#produtos`, `#portfolio`, `#processo`, `#contato`).
- **Arquitetura Estática & Ultra Rápida**: Construído com **Astro 5**, gerando HTML estático pré-renderizado no build com JavaScript mínimo enviado ao cliente.
- **Design System Gráfico (CMYK)**: Estilização em SCSS modular estruturada na metodologia *Abstracts / Base / Components / Layout*, destacando a identidade visual de gráfica de alta precisão.

---

## 🛠️ Tech Stack & Bibliotecas

| Categoria | Tecnologia | Versão / Descrição |
| :--- | :--- | :--- |
| **Core Framework** | [Astro](https://astro.build/) | `v5.1.0` — Framework Web focado em conteúdo e performance |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | `v5.7.0` — Tipagem estática e segurança de código |
| **Estilização** | [Sass / SCSS](https://sass-lang.com/) | `v1.83.0` — Mixins, variáveis e tokens modulares |
| **Animações de Scroll** | [GSAP](https://gsap.com/) + ScrollTrigger | `v3.12.5` — Animações de entrada e revelação por scroll |
| **Micro-interações** | [Anime.js](https://animejs.com/) | `v4.5.0` — Partículas CMYK, pulso e numerações |
| **Tipografia** | Geist Sans & Geist Mono | Fontes modernas com `font-display: swap` |

---

## 📁 Estrutura de Diretórios

```text
Printt Cores/
├── public/                    # Assets estáticos (favicons, .htaccess)
├── src/
│   ├── assets/                # Imagens e marcas da empresa
│   ├── components/            # Componentes Astro modulares
│   │   ├── Header.astro       # Barra de navegação glassmorphism
│   │   ├── Hero.astro         # Seção principal com partículas CMYK e destaque "Salvador"
│   │   ├── Servicos.astro     # Cards de serviços em destaque com efeito tilt
│   │   ├── Produtos.astro     # Galeria Bento Grid da linha de produtos
│   │   ├── Diferenciais.astro # Cards de diferenciais com animação de números
│   │   ├── Portfolio.astro    # Showcase de projetos recentes
│   │   ├── Processo.astro     # Passos do processo de atendimento
│   │   ├── CtaSection.astro   # Chamada para ação otimizada para conversão
│   │   ├── Contato.astro      # Cards de contato rápido e localização
│   │   ├── Footer.astro       # Rodapé com mapa dark e assinatura Criade
│   │   └── WhatsAppFloat.astro # Botão flutuante fixo do WhatsApp
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal com SEO, OpenGraph e microdados Schema.org
│   ├── pages/
│   │   └── index.astro        # Página principal reunindo os componentes
│   ├── styles/                # Sistema de estilos SCSS modular
│   │   ├── abstracts/         # Variáveis, mixins e funções
│   │   ├── base/              # Reset e estilos globais
│   │   ├── components/        # Estilos reutilizáveis (cards, botões)
│   │   ├── layout/            # Containers e grid
│   │   └── main.scss          # Ponto de entrada de estilos
│   └── utils/                 # Scripts auxiliares e utilitários
│       ├── animeAnimations.ts # Animações de partículas e pulso via Anime.js v4
│       └── gsap.ts            # Configuração do GSAP e algoritmo splitTextFallback
├── dist/                      # Arquivos finais compilados
├── index.html                 # Ponto de entrada estático na raiz
├── package.json               # Configurações do Node.js e dependências
├── astro.config.mjs           # Configuração do Astro
└── tsconfig.json              # Configuração do TypeScript
```

---

## 🎨 Design System & Estética Visual

### 🎨 Paleta de Cores (Universo CMYK)
- **Ciano (`$cmyk-cyan`)**: `#00a3e0`
- **Magenta (`$cmyk-magenta`)**: `#e5007d`
- **Amarelo (`$cmyk-yellow`)**: `#ffd100`
- **Preto Gráfico (`$color-dark`)**: `#07152d`
- **Fundo Claro (`$color-bg`)**: `#ffffff`

### ✨ Efeitos e Animações Destacadas
1. **Partículas Flutuantes CMYK (`js-cmyk-particles`)**: Partículas coloridas geradas e animadas dinamicamente no Hero usando `animejs` v4 (`animate`, `stagger`, `random`).
2. **Gradiente de Texto no Destaque "Salvador"**: Técnica especial de recorte de fundo (`-webkit-background-clip: text`) configurada letra por letra (`.char`) para evitar invisibilidade em navegadores WebKit.
3. **Magnetic Hover nos Botões**: Efeito de atração magnética do cursor nos botões CTA via GSAP.
4. **Header Glassmorphism**: Fundo translúcido com `backdrop-filter: blur(12px)` e atualização automática do link ativo na URL conforme o usuário navega.

---

## ⚙️ Comandos e Fluxo de Desenvolvimento

### 🚀 Rodar o Projeto Localmente
```bash
npm run dev
# ou
npm run start
```
O servidor de desenvolvimento iniciará em `http://localhost:4321`.

### 🏗️ Compilar para Produção
```bash
npm run build
```
Executa a verificação estática de tipos (`astro check`) e gera a build otimizada na pasta `dist/`.

### 🔍 Verificar Diagnósticos de Código
```bash
npx astro check
```

---

## 🌐 SEO & Acessibilidade (Heurísticas UX)

- **Microdados JSON-LD (Schema.org)**: Tipagem `PrintShop` configurada com endereço físico no Apipema Center, Ondina, Salvador - BA e geolocalização exata.
- **OpenGraph & Meta Tags**: Tags otimizadas para compartilhamento social (Facebook, WhatsApp, LinkedIn).
- **Semântica HTML5**: Uso rigoroso de elementos semânticos (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`-`<h3>`).
- **Navegação Acessível**: Todos os botões e links possuem atributos `aria-label` descritivos e foco legível.

---

## 📄 Créditos & Direitos

- **Cliente**: Printt Cores — Gráfica & Estúdio de Impressão
- **Desenvolvimento & Design**: Criade Comunicação e Design
- **Licença**: Todos os direitos reservados © 2026 Printt Cores.
