var mongoose = require('mongoose');

module.exports = mongoose.model('Students', {
	Name: String,
	SchollNumber: String,
	LessonName : String,
	LessonScore : String
});