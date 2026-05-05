const request = require('supertest');
const { app, filmes } = require('./app');

beforeEach(() => {
  filmes.length = 0;
  filmes.push(
    { id: 1, titulo: 'Interestelar', ano: 2014, genero: 'Ficção Científica' },
    { id: 2, titulo: 'Parasita', ano: 2019, genero: 'Drama' }
  );
});

describe('GET /api/filmes', () => {
  test('deve retornar lista de filmes', async () => {
    const res = await request(app).get('/api/filmes');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });
});

describe('POST /api/filmes', () => {
  test('deve criar um novo filme', async () => {
    const res = await request(app)
      .post('/api/filmes')
      .send({ titulo: 'Matrix', ano: 1999, genero: 'Ficção Científica' });
    expect(res.status).toBe(201);
    expect(res.body.titulo).toBe('Matrix');
  });

  test('deve retornar 400 se faltar campos', async () => {
    const res = await request(app)
      .post('/api/filmes')
      .send({ titulo: 'Matrix' });
    expect(res.status).toBe(400);
  });
});

describe('DELETE /api/filmes/:id', () => {
  test('deve remover um filme existente e retornar 204', async () => {
    const res = await request(app).delete('/api/filmes/1');
    expect(res.status).toBe(204);
  });

  test('deve retornar 404 se filme não existir', async () => {
    const res = await request(app).delete('/api/filmes/999');
    expect(res.status).toBe(404);
  });
});