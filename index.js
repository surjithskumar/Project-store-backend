// loads env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Route/route')

const pfServer=express()

pfServer.use(cors())
// initialize before router (data reaaching in router)
pfServer.use(express.json())
pfServer.use(router)

//localhost 3000 is busy
const PORT = 3001

pfServer.listen(PORT,()=>{
    console.log(`pf-Server started running at ${PORT} & waiting for a client request`);
})

pfServer.get('/',(req,res)=>{
    res.send("<h1 style=color:red>Project fair application started running & waiting for client request</h1>")
})