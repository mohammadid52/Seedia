const path = require('path')
const express = require('express')
const cors = require('cors')
const loginRouter = require('./loginRouter')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'build/static')))

app.use('/login', loginRouter)

const getTokenFrom = (request) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

app.post('/test', (req, res) => {
    const body = req.body

    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, 'process.env.SECRET')

    if (!(token && decodedToken.id)) {
        return res.status(401).send({ error: 'token missing or invalid' })
    }

    res.send({ 'Token verified': body })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use('static', express.static(path.join(__dirname, 'public')))

app.listen(3005, () => {
    console.log('API Server running on 3005')
})
