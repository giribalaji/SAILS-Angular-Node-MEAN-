/**
 * Fee_details.js
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
		fee_description: {
			type: "text",
		},
		fee_total: {
			type: "integer",
		},
		fee_paid: {
			type: "integer",
		},
		fee_due: {
			type: "integer",
		},
		fee_due_date: {
			type: 'date'
		},
		createdAt: {
			type: "datetime",
		},
		updatedAt: {
			type: "datetime",
		},
	}
};