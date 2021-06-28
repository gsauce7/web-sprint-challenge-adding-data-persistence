exports.seed = function (knex) {
    return knex('resources').del()
        .then(function () {
            return knex('resources').insert([
                { resource_name: "Resource 1" }
            ]);
        });
}