# API REST de Filmes

[![Docker Image](https://badgen.net/docker/pulls/wanessasantana/api-filmes?icon=docker&label=pulls)](https://hub.docker.com/r/wanessasantana/api-filmes)
[![Docker Size](https://badgen.net/docker/size/wanessasantana/api-filmes?icon=docker&label=size)](https://hub.docker.com/r/wanessasantana/api-filmes)


## Como executar

1. Instale as dependências:
```bash
   npm install
```
2. Inicie o servidor:
```bash
   node index.js
```
3. Acesse: `http://localhost:8080`

## Rotas disponíveis

| Método | Rota               | Descrição                        |
|--------|--------------------|----------------------------------|
| GET    | /api/filmes        | Lista todos os filmes            |
| POST   | /api/filmes        | Cadastra um novo filme           |
| DELETE | /api/filmes/:id    | Remove um filme pelo ID          |

### Exemplo de body para POST

```json
{
  "titulo": "Matrix",
  "ano": 1999,
  "genero": "Ficção Científica"
}
```

## Workflow

Este projeto usa o **GitHub Flow**. A branch `main` é sempre estável e protegida.
Novas funcionalidades são criadas em branches separadas e integradas via Pull Request.

## Testes

```bash
npm test
```

Cobertura mínima exigida: 90%

## Lint

```bash
npm run lint
```


