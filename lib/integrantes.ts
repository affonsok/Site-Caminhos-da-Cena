import { integrantes as integrantesData } from './data-index';

export interface Integrante {
  name: string;
  roles: string[];
  category: string;
  image: string;
  instagram?: string;
  bio?: string;
}

export const INTEGRANTE_FALLBACK_IMAGE = '/images/integrantes/placeholder.jpg';

export const integrantes: Integrante[] = integrantesData as Integrante[];

/** Retorna um integrante pelo nome (busca exata, case-insensitive) */
export function getIntegranteByName(name: string): Integrante | undefined {
  return integrantes.find(
    (i) => i.name.toLowerCase() === name.toLowerCase()
  );
}
