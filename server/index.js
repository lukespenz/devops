const express = require('express')
const path = require('path')
 
const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8776fe795c1c41ed817cc30b2e0802ea',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
 
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../index.html'))})
 
const port = process.env.PORT || 4005
 
app.listen(port, () => {console.log(`${port} up & runnin'`)})

try { nonFunction();
} catch (error) {
    console.error(error)
}
