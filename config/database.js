var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eventlist', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB');
  } else {
    console.log('Successfully connected to MongoDB');
  }
});