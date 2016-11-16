'use strict';
define(['app', 'commonHeader', 'commonFooter', 'sidebarLeft', 'sidebarRight', 'generalDirective'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.controller('404Controller', ['$scope','$rootScope','$location', function($scope, $rootScope, $location){
		$rootScope.title = 'Home';
		
	}]);
});