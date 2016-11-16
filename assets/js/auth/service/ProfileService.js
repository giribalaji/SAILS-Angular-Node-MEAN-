'use strict';
define(['app','APIService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.factory('ProfileService',['webService','API',function(webService, API){
		var profile = {			
				"firstname": "",
				"lastname" : "",
				"gender": "",				
				"locale": "",
				"nickname": "",
				"picture": "dist/img/avatar5.jpg",
				"user_id": ""
		};

		return {
			/**
			 * [add description]
			 * @param {[type]} msg [Object]
			 */
			add : function(msg) {
				angular.merge(msgformat,msg);
				alerts.push(msgformat);
			},
			/**
			 * [getMessage description]
			 * @return {[type]} [Array]
			 */
			get : function() {
				 var params = API.User.profile.params;
                 //angular.merge(params,{'filter':{"where":{"user_id":userId}}});
				return webService.callAPI(API.User.profile.method, API.User.profile.url, {},params);
				
			}
		}
	}]);
});