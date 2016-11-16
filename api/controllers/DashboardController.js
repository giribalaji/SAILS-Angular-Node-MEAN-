/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	resultCount : function (req, res) {
		DashboardService.resultCount(function(response) {
			res.json(response)
		});
	},
	recentlyJoinedStudent : function (req, res) {
		if (req.query) {
			var filter = {
				where: req.query.where || {} , 
				skip: parseInt(req.query.skip) || 0, 
				limit: parseInt(req.query.limit) || 5, 
				sort: req.query.sort || 'createdAt DESC'
			};
		};

		sails.log(filter);

		DashboardService.listStudent(filter, function(response) {
			res.json(response)
		});	
	},
	latestBatch : function (req, res) {
		if (req.query) {
			var filter = {
				where: req.query.where || {} , 
				skip: parseInt(req.query.skip) || 0, 
				limit: parseInt(req.query.limit) || 5, 
				sort: req.query.sort || 'createdAt DESC'
			};
		};

		sails.log(filter);

		DashboardService.latestBatch(filter, function(response) {
			res.json(response)
		});	
	},
	latestPayment : function (req, res) {
		if (req.query) {
			var filter = {
				where: req.query.where || {} , 
				skip: parseInt(req.query.skip) || 0, 
				limit: parseInt(req.query.limit) || 5, 
				sort: req.query.sort || 'createdAt DESC'
			};
		};

		sails.log(filter);

		DashboardService.latestPayment(filter, function(response) {
			res.json(response)
		});	
	},
	latestDues : function (req, res) {
		if (req.query) {
			var filter = {
				where: req.query.where || {} , 
				skip: parseInt(req.query.skip) || 0, 
				limit: parseInt(req.query.limit) || 5, 
				sort: req.query.sort || 'createdAt DESC'
			};
		};
		sails.log(filter);

		DashboardService.latestDues(filter, function(response) {
			res.json(response)
		});
	} 

}