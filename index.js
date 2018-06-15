const express = require('express')
const fs = require('fs')

const app = express()

const PORT = process.env.NODE_ENV || 3000
const HOST = '0.0.0.0'

app.use( express.static( __dirname + '/public' ) ) 

app.use( (request, response)=>{
  fs.readFile( __dirname + '/public/404.html', 'utf-8', (err, htmlData)=>{
    response.send(htmlData)
  })  
})

app.listen(PORT, HOST, ()=>{
  console.log('App Listening on PORT: ' + PORT)
})