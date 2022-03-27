
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
```



## Documentação da API

Docker pgAdmin
##### http://localhost:15432/browser/
#
Url da aplicação local
##### http://localhost:3001/api/v1/docs/
#

```http
  //Lista Usúarios
  GET /api/v1/users

  //Lista Usúario  
  GET /api//v1/users/${id}

  //Cadastra novo usúario
  POST /api/v1/users

  //Atualiza Usúario
  PUT /api/v1/users/${id}

  //Exclui usúario  
  DELETE /api/v1/users/${id}
  
  //Exclui todos os usúarios  
  DELETE /api/v1/users
```



## Autores

- [@volneialves](https://github.com/volnei-alves)


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, porém gosto mais de back-end

