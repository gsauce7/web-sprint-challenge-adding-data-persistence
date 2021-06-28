// build your `Task` model here
const db = require("../../data/dbConfig.js")

function getAllTasks() {

    const allTasks = db("tasks as t");
    return allTasks;
};

function add(task) {


    return db('tasks').insert(task)
        .then(([task_id]) => {
            return db('tasks').where('task_id', task_id).first()
        })
}

module.exports = {

    getAllTasks,
    add
}