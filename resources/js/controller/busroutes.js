app.controller('BusRoutesCtl', [ '$scope', 'routeService',
		function($scope, routeService) {
			$scope.routes = {};
			$scope.selected = {};

			var onRoutesLoaded = function(routes) {
				$scope.routes = routes;
			}

			function init() {
				routeService.fetchRoutes(onRoutesLoaded);
			}

			$scope.getAvailableTrips = function(selected) {
				var result = [];
				if (selected && selected.route && selected.station) {
					angular.forEach(selected.route.trips, function(trip) {
						result = result.concat(trip);
					})
				}
				return result;
			}

			$scope.getTripStartTimeForStation = function(trip, selected) {
				var selectedStationId = selected.station.index;

				var result = "";

				if (selected && selected.station) {
					result = trip.times[selected.station.index];
				}

				return result;
			}

			$scope.getAvailableStations = function(selected) {
				var result = [];
				if (selected && selected.route && selected.route.id) {
					angular.forEach($scope.routes, function(route) {
						if (selected.route.id === route.id) {
							result = result.concat(route.stations);
						}
					})
				}
				return result;
			}

			init();
		} ]);