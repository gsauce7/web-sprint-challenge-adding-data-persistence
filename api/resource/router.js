// build your `/api/resources` router here
const router = require("express").Router()
const Resource = require("./model")

// [GET] /api/resources

router.get("/", (req, res, next) => {
    Resource.getAllResources()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next)
})

// [POST] /api/resources

router.post("/", (req, res, next) => {
    Resource.add(req.body)
        .then(resource => {
            res.status(201).json(resource);
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
