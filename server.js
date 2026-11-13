const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

function sendHtml(res, file) {
  fs.readFile(path.join(PUBLIC, file), (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
      return res.end('Erro ao carregar a página.');
    }
    res.writeHead(200, {
      'Content-Type':'text/html; charset=utf-8',
      'Cache-Control':'public, max-age=300'
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/health') {
    res.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
    return res.end(JSON.stringify({ok:true, service:'finflex-suporte'}));
  }

  if (url.pathname === '/' || url.pathname === '/suporte' || url.pathname === '/index.html') {
    return sendHtml(res, 'index.html');
  }

  if (url.pathname === '/privacidade' || url.pathname === '/privacidade/' || url.pathname === '/privacy') {
    return sendHtml(res, 'privacidade.html');
  }

  res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
  res.end('Página não encontrada.');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`FinFlex Suporte ativo na porta ${PORT}`);
});
