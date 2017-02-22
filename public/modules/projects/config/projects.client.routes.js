'use strict';

//Setting up route
angular.module('projects').config(['$stateProvider',
	function($stateProvider) {
		// Projects state routing
		$stateProvider.
		state('createProject', {
			url: '/projects/new',
			templateUrl: 'modules/projects/views/create-project.client.view.html'
		}).
		state('projects', {
			url: '/projects',
			templateUrl: 'modules/projects/views/projects.client.view.html'
		});
	}
]);