# API - Curvibot
Utilizado para que o curvibot se comunique com o banco de dados e também a integração com o gerador de currículos.

Desenvolvido utilizando AdonisJS.

Para rodar a aplicação 

Ter o Node.js instalado
Para verificar a versão.
```bash
node -v
```

Ter o gerenciador de pacotes do Node.js que é o NPM.
Para verificar a versão
```bash
npm -v
```


Para baixar o adonis 

```bash
npm install -g  @adonisjs/cli
```



# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
