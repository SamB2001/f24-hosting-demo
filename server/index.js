const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
//css endpoint
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})
//js endpoint
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})