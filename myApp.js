let express = require('express');
let app = express();
require('dotenv').config()
// console.log(conf)

const assetsPath = __dirname + '/public'
const indexPath = __dirname + '/views/index.html'

app.get('/:word/echo', (req, res) => {
    const word = req.params.word
    res.send({ echo: word })
})  

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.send({time: req.time})
})

const logger = (req, res, next) => {
    const method = req.method
    const path = req.path
    const ip = req.ip
    console.log(method + ' ' + path + ' - ' + ip)
    next()
}

app.use(logger)

app.use('/public', express.static(assetsPath))

app.get('/', (req, res) => {
    res.sendFile(indexPath)
})

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ message: "HELLO JSON" })
    } else {
        res.json({ message: 'Hello json' })
    }
})

module.exports = app;
