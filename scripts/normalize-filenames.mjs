import fs from 'fs';
import path from 'path';

const UPLOADS_DIR = './public/images/uploads';
const CONTENT_DIR = './content';

function normalizeName(name) {
  // Pega apenas o nome sem a extensão
  const ext = path.extname(name);
  const baseName = path.basename(name, ext);

  // Se não for imagem de whatsapp, não mexe (ou podemos expandir depois)
  if (!baseName.toLowerCase().includes('whatsapp')) return name;

  // Extrai apenas os números
  const numbers = baseName.replace(/\D/g, '');
  
  // Se não sobrou nenhum número, mantém o original para não sumir com o nome
  if (!numbers) return name;

  return numbers + ext.toLowerCase();
}

async function walk(dir, callback) {
  const files = await fs.promises.readdir(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stats = await fs.promises.stat(filepath);
    if (stats.isDirectory()) {
      await walk(filepath, callback);
    } else {
      await callback(filepath);
    }
  }
}

async function normalizeFiles() {
  if (!fs.existsSync(UPLOADS_DIR)) return;

  const files = await fs.promises.readdir(UPLOADS_DIR);
  const renameMap = new Map();

  for (const file of files) {
    const oldPath = path.join(UPLOADS_DIR, file);
    if ((await fs.promises.stat(oldPath)).isDirectory()) continue;

    const newName = normalizeName(file);
    if (newName !== file) {
      let finalName = newName;
      let counter = 1;
      
      // Evitar duplicatas (ex: fotos no mesmo segundo)
      const ext = path.extname(newName);
      const base = path.basename(newName, ext);
      
      while (fs.existsSync(path.join(UPLOADS_DIR, finalName))) {
        finalName = `${base}-${counter}${ext}`;
        counter++;
      }

      const newPath = path.join(UPLOADS_DIR, finalName);
      console.log(`Normalizando: ${file} -> ${finalName}`);
      
      await fs.promises.rename(oldPath, newPath);
      renameMap.set(file, finalName);
    }
  }

  // Se algo foi renomeado, precisamos atualizar os JSONs
  if (renameMap.size > 0) {
    console.log('Atualizando referências nos arquivos de conteúdo...');
    await walk(CONTENT_DIR, async (filepath) => {
      if (path.extname(filepath) === '.json') {
        let content = await fs.promises.readFile(filepath, 'utf8');
        let changed = false;

        for (const [oldName, newName] of renameMap.entries()) {
          // Procuramos pelo nome do arquivo no JSON
          if (content.includes(oldName)) {
            content = content.split(oldName).join(newName);
            changed = true;
          }
        }

        if (changed) {
          await fs.promises.writeFile(filepath, content, 'utf8');
          console.log(`✅ Referências atualizadas em: ${path.basename(filepath)}`);
        }
      }
    });
  }
}

console.log('🧹 Normalizando nomes de arquivos...');
normalizeFiles()
  .then(() => console.log('✨ Nomes normalizados!'))
  .catch(err => console.error('💀 Erro ao normalizar:', err));
