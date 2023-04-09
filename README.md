<h1>Conversão de imagens para a dissertação</h1>
<h2>Descrição</h2>
<p>Este código é usado para converter imagens para a dissertação de mestrado em [insira o nome do programa aqui]. Ele lê todas as imagens no diretório <code>./pictures</code>, redimensiona-as para 32x32 pixels e salva as imagens convertidas no diretório <code>./converted-pictures</code>.</p>
<h2>Requisitos</h2>
<p>Para usar este código, é necessário ter o Node.js e o pacote Jimp instalados no seu computador.</p>
<h3>Node.js</h3>
<p>O Node.js pode ser baixado no <a href="https://nodejs.org">site oficial</a>. Verifique a versão atual com o comando <code>node -v</code> na linha de comando.</p>
<h3>Jimp</h3>
<p>O pacote Jimp pode ser instalado com o comando <code>npm install jimp</code> na linha de comando. Verifique a versão atual com o comando <code>npm show jimp version</code> na linha de comando.</p>
<h2>Como usar</h2>
<ol>
<li>Clone o repositório ou baixe o código-fonte.</li>
<li>Abra o terminal ou prompt de comando na pasta raiz do projeto.</li>
<li>Execute o comando <code>npm install</code> para instalar as dependências do projeto.</li>
<li>Coloque as imagens que deseja converter na pasta <code>./pictures</code>.</li>
<li>Execute o comando <code>node convert-images.js</code> para iniciar a conversão de imagens.</li>
<li>As imagens redimensionadas serão salvas na pasta <code>./converted-pictures</code>.</li>
</ol>
<h2>Observações</h2>
<p>Certifique-se de que as imagens que deseja converter estão na pasta <code>./pictures</code> antes de executar o script. O script irá procurar apenas por imagens no formato PNG e irá ignorar todos os outros tipos de arquivos. Certifique-se também de que a pasta <code>./converted-pictures</code> existe antes de executar o script. Se a pasta não existir, o script irá criá-la automaticamente.</p>
<h2>Licença</h2>
<p>Este projeto está licenciado sob a licença MIT - veja o arquivo <code>LICENSE</code> para mais detalhes.</p>