import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const UPLOADS_DIR = './public/images/uploads';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Diretório ${dir} não encontrado. Pulando otimização.`);
    return;
  }

  const files = await readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const fstat = await stat(filePath);

    if (fstat.isDirectory()) {
      await optimizeImages(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        if (metadata.width > MAX_WIDTH) {
          console.log(`Otimizando: ${file} (${metadata.width}px -> ${MAX_WIDTH}px)`);
          
          // Criar um buffer temporário para evitar erros de leitura/escrita simultânea
          const buffer = await image
            .resize(MAX_WIDTH, null, { withoutEnlargement: true })
            .jpeg({ quality: QUALITY, mozjpeg: true, force: false })
            .png({ quality: QUALITY, palette: true, force: false })
            .webp({ quality: QUALITY, force: false })
            .toBuffer();

          await fs.promises.writeFile(filePath, buffer);
          console.log(`✅ ${file} otimizado com sucesso.`);
        } else {
          // Mesmo que seja pequena, vamos aplicar uma compressão básica para garantir peso baixo
          const buffer = await image
            .jpeg({ quality: QUALITY, mozjpeg: true, force: false })
            .png({ quality: QUALITY, palette: true, force: false })
            .webp({ quality: QUALITY, force: false })
            .toBuffer();
          
          await fs.promises.writeFile(filePath, buffer);
        }
      } catch (err) {
        console.error(`❌ Erro ao processar ${file}:`, err.message);
      }
    }
  }
}

console.log('🚀 Iniciando otimização de imagens...');
optimizeImages(UPLOADS_DIR)
  .then(() => console.log('✨ Otimização concluída!'))
  .catch(err => console.error('💀 Erro fatal no script de otimização:', err));
