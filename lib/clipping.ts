import { clippings as clippingData } from './data-index';

export interface ClippingItem {
  id: string;
  slug: string;
  source: string;
  title: string;
  date: string;
  summary: string;
  fullContent: string;
  href?: string;
}

export const clippings: ClippingItem[] = clippingData;

export function getClippingBySlug(slug: string): ClippingItem | undefined {
  return clippings.find((c) => c.slug === slug);
}
