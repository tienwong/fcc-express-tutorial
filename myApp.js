let express = require('express');
let app = express();
require('dotenv').config()
// console.log(conf)

const assetsPath = __dirname + '/public'
const indexPath = __dirname + '/views/index.html'

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
