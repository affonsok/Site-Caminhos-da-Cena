import { news as newsData } from './data-index';

export interface NewsItem {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  gallery?: string[] | { image: string }[];
}

export const news: NewsItem[] = newsData.map(item => ({
  ...item,
  // Normalizar a galeria se vier como objetos (padrão do CMS)
  gallery: Array.isArray(item.gallery) 
    ? item.gallery.map((g: any) => typeof g === 'string' ? g : g.image)
    : []
}));

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
