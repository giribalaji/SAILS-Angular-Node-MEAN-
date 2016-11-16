/**
 * Batch.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		id: {
			type: "integer",
			minLength: 1,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: "string",
			required: true,
			minLength: 5
		},		
		course: {
			columnName: "course_id",
			model: "courses"
		},
		start_date: {
			type: "date",
		},
		end_date: {
			type: "date",
		},
		status: {
			type: "text",
		},
		frequency:{
			type:"string"
		},
		start_time:{
			type:"string"
		},
		end_time:{
			type:"string"
		},
		duration:{
			type:"integer"
		},
		createdAt: {
			type: "datetime",
		},
		updatedAt: {
			type: "datetime",
		},
	}
};