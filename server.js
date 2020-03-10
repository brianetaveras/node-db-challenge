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


server.get('/', (req, res)=>{
    res.json({
        message: 'Welcome!'
    })
})



const PORT = 4000;

server.listen(PORT, () => {

    console.log(
        `
     --------------------------------------------------------------
     |       ___                                                   |
     |      (^o^) <Server is running on http://localhost:${PORT}      |
     |     ((___))                                                 |
     |       ^ ^                                                   |
     --------------------------------------------------------------
            `
    );
})

