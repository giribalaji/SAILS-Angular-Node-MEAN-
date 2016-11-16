/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {

	attributes: {
		"id": {
			type: "integer",
			primaryKey: true,
			autoIncrement: true
		},
		"profile": {
			model: "student_info",
			columnName: 'info_id'
		},
		"course": {			
			columnName: "course_id",
			model: "courses"
		},
		"batch": {
			columnName: "batch_id",
			model: "batch"
		},		
		"fee_details": {
			columnName: "fee_id",
			model: "fee_details"
		},	
		createdAt: {
			type: "datetime",
		},
		updatedAt: {
			type: "datetime",
		}
	}
};