// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
// const { checkId, validateXYZ } = require('./middleware')


// [GET] /api/projects
router.get('/', (req, res, next) => {
    Project.getAllProjects()
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


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'Finding the real error is 90% of the bug fix',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
