// build your `Resource` model here
const db = require("../../data/dbConfig.js")

function getAllResources() {

    const allResources = db("resources")
    return allResources;
};

function add(resource) {


    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return db('resources').where('resource_id', resource_id).first()
        })
}

module.exports = {

    getAllResources,
    add
}