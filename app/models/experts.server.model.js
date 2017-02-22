'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Experts Schema
 */
var ExpertsSchema = new Schema({
	id:{
		type: Number,
		unique: true
	},

	approveToggle:{
		type: Boolean
	},

	projectId:{
		type: Number
	},
    
    name: {
        type: String,
        default: '',
        trim: true,     
      
        required: 'name cannot be blank',
    },
});

mongoose.model('Experts', ExpertsSchema);