const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'public', 'index.html');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/health') {
    res.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
    return res.end(JSON.stringify({ok:true, service:'finflex-suporte'}));
  }

  if (['/','/suporte','/index.html'].includes(url.pathname)) {
    fs.readFile(INDEX, (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
        return res.end('Erro ao carregar a página.');
      }
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8','Cache-Control':'public, max-age=300'});
      res.end(data);
    });
    return;
  }

  res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
  res.end('Página não encontrada.');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`FinFlex Suporte ativo na porta ${PORT}`);
});
