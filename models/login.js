var mongoose = require('mongoose');

module.exports = mongoose.model('login', {
	Id : Number, 
	Email: String,
	Password: String
});