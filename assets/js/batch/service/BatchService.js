'use strict';
define(['app','APIService'],function  (app) {
	app.register.service('BatchService', ['webService', 'API', function(webService, API) {
		/**
		 * [list description]
		 * @return {[type]} [description]
		 */
		this.list  = function () {
			return webService.callAPI(API.Batch.list.method, API.Batch.list.url, {},API.Batch.list.params)
		}
		this.find  = function (id) {
			return webService.callAPI(API.Batch.find.method, API.Batch.find.url.replace(":id", id), {},API.Batch.find.params);
		}
		this.update  = function (id, Batch) {
			return webService.callAPI(API.Batch.update.method, API.Batch.update.url.replace(":id", id), Batch)
		},
		this.create  = function (batch) {
			return webService.callAPI(API.Batch.create.method, API.Batch.update.url, batch)
		}

	}])
})
