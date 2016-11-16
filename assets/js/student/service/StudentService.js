'use strict';
define(['app','APIService'], function (app) {
	app.register.service('StudentService', ['webService', 'API', function(webService, API) {
				
			this.list = function() {
				
				return webService.callAPI(API.Student.list.method, API.Student.list.url, {},API.Student.list.params);
			}
			this.find = function(id) {
				
				return webService.callAPI(API.Student.find.method, API.Student.find.url.replace(":id", id), {},API.Student.find.params);
			}
			this.payment = function(id) {
				
				return webService.callAPI(API.Student.payment.method, API.Student.payment.url.replace(":id", id), {},API.Student.payment.params);
			}
			this.update = function(id, student) {
				
				return webService.callAPI(API.Student.update.method, API.Student.update.url.replace(":id", id),student);
			}
			this.create = function (student) {
				return webService.callAPI(API.Student.create.method, API.Student.create.url, student)
			}

			this.collectFee = function (payment) {
				return webService.callAPI(API.PaymentTransaction.create.method, API.PaymentTransaction.create.url, payment);
			}		
	}]);
});