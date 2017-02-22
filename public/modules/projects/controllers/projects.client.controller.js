'use strict';

angular.module('projects').controller('ProjectsController', ['$scope', '$location', 'Projects',
	function($scope, $location, Projects) {
		$scope.create = function() {
			var projects = new Projects ({
				title: this.title
			});

			// Redirect after save
			projects.$save(function(response) {
				$location.path('projects/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.projects = Projects.query();
		};
	}
]);