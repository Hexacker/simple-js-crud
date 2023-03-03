const express = require('express');
const { getEvent, addEvent, updateEvent, deleteEvent } = require('./event.service');
const router = express.Router();

// router.route('/').post(addEvent);
router.route('/:id').put(updateEvent).delete(deleteEvent);

router.get('/:id', async (req, res) => {
	const eventId = req.params.id;
	const timezone = req.body.timezone;
	const event = await getEvent(eventId, timezone);
	res.status(200).send(event);
});

router.post('/', async (req, res) => {
	const newEvent = await addEvent(
		req.body.title,
		req.body.description,
		req.body.startDate,
		req.body.endDate,
		req.body.timezone
	);
	res.status(200).send(newEvent);
});

module.exports = router;
