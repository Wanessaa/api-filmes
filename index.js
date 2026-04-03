// API REST de Filmes
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

// POST /api/filmes
app.post('/api/filmes', (req, res) => {
  const { titulo, ano, genero } = req.body;

  if (!titulo || !ano || !genero) {
    return res.status(400).json({ erro: 'titulo, ano e genero são obrigatórios' });
  }

  const novoFilme = { id: filmes.length + 1, titulo, ano, genero };
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});


app.listen(8080, () => {
  console.log('API rodando em http://localhost:8080');
});