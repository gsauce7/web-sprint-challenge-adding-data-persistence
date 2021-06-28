// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
// const { checkId, validateXYZ } = require('./middleware')

// [GET] /api/tasks
router.get('/', (req, res, next) => {
    Task.getAllTasks()
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
