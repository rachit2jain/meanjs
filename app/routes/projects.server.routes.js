'use strict';


module.exports = function(app) {
	var projects = require('../../app/controllers/projects.server.controller');
	var users = require('../../app/controllers/users.server.controller');

	app.route('/projects')
	  .get(users.requiresLogin, projects.list);

	app.route('/projects/:projectsId')
   		.get(projects.read);
};