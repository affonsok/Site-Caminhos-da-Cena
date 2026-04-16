import fs from 'fs';
import path from 'path';

const contentDirs = {
  noticias: 'content/noticias',
  clipping: 'content/clipping',
  integrantes: 'content/integrantes',
  espetaculos: 'content/espetaculos',
  galeria: 'content/galeria',
  patrocinadores: 'content/patrocinadores',
};

function getFilesData(dir) {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) return [];
  
  return fs.readdirSync(fullPath)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      let content = fs.readFileSync(path.join(fullPath, file), 'utf8');
      // Remove BOM if present
      if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
      }
      return JSON.parse(content);
    });
}

const news = getFilesData(contentDirs.noticias).sort((a, b) => (b.id || "").localeCompare(a.id || ""));
const clippings = getFilesData(contentDirs.clipping).sort((a, b) => (b.id || "").localeCompare(a.id || ""));
const integrantes = getFilesData(contentDirs.integrantes).sort((a, b) => (a.name || "").localeCompare(b.name || ""));
const espetaculos = getFilesData(contentDirs.espetaculos).sort((a, b) => (b.year || "").localeCompare(a.year || ""));
const galeria = getFilesData(contentDirs.galeria).sort((a, b) => (b.year || "").localeCompare(a.year || ""));
const patrocinadores = getFilesData(contentDirs.patrocinadores).sort((a, b) => (a.name || "").localeCompare(b.name || ""));

const output = `
// Este arquivo é gerado automaticamente. Não edite manualmente.
export const news = ${JSON.stringify(news, null, 2)};
export const clippings = ${JSON.stringify(clippings, null, 2)};
export const integrantes = ${JSON.stringify(integrantes, null, 2)};
export const espetaculos = ${JSON.stringify(espetaculos, null, 2)};
export const galeria = ${JSON.stringify(galeria, null, 2)};
export const patrocinadores = ${JSON.stringify(patrocinadores, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'lib/data-index.ts'), output);
console.log('CMS data synced successfully!');
