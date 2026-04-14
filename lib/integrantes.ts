/**
 * FONTE ÚNICA DE VERDADE — Integrantes do Coletivo
 *
 * Para adicionar ou atualizar um integrante:
 *   1. Coloque a foto em /public/images/integrantes/<nome-sem-acento>.jpg
 *   2. Adicione ou edite o objeto abaixo com nome exatamente igual ao usado
 *      no campo `cast` dos espetáculos.
 *
 * O site resolve automaticamente foto, role e Instagram pelo nome.
 */

export interface Integrante {
  /** Nome completo — deve coincidir exatamente com o nome no cast do espetáculo */
  name: string;
  /** Função principal no coletivo */
  role: string;
  /** Caminho da foto em /public */
  image: string;
  /** URL do Instagram (opcional) */
  instagram?: string;
  /** Bio curta (opcional) */
  bio?: string;
}

/** Imagem de fallback — exibida quando não há foto cadastrada */
export const INTEGRANTE_FALLBACK_IMAGE = '/images/integrantes/placeholder.jpg';

export const integrantes: Integrante[] = [
  // ── Elenco ──────────────────────────────────────────────────
  {
    name: 'Giordano Zel',
    role: 'Ator',
    image: '/images/integrantes/giordano-zel.jpg',
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Lucas Garcia',
    role: 'Ator',
    image: '/images/integrantes/lucas-garcia.jpg',
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Natali Cruz',
    role: 'Atriz',
    image: '/images/integrantes/natali-cruz.jpg',
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Pedro Paulo Mota',
    role: 'Ator',
    image: '/images/integrantes/pedro-paulo-mota.jpg',
    instagram: 'https://instagram.com/',
  },

  // ── Direção & Produção ───────────────────────────────────────
  {
    name: 'Thiago Thião',
    role: 'Diretor & Dramaturgo',
    image: '/images/integrantes/thiago-thiao.jpg',
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Hevellin Braga',
    role: 'Diretora de Produção & Figurino',
    image: '/images/integrantes/hevellin-braga.jpg',
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Letícia Mendes',
    role: 'Assistente de Produção',
    image: '/images/integrantes/leticia-mendes.jpg',
    instagram: 'https://instagram.com/',
  },

  // ── Equipe Artística ─────────────────────────────────────────
  {
    name: 'Lucas Henning',
    role: 'Diretor Musical',
    image: INTEGRANTE_FALLBACK_IMAGE,
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Ana Melo',
    role: 'Preparação Vocal',
    image: INTEGRANTE_FALLBACK_IMAGE,
    instagram: 'https://instagram.com/',
  },
  {
    name: 'Bruno Wozniack',
    role: 'Mascareiro',
    image: INTEGRANTE_FALLBACK_IMAGE,
    instagram: 'https://instagram.com/',
  },
];

/** Retorna um integrante pelo nome (busca exata, case-insensitive) */
export function getIntegranteByName(name: string): Integrante | undefined {
  return integrantes.find(
    (i) => i.name.toLowerCase() === name.toLowerCase()
  );
}
