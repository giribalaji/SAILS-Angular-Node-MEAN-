'use strict';
define(['app','APIService'], function (app) {
	app.register.service('DashboardService', ['webService', 'API', function(webService, API) {
				
			this.latestStudent = function(filter) {				
				return webService.callAPI(API.Dashboard.latestStudent.method, API.Dashboard.latestStudent.url, filter || {},API.Dashboard.latestStudent.params);
			}

			this.latestBatch = function(filter) {				
				return webService.callAPI(API.Dashboard.latestBatch.method, API.Dashboard.latestBatch.url, filter || {},API.Dashboard.latestBatch.params);
			}

			this.latestPayment = function(filter) {				
				return webService.callAPI(API.Dashboard.latestPayment.method, API.Dashboard.latestPayment.url, filter || {},API.Dashboard.latestPayment.params);
			}

			this.latestDues = function(filter) {				
				return webService.callAPI(API.Dashboard.latestDues.method, API.Dashboard.latestDues.url, filter || {},API.Dashboard.latestDues.params);
			}

			this.resultCount = function(filter) {				
				return webService.callAPI(API.Dashboard.resultCount.method, API.Dashboard.resultCount.url, filter || {},API.Dashboard.resultCount.params);
			}
			
	}]);
});