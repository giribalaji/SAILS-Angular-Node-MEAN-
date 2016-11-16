'use strict';
define(['app','AlertController','DashboardService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.controller('DashBoardController', 
	 ['$scope','$rootScope','$location','DashboardService',
	 function($scope, $rootScope, $location, DashboardService){
		$rootScope.pageTitle = 'Dashboard';
		$scope.dashboard = {};
		var limit = 5;
		
		DashboardService.latestStudent().then(function (res) {
			if (res) {
				$scope.dashboard.students = res;
			};
		});
		DashboardService.latestBatch().then(function (res) {
			if (res) {
				$scope.dashboard.batches = res;
			};
		});
		DashboardService.latestPayment().then(function (res) {
			if (res) {
				$scope.dashboard.payments = res;
			};
		});

		DashboardService.latestDues().then(function (res) {
			if (res) {
				$scope.dashboard.dues = res;
			};
		});

		DashboardService.resultCount().then(function (res) {
			$scope.dashboard.summary = res;
		})
		
		
		
	}]);
});