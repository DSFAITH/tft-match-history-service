import express from 'express'

function getTestRoutes() {
    const router = express.Router()
    router.get('/hello', handleHelloRequest)
    return router
}

async function handleHelloRequest(req, res) {
    res.json({ message: 'Hello Dani!'})
}

export {getTestRoutes}
