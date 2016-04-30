var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	education: String,
	city: String,
	email: String
});

var model = mongoose.model('event', eventSchema);

module.exports = model;