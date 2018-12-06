//
//  EXPRESS CONNECTION / SETUP DONE HERE
// 
// 
//
//
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const port = 443

//middleware, parses json body into the req.body property
app.use(express.json());
app.use(cors())

//
//  ROUTING SET UP HERE
// 

const articleRoutes = require('./src/routes/article-routes').routes

articleRoutes.map((val)=>{
    app[val.type](val.endpoint, val.cb)
})

app.listen(port, () => console.log("Express listening on port: ", port))

