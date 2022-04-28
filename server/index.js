const express = require('express')
const path = require('path')
 
const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9572a7d8cbc248c7b9f31b8ce24e53c6',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
 
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../index.html'))})
 
const port = process.env.PORT || 4005
 
app.listen(port, () => {console.log(`${port} up & runnin'`)})

