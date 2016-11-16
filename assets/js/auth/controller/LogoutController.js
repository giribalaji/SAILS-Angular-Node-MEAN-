'use strict';
define(['app'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.controller('LogoutController', ['$scope','$rootScope','$location', function($scope, $rootScope, $location){
		$rootScope.user = null;		
		window.sessionStorage.clear()
		$location.path('/login');
	}]);
});