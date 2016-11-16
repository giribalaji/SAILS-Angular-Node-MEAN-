module.exports = {
	list : function ( next) {
		Student_info.find().exec(function(err, res) {
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
		Payment_transaction.find(filter).populate('type').populate('method').populate('course').populate('batch').populate('student').exec(function(err, res) {
			sails.log(err);
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
	addPayment : function(payment, next) {
		var response = {};
		Payment_transaction.create({
			 'student_id': payment.student_id,
			 'payment_method': payment.payment_method, 
			 'payment_type': payment.payment_type, 
			 'batch_id':payment.batch_id, 
			 'course_id': payment.course_id, 
			 'amount': payment.amount, 
			 'payment_date':payment.payment_date
		}, function (err, pay) {
			if (pay) {
				Fee_details.update({id:payment.fee_details.id}, {
					fee_paid : payment.fee_details.fee_total - payment.fee_details.fee_due + payment.amount,
					fee_due: payment.fee_details.fee_due - payment.amount,
					fee_due_date : payment.fee_due_date,
				}, function(err, fee) {
					if (fee) {
						response.payment = pay;
						response.fee_details = fee[0];
					} 
					next(err || response);				
				})
			} else{
				next(err)
			};
			
		})
		
	}
}