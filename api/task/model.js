// build your `Task` model here
const db = require("../../data/dbConfig")

function getAllTasks() {
    return db("tasks as t")
        .select("t.*", "p.project_name", "p.project_description")
        .leftJoin("projects as p", "t.project_id", "p.project_id")
}

function findById(id) {
    return db("tasks as t")
        .select("t.*", "p.project_name", "p.project_description")
        .where("task_id", id)
        .leftJoin("projects as p", "t.project_id", "p.project_id")
        .then(allTasks => {
            return allTasks[0]
        })
}

function add(task) {
    return db("tasks")
        .insert(task)
        .then(ids => {
            return findById(ids[0])
        })
}

module.exports = {

    getAllTasks,
    findById,
    add
}