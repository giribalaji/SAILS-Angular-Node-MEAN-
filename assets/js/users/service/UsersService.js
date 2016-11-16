'use strict';
define(['app','APIService'],function  (app) {
	app.register.service('UsersService', ['webService', 'API', function(webService, API) {
		/**
		 * [list description]
		 * @return {[type]} [description]
		 */
		this.list  = function () {
			console.log('Giri-2-hi',API.User.list.method, API.User.list.url,API.User.list.params);
            return webService.callAPI(API.User.list.method, API.User.list.url, {},API.User.list.params)
            
		}
		this.find  = function (id) {
			return webService.callAPI(API.User.find.method, API.User.find.url.replace(":id", id), {},API.User.find.params);
		}
		this.update  = function (users) {
			return webService.callAPI(API.User.update.method, API.User.update.url + "/"+users.users_id, users)
		},
		this.create  = function (users) {
			console.log('Giri-2 - hi',API.User.create.method, API.User.create.url,users);
			return webService.callAPI(API.User.create.method, API.User.create.url, users)
		}

	}])
})
