const express = require('express');
const server = express()

const projectRoute = require('./routes/project-route');
const resourcesRoute = require('./routes/resources-route')
const tasksRoute = require('./routes/tasks-route')

server.use(express.json())

server.use('/projects', projectRoute)
server.use('/resources', resourcesRoute)
server.use('/projects/:id', tasksRoute)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


server.listen(4000, ()=>{
    console.log('http://localhost:4000')
})

