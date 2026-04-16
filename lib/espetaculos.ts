import { espetaculos as espetaculosData } from './data-index';

export interface CastMember {
  name: string;
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

export const espetaculos: Espetaculo[] = espetaculosData.map(item => ({
  ...item,
  // Normalizar a galeria se vier como objetos (padrão do CMS)
  gallery: Array.isArray(item.gallery) 
    ? item.gallery.map((g: any) => typeof g === 'string' ? g : g.image)
    : []
})) as Espetaculo[];

export function getEspetaculoBySlug(slug: string): Espetaculo | undefined {
  return espetaculos.find((e) => e.slug === slug);
}

export function getAllSlugs(): string[] {
  return espetaculos.map((e) => e.slug);
}
