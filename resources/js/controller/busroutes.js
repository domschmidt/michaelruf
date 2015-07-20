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

			init();
		} ]);