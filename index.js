const http = require('http')
const express = require("express")
const path = require("path")

const app = express()

const port = process.env.PORT || 3000

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/contact', function(req,res){
  res.sendFile(path.join(__dirname, '/contactme.html'))
})

app.get('/about', function(req,res){
  res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})