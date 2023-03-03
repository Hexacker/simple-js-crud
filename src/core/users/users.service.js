const User = require('./users.model');

const addUser = async () => {};

const getUserById = async (userId) => {
	const getUser = await User.findOne({ _id: userId });
	if (getUser) {
		return getUser;
	} else {
		return 'User not found';
	}
};

module.exports = { addUser, getUserById };
