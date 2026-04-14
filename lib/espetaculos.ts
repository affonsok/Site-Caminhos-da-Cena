export interface CastMember {
  /** Nome completo — deve coincidir com um integrante em lib/integrantes.ts */
  name: string;
  /** Papel no espetáculo (ex: 'Elenco', 'Direção') */
  role: string;
}

export interface TechInfo {
  label: string;
  value: string;
}

export interface Espetaculo {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: string;
  image: string;
  heroImage: string;
  synopsis: string;
  cast: CastMember[];
  techSheet: TechInfo[];
  support?: string;
  gallery: string[];
}

export const espetaculos: Espetaculo[] = [
  {
    slug: 'alma-sobe-chao-desce',
    title: 'Alma Sobe Chão Desce',
    category: 'Comédia',
    year: '2024',
    status: 'Em Cartaz',
    image: '/images/espetaculos/almasome/20260410_211201.jpg',
    heroImage: '/images/espetaculos/almasome/20260410_211201.jpg',
    synopsis:
      'Uma fábula contemporânea que nasce da cultura popular e atravessa a espiritualidade do povo, o silêncio imposto aos invisíveis e a força da transformação. Um espetáculo sobre dignidade, metamorfose e libertação onde cada corpo em cena carrega memória, resistência e esperança.',
    cast: [
      { name: 'Giordano Zel', role: 'Elenco' },
      { name: 'Lucas Garcia', role: 'Elenco' },
      { name: 'Natali Cruz', role: 'Elenco' },
      { name: 'Pedro Paulo Mota', role: 'Elenco' },
    ],
    techSheet: [
      { label: 'Texto e Direção', value: 'Thiago Thião' },
      { label: 'Direção Musical', value: 'Lucas Henning' },
      { label: 'Preparação Vocal', value: 'Ana Melo' },
      { label: 'Mascareiro', value: 'Bruno Wozniack' },
      { label: 'Dir. de Produção e Figurino', value: 'Hevellin Braga' },
      { label: 'Assistente de Produção', value: 'Letícia Mendes' },
    ],
    support: 'Associação Cultural Caminhos da Cena',
    gallery: [
      '/images/espetaculos/almasome/20260410_211201.jpg',
      '/images/espetaculos/almasome/20260410_212036.jpg',
      '/images/espetaculos/almasome/20260410_212805.jpg',
      '/images/espetaculos/almasome/20260410_213312.jpg',
      '/images/espetaculos/almasome/20260410_214222.jpg',
      '/images/espetaculos/almasome/20260410_214825.jpg',
      '/images/espetaculos/almasome/20260410_215126.jpg',
      '/images/espetaculos/almasome/20260410_215204.jpg',
      '/images/espetaculos/almasome/20260410_215209.jpg',
      '/images/espetaculos/almasome/20260410_215211.jpg',
      '/images/espetaculos/almasome/20260410_215217.jpg',
      '/images/espetaculos/almasome/20260410_215858.jpg',
    ],
  },
  {
    slug: 'fragmentos-de-ontem',
    title: 'Fragmentos de Ontem',
    category: 'Experimental',
    year: '2023',
    status: 'Encerrado',
    image: '/images/espetaculos/play2.jpg',
    heroImage: '/images/espetaculos/play2.jpg',
    synopsis:
      'Fragmentos de Ontem é uma peça experimental que mergulha nas complexidades da memória humana. A partir de relatos autobiográficos do elenco, a obra constrói um mosaico de lembranças fragmentadas que se sobrepõem, contradizem e complementam. Com uma linguagem cênica que mistura teatro físico, projeções e música ao vivo, o espetáculo desafia as convenções narrativas tradicionais para criar uma experiência sensorial única. Premiado no Festival Nacional de Artes Cênicas como melhor produção experimental.',
    cast: [
      { name: 'Maria Silva', role: 'Direção e Dramaturgia' },
      { name: 'Ana Costa', role: 'Atriz' },
      { name: 'Pedro Lima', role: 'Ator' },
      { name: 'Beatriz Ramos', role: 'Atriz' },
      { name: 'Felipe Nunes', role: 'Cenografia' },
    ],
    techSheet: [
      { label: 'Direção', value: 'Maria Silva' },
      { label: 'Dramaturgia', value: 'Maria Silva' },
      { label: 'Duração', value: '75 minutos' },
      { label: 'Classificação', value: '16 anos' },
      { label: 'Cenografia', value: 'Felipe Nunes' },
      { label: 'Trilha Sonora', value: 'Duo Ressonância' },
      { label: 'Projeções', value: 'Studio Visual Lab' },
      { label: 'Produção', value: 'Caminhos da Cena Produções' },
    ],
    gallery: [
      '/images/espetaculos/play2-1.jpg',
      '/images/espetaculos/play2-2.jpg',
      '/images/espetaculos/play2-3.jpg',
    ],
  },
  {
    slug: 'a-danca-das-sombras',
    title: 'A Dança das Sombras',
    category: 'Teatro Físico',
    year: '2023',
    status: 'Turnê',
    image: '/images/espetaculos/play3.jpg',
    heroImage: '/images/espetaculos/play3.jpg',
    synopsis:
      'A Dança das Sombras é uma investigação corporal sobre a dualidade humana. Através de uma coreografia meticulosamente construída, os performers exploram as tensões entre luz e escuridão, presença e ausência, movimento e imobilidade. O espetáculo utiliza técnicas de teatro de sombras combinadas com dança contemporânea para criar imagens de beleza perturbadora. Uma jornada visual e sensorial que convida o espectador a confrontar suas próprias sombras interiores.',
    cast: [
      { name: 'João Santos', role: 'Direção e Coreografia' },
      { name: 'Ana Costa', role: 'Performer' },
      { name: 'Pedro Lima', role: 'Performer' },
      { name: 'Carla Mendes', role: 'Figurino' },
      { name: 'Lucas Oliveira', role: 'Design de Luz' },
    ],
    techSheet: [
      { label: 'Direção', value: 'João Santos' },
      { label: 'Coreografia', value: 'João Santos' },
      { label: 'Duração', value: '60 minutos' },
      { label: 'Classificação', value: '12 anos' },
      { label: 'Figurino', value: 'Carla Mendes' },
      { label: 'Design de Luz', value: 'Lucas Oliveira' },
      { label: 'Preparação Corporal', value: 'Studio Movimento' },
      { label: 'Produção', value: 'Caminhos da Cena Produções' },
    ],
    gallery: [
      '/images/espetaculos/play3-1.jpg',
      '/images/espetaculos/play3-2.jpg',
      '/images/espetaculos/play3-3.jpg',
    ],
  },
  {
    slug: 'vozes-da-cidade',
    title: 'Vozes da Cidade',
    category: 'Musical',
    year: '2022',
    status: 'Encerrado',
    image: '/images/espetaculos/play4.jpg',
    heroImage: '/images/espetaculos/play4.jpg',
    synopsis:
      'Vozes da Cidade é um musical vibrante que celebra a diversidade cultural e a energia pulsante das ruas brasileiras. Com um elenco numeroso e uma trilha sonora original que mistura samba, hip-hop, MPB e música eletrônica, o espetáculo conta as histórias entrecruzadas de personagens que vivem nas margens da cidade grande. Uma obra que dá voz aos invisíveis e transforma o palco em um microcosmo da vida urbana brasileira, com suas contradições, belezas e resistências.',
    cast: [
      { name: 'Maria Silva', role: 'Direção' },
      { name: 'João Santos', role: 'Direção Musical' },
      { name: 'Ana Costa', role: 'Atriz e Cantora' },
      { name: 'Pedro Lima', role: 'Ator e Cantor' },
      { name: 'Carla Mendes', role: 'Figurinista' },
      { name: 'Lucas Oliveira', role: 'Iluminação' },
    ],
    techSheet: [
      { label: 'Direção', value: 'Maria Silva' },
      { label: 'Direção Musical', value: 'João Santos' },
      { label: 'Duração', value: '120 minutos (com intervalo)' },
      { label: 'Classificação', value: 'Livre' },
      { label: 'Figurino', value: 'Carla Mendes' },
      { label: 'Cenografia', value: 'Atelier Espaço Vivo' },
      { label: 'Coreografia', value: 'Movimento Urbano Cia.' },
      { label: 'Produção', value: 'Caminhos da Cena Produções' },
    ],
    gallery: [
      '/images/espetaculos/play4-1.jpg',
      '/images/espetaculos/play4-2.jpg',
      '/images/espetaculos/play4-3.jpg',
    ],
  },
];

export function getEspetaculoBySlug(slug: string): Espetaculo | undefined {
  return espetaculos.find((e) => e.slug === slug);
}

export function getAllSlugs(): string[] {
  return espetaculos.map((e) => e.slug);
}
