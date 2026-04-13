# Padrão de Engenharia: Acessibilidade (A11y), SEO e Performance

Este documento estabelece as diretrizes fundamentais para o desenvolvimento no projeto **Site Caminhos da Cena**. Toda e qualquer alteração de interface ou criação de novos componentes deve seguir estritamente essas regras.

## 1. Estrutura e Semântica HTML
O objetivo é que o código não só funcione visualmente, mas que faça "sentido" para ferramentas de SEO (Google) e Leitores de Tela (Acessibilidade). A regra de ouro é: **Apenas use `<div>` quando nenhuma outra tag semântica se aplicar.**

### As Regras:
- **`main`**: Todo o conteúdo principal roteado deve estar envolto em um `<main>`.
- **`section`**: Divisões da página que possuem um contexto claro (ex: "Contato", "Sobre", "Galeria").
    - **Obrigatório**: Toda `<section>` *deve* ter um título (`h2` a `h6`).
    - Caso a seção não tenha título visual (ex: Patrocinadores com apenas logos), adicione um título oculto: `<h2 id="lgo-title" className="sr-only">Logos</h2>` e use `<section aria-labelledby="lgo-title">`.
- **`article`**: Use para itens independentes listados em grids (ex: um Post do Blog, um Membro da Equipe, um Card de Espetáculo).
- **`nav`**: Para grupos de links.
- **Listas `<ul>`, `<ol>`, `<dl>`**: Elementos repetitivos sem grande narrativa (ex: Ficha Técnica) devem usar tags de lista.

## 2. Estrutura Lógica de Cabeçalhos (Headings)
Os cabeçalhos constroem a "árvore de conteúdo" (Outline) da página. Pular níveis ou usar a tag errada apenas por causa de tamanho de fonte prejudica severamente o SEO.

### As Regras:
- **`<h1/>`**: Uso único! Só pode existir UM por página (Normalmente no Hero Section da página Home ou Título principal nas páginas internas).
- **`<h2/>`**: Identificam os grandes blocos (Sections) dessa página.
- **`<h3/>`**: Identificam itens filhas de um H2 (Ex: Título de um Card dentro de uma seção).
- **Nunca pule níveis**: Do `h2` vá para `h3`. Não "pule" do `h2` para o `h4` apenas porque a fonte do `h4` já está estilizada num tamanho menor.
- **Números e Stats não são Cabeçalhos**: Seções de impacto com números gigantes (ex: "15 anos") não devem usar `h2` ou `h4` só por que a fonte é grande. Use `<div className="text-4xl font-bold">15</div>`.

## 3. Imagens
- Todas as tags `<Image />` devem possuir a propriedade `alt=""`.
- Se a imagem for meramente decorativa (ex: uma mancha de background), passe explícitamente `alt=""` vazio, para que os leitores de tela a ignorem. Mapeou `alt="decorative image"` o leitor vai ler "decorative image" pra pessoa cega desnecessariamente.
- Para imagens em "Above the Fold" (Hero section), use obrigatoriamente a propriedade `priority` no componente Image do Next.js.

## 4. Animações e Performance (Libraries)
Temos que balançar o visual elegante do estúdio com a velocidade de carregamento.

- **Framer Motion (`motion/react`)**: Restrito para grandes blocos (entradas de página, delays de aparição no grid `whileInView`, efeitos de paralaxe complexos).
- **Tailwind CSS (`transition`)**: Para estados simples: hovers em botões, links que mudam de cor, botões de ação e zoom minúsculo em imagens (`group-hover:scale-105`), **UTILIZE EXCLUSIVAMENTE CLASSES DO TAILWIND**. Não use estado ou hooks de animação para hovers básicos.
- **Tamanho dos Bundles**: Cuidado dobrado com a introdução de novas "libs" visuais. Pense antes de dar `npm install`.
