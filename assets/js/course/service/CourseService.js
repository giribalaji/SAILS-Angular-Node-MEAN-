'use strict';
define(['app','APIService'],function  (app) {
	app.register.service('CourseService', ['webService', 'API', function(webService, API) {
		/**
		 * [list description]
		 * @return {[type]} [description]
		 */
		this.list  = function () {
			return webService.callAPI(API.Course.list.method, API.Course.list.url, {},API.Course.list.params)
		}
		this.find  = function (id) {
			return webService.callAPI(API.Course.find.method, API.Course.find.url.replace(":id", id), {},API.Course.find.params);
		}
		this.update  = function (course) {
			return webService.callAPI(API.Course.update.method, API.Course.update.url.replace(":id", course.course_id), course)
		},
		this.create  = function (course) {
			return webService.callAPI(API.Course.create.method, API.Course.create.url, course)
		}

	}])
})
