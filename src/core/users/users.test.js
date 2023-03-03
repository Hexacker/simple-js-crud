const { getUserById, addUser } = require('./users.service');

const { connectDB, dropDB } = require('../../config/testdb');
const { default: mongoose } = require('mongoose');

beforeAll(async () => connectDB());
afterAll(async () => dropDB);

describe('User', () => {
	describe('User does not exist', () => {
		it('Should return 404', async () => {
			const userId = new mongoose.Types.ObjectId().toString();
			const get = await getUserById(userId);
			expect(get).toBe('User not found');
		});
	});
});
