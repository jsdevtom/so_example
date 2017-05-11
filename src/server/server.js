const express = require('express')
const path = require('path')
const app = express()

// var bodyParser = require('body-parser')

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../../dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

app.post('/', function (req, res) {
  let data = ''
  req.on('data', function (chunk) {
    data += chunk
  })
  req.on('end', function () {
    debugger
    data // will be the same here regardless of whether I use bodyParser here in the back end and/or JSON.stringify on the front end
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
