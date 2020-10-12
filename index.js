const express = require('express');

const projectRouter = require('./projectRouter');

const server = express();

server.use(projectRouter);

server.listen(5555, () => {
	console.log('Server listening in on port 5555.');
});
