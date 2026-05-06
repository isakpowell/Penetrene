import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  let fp = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  if (fs.existsSync(fp) && fs.statSync(fp).isDirectory()) {
    fp = path.join(fp, 'index.html');
  }
  if (!fs.existsSync(fp)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + urlPath);
    return;
  }
  const ext = path.extname(fp).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(fp).pipe(res);
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
