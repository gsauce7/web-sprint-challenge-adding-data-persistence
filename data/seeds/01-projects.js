exports.seed = function (knex) {
    return knex('projects').del()
        .then(function () {
            return knex('projects').insert([
                { project_name: "Project 1" }
            ]);
        });
}