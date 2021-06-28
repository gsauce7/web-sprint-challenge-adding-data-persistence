exports.seed = function (knex) {
    return knex('tasks').del()
        .then(function () {
            return knex('tasks').insert([
                { project_id: 1, task_name: "Task 1" }
            ]);
        });
}