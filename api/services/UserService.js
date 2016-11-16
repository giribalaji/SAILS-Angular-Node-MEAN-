module.exports = {

	login : function (filter, next) {
		console.log('Giri:',filter);
        Users.find(filter).exec(function(err, res) {
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