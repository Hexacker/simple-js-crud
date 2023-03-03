const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},

	username: {
		type: String,
		required: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
	},

	fullName: {
		type: String,
		required: true,
	},

	isActivated: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('User', userSchema);
