// Setting up route
angular.module('core').config(['$routeProvider',
	function($routeProvider) {

		$routeProvider.

            when('/', {
               templateUrl: 'js/modules/core/views/workspace.view.html'
            }).

            otherwise({
               redirectTo: '/'
            });

	}
]);
