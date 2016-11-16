'use strict';
define(['app','APIService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */	
	app.register.controller('RegisterController', ['$scope','$rootScope','$location','APIService', function($scope, $rootScope, $location, APIService){
		$rootScope.title = "Registeration Page";
		/**
		 * [submitRegistor description]
		 * @param  {[type]} user [description]
		 * @return {[type]}      [description]
		 */
		$scope.submitRegistor = function(user){
			//Calling APIService for server login	
			APIService.User.register(user).then(function(data){
				$rootScope.error = '';
				$rootScope.user  = data;				
			},function(error){
				$rootScope.error  = { 
	                "content": error.message,
	                "type" : "error",
	                "header" : error.code
	            };
			});
		};
				
	}])
});