exports.seed = function (knex) {
    return knex('project_resources').del()
        .then(function () {
            return knex('project_resources').insert([
                { resource_name: "Resource 1" }
            ]);
        });
}