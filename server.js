const express = require('express');
const server = express()

const projectRoute = require('./routes/project-route')



server.use('/projects', projectRoute)




server.listen(4000, ()=>{
    console.log('http://localhost:4000')
})

