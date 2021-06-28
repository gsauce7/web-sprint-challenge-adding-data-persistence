// build your `Project` model here

const db = require("../../data/dbConfig")

function getAllProjects() {
    return db("projects")
}

function findById(id) {
    return db("projects")
        .where("project_id", id)
        .then(data => {
            return data[0]
        })
}

function add(project) {
    return db("projects")
        .insert(project)
        .then(ids => {
            return findById(ids[0])
        })
}

module.exports = {
    getAllProjects,
    findById,
    add
}