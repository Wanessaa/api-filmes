const express = require('express');
const app = express();
app.use(express.json());

let filmes = [
  { id: 1, titulo: 'Interestelar', ano: 2014, genero: 'Ficção Científica' },
  { id: 2, titulo: 'Parasita',     ano: 2019, genero: 'Drama' },
];

// GET /api/filmes
app.get('/api/filmes', (req, res) => {
  res.json(filmes);
});

app.listen(8080, () => {
  console.log('API rodando em http://localhost:8080');
});