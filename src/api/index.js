var express = require('express');
var event = require('../models/event');

var router = express.Router();

//get all events
router.get('/eventlist', function(req, res) {
	console.log('I received a GET request');
  event.find({}, function(err, event) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    console.log(event);
    res.json({ events: event });
  });
});

// add new event
router.post('/eventlist', function(req, res) {
	console.log(req.body);
  	var new_event = req.body;
  	event.create(new_event, function(err, event) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'event': new_event, message: 'Event added to db' });
  });
});

// delete event
router.delete('/eventlist/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  event.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Event deleted' });
  });
});

// edit event
router.get('/eventlist/:id', function(req, res) {
	var id = req.params.id;
  	console.log(id);
  	event.findByIdAndEdit(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Event Edited' });
  });
});

// update event
router.put('/eventlist/:id', function(req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  var input = req.body;
  if (input && input._id !== id) {
    return res.status(500).json({ err: "Its don't match!" });
  }
  event.findByIdAndUpdate(id, input, {new: true}, function(err, input) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'event': input, message: 'Event updated' });
  });
});

module.exports = router;