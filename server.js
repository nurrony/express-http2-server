import spdy from 'spdy'
import fs from 'fs'
import express from 'express'

const app = express()
const PORT = process.env.NODE_PORT || 3000
const options = {
  key: fs.readFileSync(__dirname + '/certs/http2-server.key'),
  cert: fs.readFileSync(__dirname + '/certs/http2-server.crt')
}

app.get('*', (req, res) => res.status(200).json({message: 'ok'}))

spdy
  .createServer(options, app)
  .listen(PORT, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Running Server on https://0.0.0.0: ' + PORT + '')
    }
  })
