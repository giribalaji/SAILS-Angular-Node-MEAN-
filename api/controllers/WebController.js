/**
 * Web Controller wich will handle website URLs
 */
module.exports = {
	'Courses': function (req, res) {
		CourseService.list(function(result) {
			var course = (result.success)?result.response:[];
			res.view('courses', {courses: course});
		});
	}
}