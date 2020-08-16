const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route) //for index inside the route

app.listen(2678, () => console.log('Server started at http://localhost:2678'))