/**
 * CoursesController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list : function(req, res) {
		CourseService.list(function(response) {
			res.json(response)
		});		
	},
	findById : function(req, res) {
		var id = parseInt(req.params.id);
		
		if (Number.isInteger(id)) {
			CourseService.find({course_id:id}, function(response) {
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
	addCourse : function  (req, res) {
		var courseData = req.body.course;
		
	}
};

