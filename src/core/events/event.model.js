const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			maxLength: 30,
		},
		description: {
			type: String,
			required: true,
		},
		timezone: {
			type: String,
		},
		startDate: {
			type: Date,
			required: true,
		},
		endDate: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Event', eventSchema);
