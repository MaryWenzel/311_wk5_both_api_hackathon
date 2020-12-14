const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/employees.js')
const port = 4000

app.use(router)
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Welcome to our API'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))