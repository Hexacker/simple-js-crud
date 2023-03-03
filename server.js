const express = require('express');
const event = require('./src/core/events/event.controller');
const user = require('./src/core/users/users.controller');
const { errorHander } = require('./src/middlewares/errorHandler');

const createServer = () => {
	const app = express();
	app.use(express.json());
	app.use(express.urlencoded({ extends: true }));
	app.use('/api/events', event);
	app.use(errorHander);
	return app;
};

module.exports = createServer;
