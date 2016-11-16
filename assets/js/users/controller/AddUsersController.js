'use strict';
define(['app','UsersService'], function(app) {
	
	app.register.controller('AddUsersController', ['$scope','$rootScope', '$location','$routeParams','UsersService', function($scope, $rootScope, $location, $routeParams, UsersService){
		$rootScope.pageTitle = 'Add Users';
		$rootScope.breadcrumb = {
			"stepone" :{
				url : "#/",
				label : "Home"
			},
			"steptwo":{
				url : "#/users",
				label : "Users"
			},
			"stepthree":{
				label : "Add Users"
			}
		}
		console.log($rootScope);
		$scope.updatedUsers = function  (users) {
			users.created_by = 1;
			users.updated_by = 1;
			users.is_block = 0;

			UsersService.create(users).then(function (res) {
				if (res) {
					console.log('User-service-1',res);
					$location.path('/users')
				}
                else
                    {
                        console.log('User-service-1',res);
                        $location.path('/users')
                    }
			})
		}
		
	}])
})