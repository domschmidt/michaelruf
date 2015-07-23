app.factory('routeService', [ '$http', function($http) {
	var service = this;

	service.fetchRoutes = function(callback) {
		$http.get('/routes').success(function(data) {
			callback(data);
		}).error(function(data, status) {
			console.log("Could not fetch /routes data. Http returned status " + status);
		});
	}

	return service;

} ]);