'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Projects Schema
 */
var ProjectsSchema = new Schema({
	startDate: {         
        type: Date,   
        default: Date.now 
    },
    status: {
        type: String,
        default: 'new',
        trim: true
    },
    title: {
        type: String,
        default: '',
        trim: true,     
        unique : true,
        required: 'name cannot be blank',
       
    },
    id: {
    	type: Number,
    	unique: true,
    },

});



mongoose.model('Projects', ProjectsSchema);