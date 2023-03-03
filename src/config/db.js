const mongoose = require('mongoose');

const DBURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERPASS}@${process.env.DB_NAME}.ncvjpk0.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
const connectDB = async () => {
	try {
		await mongoose.connect(DBURL);
		console.log(`Connect to ${process.env.DB_NAME} Database`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
