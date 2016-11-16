/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	attributes: {		
		"id": {
			type: 'integer', 
    		primaryKey: true,
    		autoIncrement: true
		},
		"stu_first_name":{
			type: "string",
			required: true,
			minLength: 2
		},
		"stu_middle_name":{
			type: "string",
		},
		"stu_last_name": {
			type: "string",
		},
		"stu_gender": {
			type: "string",
			required: true,
			minLength: 4
		},
		"stu_dob":{
			type: "date",
			required: true
		},
		"stu_email_id": {
			type: "string",
			required: true,
			minLength: 5
		},
		"stu_admission_date": {
			type: "date",
			required: true,
			minLength: 2
		},
		"stu_photo": {
			type: "string",
			minLength: 2,
		},
		"stu_mobile_no": {
			type: "string",
			required: true,
			minLength: 10
		},
		"country":{
			type:'string',
			required: true,
			minLength: 4
		},	
		createdAt: {
			type: "datetime",
		},
		updatedAt: {
			type: "datetime",
		}	
	}
};