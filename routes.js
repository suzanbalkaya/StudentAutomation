var Student = require('./models/student');
var Login = require("./models/login");
module.exports = function(app) {


	app.get('/api/students', function(req, res) {
		Student.find(function(err, students) {
			if (err) {
				res.send(err);
			}
			console.log(res);
			return res.send(students);
		});
	});
	app.get('/api/login', function(req, res) {
		console.log("login e geldi");
		res.redirect("/admin.html");
		Login.find(function(err, logins) {
			if (err) {res.send(err);}
			console.log(res);
		
			
		});
	});
	app.post('/api/students', function(req, res) {
		Student.create(req.body, function(err, students) {
			if (err) {
				res.send(err);
			}

			Student.find(function(err, students) {
				if (err) {
					res.send(err);
				}

				res.json(students);
			});
		});
	});


	app.get('/', function(req, res) {
		res.sendfile('./app/admin.html')
	});
}