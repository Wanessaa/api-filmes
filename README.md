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


## Infraestrutura com Vagrant

### Pré-requisitos

- [Vagrant](https://www.vagrantup.com/downloads) instalado
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) instalado

### Box utilizada
- `hashicorp/bionic64` (Ubuntu 18.04)


1. Inicie as VMs:
```bash
   vagrant up
```

2. Aguarde a inicialização (pode demorar alguns minutos na primeira vez)

### Descrição das VMs

| VM  | IP             | Memória | Função                        |
|-----|----------------|---------|-------------------------------|
| VM1 | 192.168.56.10  | 1024 MB | Cliente para testar a API     |
| VM2 | 192.168.56.11  | 512 MB  | Servidor que executa a API    |

### Iniciar a API na VM2

1. Acesse a VM2:
```bash
   vagrant ssh vm2
```

2. Entre na pasta da aplicação e inicie:
```bash
   cd /vagrant_data
   node index.js &
```

### Testar a rota GET pela VM1

1. Acesse a VM1:
```bash
   vagrant ssh vm1
```

2. Faça a requisição para a API rodando na VM2:
```bash
   curl http://192.168.56.11:8080/api/filmes
```

3. Deve retornar:
```json
   [
     {"id":1,"titulo":"Interestelar","ano":2014,"genero":"Ficção Científica"},
     {"id":2,"titulo":"Parasita","ano":2019,"genero":"Drama"}
   ]
```

### Parar as VMs

```bash
vagrant halt
```

### Destruir as VMs

```bash
vagrant destroy
```