# Projeto - VALORIZA

### Descrição - Valorize um amigo (a)! Ele (a) irá ficar feliz.
### Valoriza é uma aplicação com o intuitu de promover o reconhecimento entre companheiros de equipe ou de trabalho.

## Esse projeto foi desenvolvido com as seguintes tecnologiass:

  Node.js / Typescript / Express / JSONWebToken / MySql

### Regras

- Cadastro de usuários
  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo email.

  [ x ] não é permitido cadastrar usuário sem email.

- Cadastro de TAG
  [ x ] Não é permido cadastrar tag sem nome.

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nnme.

  [ x ] Não é permitido o cadastro por usuário que não sejamadministradores.

- Cadastro de elogios
  [ x ] Não é permitido um usuário cadastrar um elogio para si.

  [ x ] Não é permitido cadastrar elogios para usuários invalidos.

  [ x ] O usuário precisa estar cadastrado na aplicação.


### Instalações - Bibliotecas

  npm i ts-node-dev --save-dev

  npm install express
  npm install --save @types/express

  npm install typeorm

  npm add express-async-errors

  npm install jsonwebtoken -D

  npm install bcryptjs
  npm add @types/bcryptjs -D

  npm add class-transformer

  npm add cors
  npm add @types/cors - D
