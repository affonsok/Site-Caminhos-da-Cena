# Design System - Caminhos da Cena

Este documento define os tokens de design, espaçamentos, tipografia e regras estruturais para o desenvolvimento consistente das interfaces do projeto. Todos os componentes devem respeitar estas convenções para assegurar coerência visual e usabilidade responsiva (Mobile-First).

## 1. Tipografia (Typography)
O projeto utiliza duas famílias principais de fontes:
- **Serif (Títulos):** Para elegância e impacto artístico (associado ao teatro).
- **Sans-Serif (Corpo):** Para legibilidade e clareza.

### Escalas de Títulos (Headings) e Quebras de Linha
Cuidado com recortes de palavras em telas Mobile. Sempre utilize classes de quebra e redução nativa.
- **H1 (Hero):** `text-4xl sm:text-5xl md:text-7xl lg:text-8xl break-words`
- **H2 (Section Titles):** `text-3xl md:text-5xl break-words`
- **H3 (Card Titles):** `text-xl md:text-2xl`
- **Subtítulos/Kickers (Texo Auxiliar Acima):** `text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold text-black/40`

## 2. Espaçamentos e Grids (Spacing & Layout)
Para garantir uma "margem de respiro" (breathing room) consistente:

### Containers e Margens Laterais
- **Base Container Padding:** Todo `.container` ao longo do site deve contar com margens seguras equivalentes a no mínimo `px-6`. Se sentir que falta respiro em telas muito pequenas, modifique as seções para `px-4 sm:px-6 md:px-8`.

### Sessões (Padding Vertical)
- **Top/Bottom Section Padding:** Utilize `py-16 md:py-24` nas grandes "sections" (`<section>`) para dar fôlego considerável entre um conteúdo e outro.

### Grids (Cartões)
- **Lacunas (Gaps):** Use `gap-6` ou `gap-8` no desktop e `gap-8` no mobile se empilhado verticalmente.

## 3. Cores e Transições (Colors & Effects)
As cores baseiam-se em Tailwind utilitários customizados sobre fundo predominantemente claro clássico (`#fdfcfb` / `#f8f7f5`) alternado com `bg-black`.

- **Texto em imagens claras:** Nunca use hover branco contra branco sem um `overlay bg-black/40` ou mais denso por perto. 
- **Transições:** Padrão `transition-all duration-300` ou `duration-500` para cards e galerias.

## 4. Alinhamentos em Cartões (Card Alignments)
Em componentes baseados em Cards (como os "Espetáculos" ou "Notícias"):
1. Nunca use `p-0` num bloco de textos que deveria ter margem.
2. Divida claramente o `Media wrapper` (imagem) da área de texto. 
3. Caso a imagem não possua padding, a `div` imediatamente após a imagem contendo os textos deve ter padding horizontal (`px-0` se o design for limpo/minimalista, mas deve seguir um "container" que o distancie das bordas da tela). No caso de problemas como "colado à esquerda com gap indevido", o alinhamento sempre deve centralizar ou alinhar textos acompanhados de respiro vertical (`mt-4`).

---
"Consistency over creativity in spacing."
