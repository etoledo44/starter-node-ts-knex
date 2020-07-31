# starter-node-ts-knex
Setup to init a development with Node.js, TypeScript and Knex

This is a simple quick start to init a devolopment with setup already configured.

# O que vem configurado
- TypeScript
- Knex
> A configuração é básica, porém, já ajuda a dar uma agilizada no processo de criação. Possui algumas variáveis de ambiente já configurada.

O Knex é um query builer muito potente para realizar comandos envolvendo banco de dados. O banco configurado pelo Knex é o MySQL. Com o CLI é possivel acelerar alguns processos, como criar migrations e seeds.

## Instruções
1. Baixe ou clone os código.
2. Execute o comando abaixo para baixar os pacotes do node_modules:
```
npm install //recomendo npm 
# ou 
yarn add
```
3. Veja o arquivo `.env.example`, a partir dele crie um novo arquivo `.env`, com suas configurações particular.

4. Comando para iniciar o servidor:
```
npm start
```
___
## Comandos CLI Knex
- Criar uma migração:
```
npx knex migrate:make migration_name -x ts 
```
- Executar migração:
```
npx knex migrate:latest
```
- Desfazer ultima migração:
```
npx knex migrate:rollback
```

- Criar uma seed:
```
npx knex seed:make seed_name
```

- Executar uma seed:
```
npx knex seed:run
```

> Para mais comando você pode checar a documentação do [Knex](http://knexjs.org/#Migrations-CLI).

Também recomendo um material muito bom para fazer consulta de query para o Knex, [DevHints](https://devhints.io/knex).



