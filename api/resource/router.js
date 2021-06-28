// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

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

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'Finding the real error is 90% of the bug fix',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
