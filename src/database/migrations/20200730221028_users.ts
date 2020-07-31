import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('users', (table)=>{
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
            table.boolean('active').notNullable();
            table.dateTime('created_at').defaultTo(knex.fn.now());
            table.dateTime('updated_at').defaultTo(knex.fn.now())
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable('users') 
}

