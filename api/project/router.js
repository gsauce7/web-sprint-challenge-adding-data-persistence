// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
// const { checkId, validateXYZ } = require('./middleware')


// [GET] /api/projects
router.get("/", (req, res, next) => {
    Project.getAllProjects()
        .then(data => {
            data.map(project => {
                project.project_completed ? project.project_completed = true : project.project_completed = false
                return project
            })
            res.status(200).json(data);
        })
        .catch(next)
})


router.post("/", (req, res, next) => {
    Project.add(req.body)
        .then(project => {
            project.project_completed ? project.project_completed = true : project.project_completed = false
            res.status(201).json(project);
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
