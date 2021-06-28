// build your `Project` model here
const db = require('../../data/dbConfig')

function getAllProjects() {
    allProjects = db("projects");

    return allProjects;
};


function add(project) {


    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id).first()
        })
}

module.exports = {
    getAllProjects,
    add
}