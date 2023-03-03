const config = require('dotenv').config();
const connectDB = require('./src/config/db');
const port = process.env.PORT || 5001;
const createServer = require('./server');

const app = createServer();

app.listen(port, async () => {
	console.log(`Server started on port: ${port}`);
	await connectDB();
});

module.exports = app;
