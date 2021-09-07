const express = require('express')
const { readFile } = require('./modulos')


const app = express()
app.use(express.json())
const port = 4000

const archivotxt = './data.txt'
const archivomd ='./data.md'

const dat = readFile(archivotxt)

app.get('/file', (req, res) => {
  console.log(req.body)
  res.send('data').status(200)
})
app.listen(port, () => {
    console.log(`servidor corriendo en => http://localhost:${port}`)
})
