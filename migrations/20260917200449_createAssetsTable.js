/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('github_repos', (table) => {
        table.string('name').notNullable().primary().unique();
        table.string('description')
        table.string('created_at')
        table.string('updated_at')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('github_repos');
};
