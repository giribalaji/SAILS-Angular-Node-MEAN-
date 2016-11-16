'use strict';
define(['app','UsersService'], function(app) {
	
	app.register.controller('UsersController', ['$scope','$rootScope', '$location','$routeParams','UsersService', function($scope, $rootScope, $location, $routeParams, UsersService){
		$rootScope.pageTitle = 'Manage Users';
		$rootScope.breadcrumb = {
			"stepone" :{
				url : "#/",
				label : "Home"
			},
			"steptwo":{
				url : "#/users",
				label : "Users"
			}
		}
		$scope.users = [];
		if (!$scope.users.length) {
			UsersService.list().then(function (data) {
				$scope.users = data;
			});
		};

		if ($routeParams.id) {
			$rootScope.pageTitle ="Edit Users";
			$rootScope.breadcrumb.stepthree = {
				
			};
			
			UsersService.find($routeParams.id).then(function (data) {
				$scope.users = data.response;
			});
		};

		$scope.updatedUsers = function (users) {
			UsersService.create(users).then(function (res) {
				if (res) {
					console.log(res);
					$location.path('/users')
				};
			})
		}

		
		
	}])
})