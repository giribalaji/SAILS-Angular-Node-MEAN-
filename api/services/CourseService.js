module.exports = {

	list : function ( next) {
		Courses.find().exec(function(err, res) {
			if (err) {
				next({
					success: false,
					response: err
				})
			}else{
				next({
					success: true,
					response: res
				});
			}
			
		});
	},
	find : function ( filter, next) {
		Courses.find(filter).exec(function(err, res) {
			sails.log(err);
			if (err) {
				next({
					success: false,
					response: err
				})
			}else{
				next({
					success: true,
					response: res[0]
				});
			}
			
		});
	}
}