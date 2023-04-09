const fs = require('fs');
const Jimp = require('jimp');

const picturesDir = './pictures';
const outputDir = './converted-pictures'; // nova pasta de saída

// Cria a nova pasta de saída, se ela não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Lê todos os arquivos da pasta pictures
fs.readdir(picturesDir, async (err, files) => {
  if (err) throw err;

  for (const file of files) {
    const filePath = `${picturesDir}/${file}`;

    // Verifica se o arquivo é um arquivo PNG
    if (file.endsWith('.png')) {
      try {
        // Lê a imagem com o Jimp
        const image = await Jimp.read(filePath);

        // Redimensiona a imagem para 32x32
        image.resize(32, 32);

        // Salva a imagem com o mesmo nome e extensão na nova pasta de saída
        const outputFilePath = `${outputDir}/${file}`;
        await image.writeAsync(outputFilePath);
        console.log(`Imagem ${file} convertida com sucesso.`);
      } catch (err) {
        console.error(`Erro ao converter a imagem ${file}: ${err}`);
      }
    }
  }
});