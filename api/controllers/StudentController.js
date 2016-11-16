/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
	 * List Student
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	list : function(req, res) {
		StudentService.list(function(response) {
			res.json(response)
		});		
	},
	/**
	 * Find Student by Id
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	findById : function(req, res) {
		var id = parseInt(req.params.id);
		
		if (id) {
			StudentService.find({id:id}, function(response) {
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
	},
	/**
	 * Create Student
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	create : function (req, res) {
		var student = req.body;
		StudentService.create(student, function(response){
			res.json(response);
		})
	},	
	/**
	 * Update Student
	 * @param  {} req
	 * @param  {} res
	 */
	update : function(req, res){
		var student = req.body;
		sails.log(student);
		if (student.profile.id && student.course.course_id && student.batch.id && student.fee_details.id) {
			StudentService.update(student, function(response) {
				res.json(response);
			})
		} else{
			res.json({
				field : {
					profile_id : student.profile.id,
					course_id : student.course.course_id,
					batch_id : student.batch.id,
					fee_details_id : student.fee_details.id
				},
				message : "One of id missing",
				status: 'fail'
			})
		};
		
	}
};

