// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
// const { checkId, validateXYZ } = require('./middleware')

// [GET] /api/tasks

router.get("/", (req, res, next) => {
    Task.getAllTasks()
        .then(data => {
            data.map(task => {
                task.task_completed ? task.task_completed = true : task.task_completed = false
                return task
            })
            res.status(200).json(data);
        })
        .catch(next)
})

// [POST] /api/tasks

router.post("/", (req, res, next) => {
    Task.add(req.body)
        .then(task => {
            task.task_completed ? task.task_completed = true : task.task_completed = false
            res.status(201).json(task);
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
