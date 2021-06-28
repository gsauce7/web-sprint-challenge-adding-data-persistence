// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
const Resource = require('./model')
const Task = require('./model')
// const { checkId, validateXYZ } = require('./middleware')

// [GET] /api/resources
router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

// [POST] /api/resources
router.post('/', (req, res, next) => {
    const newResource = req.body

    Resource.add(newResource)
        .then(result => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

// [GET] /api/projects
router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

// [POST] /api/projects
router.post('/', (req, res, next) => {
    const newProject = req.body

    Project.add(newProject)
        .then(result => {
            res.status(201).json(newProject)
        })
        .catch(next)
})

// [GET] /api/tasks
router.get('/', (req, res, next) => {
    Task.getAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

// [POST] /api/tasks
router.post('/', (req, res, next) => {
    const newTask = req.body

    Task.add(newTask)
        .then(result => {
            res.status(201).json(newTask)
        })
        .catch(next)
})


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'Finding the real error is 90% of the bug fix',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
