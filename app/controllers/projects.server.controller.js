'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
    Projects = mongoose.model('Projects'),
    _ = require('lodash');

/**
 * Create a Project
 */
exports.create = function(req, res) {

};

/**
 * Show the current Project
 */
exports.read = function(req, res) {
	Projects.findById(req.params.projectsId).exec(function(err, projects) {
		if (err) {
	      return res.status(400).send({
	          message: errorHandler.getErrorMessage(err)
	      });
      } else {
         if (!projects) {
				return res.status(404).send({
  					message: 'Project not found'
  				});
			}
			res.json(projects);
      }
	});

};

/**
 * Update a Project
 */
exports.update = function(req, res) {

};

/**
 * Delete an Project
 */
exports.delete = function(req, res) {

};

/**
 * List of Projects
 */
exports.list = function(req, res) {
	Projects.find().exec(function(err, projects) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(projects);
        }
    });
};