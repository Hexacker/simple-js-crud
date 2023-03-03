const moment = require('moment-timezone');
const Event = require('./event.model');

const getEvent = async (eventId, timezone) => {
	const getEvent = await Event.findOne({ _id: eventId });
	if (getEvent) {
		if (timezone) {
			const eventStartDate = getEvent.startDate.toISOString().split('T').join(' ').substring(0, 16);
			const eventEndDate = getEvent.endDate.toISOString().split('T').join(' ').substring(0, 16);
			const currentStartDate = moment.tz(eventStartDate, getEvent.timezone);
			const convertedStartDate = currentStartDate.clone().tz(timezone).format();
			const currentEndDate = moment.tz(eventEndDate, getEvent.timezone);
			const convertedEndDate = currentEndDate.clone().tz(timezone).format();
			const returnedEvent = {
				title: getEvent.title,
				description: getEvent.description,
				startDate: convertedStartDate,
				endDate: convertedEndDate,
			};
			return returnedEvent;
		} else {
			return getEvent;
		}
	} else {
		return 'Could not find this event';
	}
};

const addEvent = async (titl, desc, sDate, eDate, tz) => {
	if (!titl || !desc) {
		throw new Error('Please add a Title and Desc');
	}
	if (titl.length > 30) {
		throw new Error('Please title must be less than 30 character');
	}
	if (!tz) {
		const newEvent = Event.create({
			title: titl,
			description: desc,
			startDate: sDate,
			endDate: eDate,
			timezone: moment.tz.guess(),
		});
		if (newEvent) {
			return newEvent;
		} else {
			return 'Error has been encoutered while creating new event';
		}
	} else {
		const newEvent = await Event.create({
			title: titl,
			description: desc,
			startDate: sDate,
			endDate: eDate,
			timezone: tz,
		});
		if (newEvent) {
			console.log('EVENT ===> ', newEvent);
			return newEvent;
		} else {
			return 'Error has been encoutered while creating new event';
		}
	}
};

const updateEvent = (req, res) => {
	res.status(200).json({ message: `event ${req.params.id} has been updated` });
};

const deleteEvent = (req, res) => {
	res.status(200).json({ message: `event ${req.params.id} has been deleted` });
};

module.exports = {
	getEvent,
	addEvent,
	updateEvent,
	deleteEvent,
};
