/* eslint-disable */
const { error } = require('console')
const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})

server.post('/login', (req, res) => {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'))
    const { users = [] } = db

    const candidate = users.find(user => user.username === username)
    if (candidate) {
        if (candidate.password === password) {
            res.status(200).json({
                id: candidate.id,
                username: candidate.username,
                profileId: candidate.profileId
            })
        } else {
            res.status(401).json({
                error: 'Invalid username or password'
            })
        }
    } else {
        res.status(401).json({
            error: 'Invalid username or password'
        })
    }
})

server.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({
            error: 'User is not authorized'
        })
    }
    next()
})

server.use(router)
server.listen(8000, () => {
    console.log('[json-server]: is running on port 8000')
})