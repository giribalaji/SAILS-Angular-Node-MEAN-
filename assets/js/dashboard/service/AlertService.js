'use strict';
define(['app'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.factory('AlertService', ['$scope', function($scope){
		var alerts = [],
			msgformat = {
				code : "USERNAME_EMAIL_REQUIRED",
				message : "username or email is required",
				name : "Error",
				type : "error"
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
			fetch : function() {
				return alerts;
			}
		};
	}]);
});