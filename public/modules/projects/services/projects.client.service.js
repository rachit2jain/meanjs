'use strict';


angular.module('projects').factory('Projects', ['$resource',
	function($resource) {
		return $resource('projects/', {
			update: {
				method: 'GET'
			}
		});
	}
]);