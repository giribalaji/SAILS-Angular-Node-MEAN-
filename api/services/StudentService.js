module.exports = {
	
	/**
	 * @param  {} next
	 */
	list: function (next) {
		Student_info.find().exec(function (err, res) {
			if (err) {
				next({
					success: false,
					response: err
				})
			} else {
				next({
					success: true,
					response: res
				});
			}

		});
	},
	/**
	 * @param  {} filter
	 * @param  {} next
	 */
	find: function (filter, next) {
		Student.find(filter).populate('profile').populate('course').populate('batch').populate('fee_details').exec(function (err, res) {
			//sails.log(err);
			if (err) {
				next({
					success: false,
					response: err
				})
			} else {
				next({
					success: true,
					response: res[0]
				});
			}

		});
	},
	
	/**
	 * @param  {} student
	 */
	create: function (student, next) {
		//console.log(student.profile);
		Student_info.create(student.profile).exec(function (err, profile) {
			//console.log(profile);
			if (profile && profile.id) {
				Fee_details.create(student.fee_details).exec(function (err, fee_details) {
					//console.log(fee_details);
					if (fee_details.id) {
						Student.create({
							course_id: student.course.course_id,
							info_id: profile.id,
							batch_id: student.batch.id,
							fee_id: fee_details.id
						}).exec(function (err, record) {
							sails.log('Student:', err);
							next(record || err);
						});
					}else{
						sails.log('Fee_details:', err);
						next(err);
					}
				});
			}else{
				sails.log('Student_info: ', err);
				next(err);
			}

		});
	},
	update: function (student, next) {
		//console.log(student.profile);
		Student_info.update({'id': student.profile.id}, student.profile).exec(function (err, profile) {
			//console.log(profile);
			if (profile && profile.id) {
				Fee_details.create({'id':student.fee_details.id}, student.fee_details).exec(function (err, fee_details) {
					//console.log(fee_details);
					if (fee_details.id) {
						Student.update({'id':student.id}, {
							course_id: student.course.course_id,
							info_id: profile.id,
							batch_id: student.batch.id,
							fee_id: fee_details.id
						}).exec(function (err, record) {
							sails.log('Student:', err);
							next(record || err);
						});
					}else{
						sails.log('Fee_details:', err);
						next(err);
					}
				});
			}else{
				sails.log('Student_info: ', err);
				next(err);
			}

		});
	}
}