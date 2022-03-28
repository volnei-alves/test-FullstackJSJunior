
## Descrição

Api criada para cadastramento de usúarios no banco de dados com email e senha.


## Referência

 - [Nodejs ](https://nodejs.org/en/)
 - [Expessjs](https://expressjs.com/pt-br/)
 - [Knex ](https://knexjs.org/)
 - [Docker](https://docs.docker.com/) 
 - [Docker-compose](https://docs.docker.com/compose/)
 - [PostgreSQL](https://www.postgresql.org/)


## Instalação

Clone projeto git

```bash
  git Clone https://github.com/volnei-alves/test-FullstackJSJunior.git
  
  cd test-FullstackJSJunior
  
  docker-compose -up -d
  
  knex migrate:make init
  
  knex migrate:latest
  
```



## Documentação da API

Docker pgAdmin
##### http://localhost:15432/browser/
#
Url da aplicação local
##### http://localhost:3001/api/v1/docs/
#
HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ |  ------ |
| GET | /api/v1/users |  | Listar todos usuarios
| GET | /api/v1/users/user_id | | Listar único usuário
| POST | /api/v1/users | JSON (email,senha) | Criar único usuário
| PUT | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário
| DELETE | /api/v1/users | | Deletar todos usuarios
| DELETE | /api/v1/users/user_id | | Deletar único usuário



## Autores

- [@volneialves](https://github.com/volnei-alves)


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, porém gosto mais de back-end

