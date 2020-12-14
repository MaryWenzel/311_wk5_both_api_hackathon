const express = require('express')
const app = express()
const router = require('./routes/employees.js')
const port = 4001

app.use(router)
app.get('/', (req, res) => res.send('Welcome to our API'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))