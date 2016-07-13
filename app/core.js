var studentsApp = angular.module('studentsApp', []);

function MainController($scope, $http) {



	$http.get('/api/students')
		.success(function(data) {
			$scope.students = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});





	$scope.setStudent = function() {

		if ($scope.formData._id) {

			$http.put('/api/students/' + $scope.formData._id, $scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.addresses = data;
					$scope.updating = false;
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});

		}
		else {

			$http.post('/api/students', $scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.students = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}

	};


	$scope.login = function() {
		console.log($scope.formData);
		$http.get('/api/login', $scope.formData).success(function(data){
			setTimeout(function () {
                        window.location = '/admin.html';
                    }, 40);
		})
		.error(function(data) {
			console.log('Error: ' + data);
			alert("kullanıcı adı veya parola hatalı");
		});


	};





	$scope.clearForm = function() {
		$scope.formData = {};
		$scope.updating = false;
	};

}
