const express = require('express')
const socket = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socket(server)

app.set('view engine','ejs')
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index') 
})

server.listen(4000,()=>{
    console.log(`tgapp server is runging`);
})