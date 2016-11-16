/**
 * Dashboard Service
 *
 * @description :: Server-side logic for managing batches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	resultCount : function (next) {
		var dashboard = {
			count:{},
			sum : {}
		},
		_this = this;

		Student.count().exec(function (err, res) {
			dashboard.count.student = err || res;
			_this.countCourse(dashboard, next);
		});
	},
	countCourse : function (dashboard, next) {
		var _this = this;

		Courses.count().exec(function (err, res) {
			dashboard.count.courses = err || res;
			_this.countBatch(dashboard, next);
		});
	},
	countBatch : function (dashboard, next) {
		var _this = this;

		Batch.count().exec(function (err, res) {
			dashboard.count.batch = err || res;
			_this.feeTotal(dashboard, next);
		});
	},
	feeTotal : function (dashboard, next) {
		var _this = this;
		Fee_details.find().sum('fee_total').exec(function (err, res) {
			dashboard.sum.fee_total = err || res[0].fee_total;
			_this.fee_paid(dashboard, next);
		});		
	},
	fee_paid : function (dashboard, next) {
		var _this = this;
		Fee_details.find().sum('fee_paid').exec(function (err, res) {
			dashboard.sum.fee_paid = err || res[0].fee_paid;
			_this.fee_due(dashboard, next);
		});		
	},
	fee_due : function (dashboard, next) {
		var _this = this;
		Fee_details.find().sum('fee_due').exec(function (err, res) {
			dashboard.sum.fee_due = err || res[0].fee_due;
			_this.render(dashboard, next);
		});		
	},
	listStudent : function (filter, next) {

		Student_info.find(filter).exec(function (err, res) {
			if (err) {
				next(err)
			} else {
				next(res);
			}
		});
	},
	latestBatch : function (filter, next) {
		Batch.find(filter).exec(function (err, res) {
			if (err) {
				next(err)
			} else {
				next(res);
			}
		});
	},
	latestPayment : function (filter, next) {
		Payment_transaction.find(filter).populate('type').populate('method').populate('course').populate('batch').populate('student').exec(function (err, res) {
			if (err) {
				next(err)
			} else {
				next(res);
			}
		});
	},
	latestDues : function (filter, next) {
		// Student.find(filter).populate('profile').populate('course').populate('batch').populate('fee_details').exec(function (err, res) {
		// 	if (err) {
		// 		next(err)
		// 	} else {
		// 		next(res);
		// 	}
		// });

		var query = "SELECT s.id, f.fee_description, f.fee_total, f.fee_paid, f.fee_due, f.fee_due_date, i.stu_first_name, i.stu_middle_name, ";
			query += " i.stu_last_name, i.stu_admission_date FROM student s INNER JOIN student_info i ON s.info_id = i.id INNER JOIN fee_details";
			query += " f ON f.id = s.fee_id ORDER BY f.fee_due DESC LIMIT 0, 5";
		Student.query(query, function(err, res) {
			if (err) {
				next(err)
			} else {
				next(res);
			}
		});
	},
	render:function (result, next) {
		next(result);
	}
}