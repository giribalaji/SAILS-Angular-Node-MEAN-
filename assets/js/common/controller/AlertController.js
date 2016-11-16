'use strict';
define(['app','AlertService'], function (app) {
	/**
	 * AlertController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} AlertService                        
	 */
	app.controller('AlertController', ['$scope','AlertService', function($scope, AlertService){
		$scope.alerts = AlertService.get();		
	}]);
});