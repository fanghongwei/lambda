const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.text({ type: 'text/html' }))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
    res.send('Got a POST request -> ' + eval(req.body))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))