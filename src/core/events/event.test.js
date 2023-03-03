const { getEvent, addEvent, updateEvent, deleteEvent } = require('./event.service');
const mongoose = require('mongoose');
const { connectDB, dropDB, dropCollections } = require('../../config/testdb');

beforeAll(async () => connectDB());
//afterAll(async () => dropCollections());
afterAll(async () => dropDB());

describe('Event', () => {
	describe('Event does not exist', () => {
		it('should return 404', async () => {
			const eventId = new mongoose.Types.ObjectId().toString();
			const get = await getEvent(eventId);
			expect(get).toBe('Could not find this event');
		});
	});

	describe('Add Event Route', () => {
		it('should return new event', async () => {
			const newEvent = await addEvent(
				'Test Event',
				'Test Event Description',
				'2023-02-25T17:00:00.000Z',
				'2023-02-27T17:00:00.000Z'
			);
			expect(newEvent).toHaveProperty('_id');
		});
	});
});
