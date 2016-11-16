'use strict';
define(['app','APIService'],function  (app) {
	app.register.service('PaymentService', ['webService', 'API', function(webService, API) {
		/**
		 * [list description]
		 * @return {[type]} [description]
		 */
		this.list  = function () {
			return webService.callAPI(API.Payment.list.method, API.Payment.list.url, {},API.Payment.list.params)
		}
		this.find  = function (id) {
			return webService.callAPI(API.Payment.find.method, API.Payment.find.url.replace(":id", id), {},API.Payment.find.params);
		}
		this.update  = function (payment) {
			return webService.callAPI(API.Payment.update.method, API.Payment.update.url + "/"+payment.Payment_id, payment)
		},
		this.create  = function (payment) {
			return webService.callAPI(API.Payment.create.method, API.Payment.update.url, payment)
		}

	}])
})
