/**
 * BatchController
 *
 * @description :: Server-side logic for managing batches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list : function(req, res) {
		BatchService.list(function(response) {
			res.json(response)
		});		
	},
	findById : function(req, res) {
		var id = parseInt(req.params.id);
					
		if (Number.isInteger(id)) {
			BatchService.find({id:id}, function(response) {
				//sails.log(response);
				res.json(response)
			});
		}else{
			res.json({
				'field':'id',
				'status': 'fail',
				"message":'Missing field id'
			})
		};	
	}
};

