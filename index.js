// loads env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Route/route')
require('./DB/connection')

const pfServer=express()

pfServer.use(cors())
// initialize before router (data reaching in router)
pfServer.use(express.json()) 
pfServer.use(router)

const PORT = 3000

pfServer.listen(PORT,()=>{
    console.log(`pf-Server started running at ${PORT} & waiting for a client request`);
})

pfServer.get('/',(req,res)=>{
    res.send("<h1 style=color:red>Project fair application started running & waiting for client request</h1>")
})