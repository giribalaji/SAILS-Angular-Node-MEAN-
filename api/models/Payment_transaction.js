/**
 * Payment_transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		id: {
			type: "integer",
			primaryKey: true,
      		autoIncrement: true
		},
		student: {
			model: "student_info",
			columnName: 'student_id'
		},
		type: {
			model: "payment_type",
			columnName: 'payment_type'
		},
		method: {
			model: "payment_method",
			columnName: 'payment_method'
		},
		batch: {
			model: "batch",
			columnName: 'batch_id'
		},
		course: {
			model: "courses",
			columnName: 'course_id'
		},
		amount: {
			type: "integer",
			required:true
		},
		payment_date:{
			type:'date',
			required:true
		},
		createdAt: {
			type: "datetime",
		},
		updatedAt: {
			type: "datetime",
		},
	}
};
