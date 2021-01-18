const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = process.env.port || 4002
app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')))
app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/web', express.static(path.join(__dirname, '../web')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/index.html'))
})
app.listen(port, () => {
    console.log('server started at \033[42mhttp://localhost:' + port + '\033[0m')
})