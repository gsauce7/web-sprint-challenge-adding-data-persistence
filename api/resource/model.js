// build your `Resource` model here
const db = require("../../data/dbConfig")


function getAllResources() {
    return db("resources")
        .orderBy("resource_name", "desc")
}

function findById(id) {
    return db("resources")
        .where("resource_id", id)
        .then(data => {
            return data[0]
        })
}


function add(resource) {
    return db("resources")
        .insert(resource)
        .then(ids => {
            return findById(ids[0])
        })
}



module.exports = {

    getAllResources,
    findById,
    add
}