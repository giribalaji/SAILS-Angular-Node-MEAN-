/**
 * Courses.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		course_id: {
			type: "integer",
			minLength: 1,
			primaryKey: true,
			autoIncrement: true
		},
		course_name: {
			type: "string",
			required: true,
			minLength: 5
		},
		course_alias: {
			type: "string",
			required: true,
			minLength: 5
		},
		course_code: {
			required: true,
			type: "string",
			minLength: 2
		},
		avg_rating: {
			type: "integer",
		},
		review_count : {
			type: "integer",
		},
		total_student : {
			type: "integer",
		},
		image: {
			type: "string",
		},
		course_overview: {
			type: "string",
		},
		course_curriculam: {
			type: "string",
		},
		duration: {
			required: true,
			type: "integer",
		},
		createdAt: {
			type: "datetime",
		},
		updatedAt: {
			type: "datetime",
		},
		is_status: {
			type: "integer",
			defaultsTo: '1'
		}
	}
};