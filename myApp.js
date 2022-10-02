let express = require('express');
let app = express();

const assetsPath = __dirname + '/public'
const indexPath = __dirname + '/views/index.html'

app.use('/public', express.static(assetsPath))

app.get('/', (req, res) => {
    res.sendFile(indexPath)
})

app.get('/json', (req, res) => {
    res.json({message: 'Hello json'})
})

module.exports = app;
