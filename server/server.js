require("dotenv").config
const express = require('express')
const cors=require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB =require("./config/dbConn")
const mongoose = require('mongoose')
connectDB()

const app = express()

const PORT=process.env.PORT||1010
app.use(cors(corsOptions))
app.use(express.static("public"))
app.use(express.json())
app.use("/api/posts",require("./Route/RPosts"))
app.use("/api/todos",require("./Route/RTodos"))
 app.use("/api/users",require("./Route/RUsers"))

ongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    
    mongoose.connection.on('error', err => {
    console.log(err)
    })
})


app.listen(PORT, ()=>console.log(`server running on ${PORT}`))