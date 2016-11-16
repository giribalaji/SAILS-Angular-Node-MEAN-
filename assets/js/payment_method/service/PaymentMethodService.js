'use strict';
define(['app','APIService'],function  (app) {
	app.register.service('PaymentMethodService', ['webService', 'API', function(webService, API) {
		/**
		 * [list description]
		 * @return {[type]} [description]
		 */
		this.list  = function () {
			return webService.callAPI(API.PaymentMethod.list.method, API.PaymentMethod.list.url, {},API.PaymentMethod.list.params)
		}
		this.find  = function (id) {
			return webService.callAPI(API.PaymentMethod.find.method, API.PaymentMethod.find.url.replace(":id", id), {},API.PaymentMethod.find.params);
		}
		this.update  = function (id, payment) {
			return webService.callAPI(API.PaymentMethod.update.method, API.PaymentMethod.update.url.replace(":id", id), payment)
		},
		this.create  = function (payment) {
			return webService.callAPI(API.PaymentMethod.create.method, API.PaymentMethod.create.url, payment)
		}

	}])
})
