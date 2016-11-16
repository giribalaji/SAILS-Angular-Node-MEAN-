'use strict';
define(['app','ProfileService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.controller('AccountController', ['$scope','$rootScope','$location', 'ProfileService', function($scope, $rootScope, $location, ProfileService){
		
		if ($rootScope.user && $rootScope.user.userId) {
			// ProfileService.get($rootScope.user.userId).then(function(response) {
			// 	$scope.profile = response[0];
			// },function(err){
			// 	console.log(err);
			// });
		};
		$scope.user = {
			"first_name": "Sample",
		    "last_name": "User",
		    "email": "sample@user.com",
		    "image_url": "http://www.url.com/image.png",
		    "designation": "Lead UI Developer",
		    "company": "CouponDunia",
		    "skills": [
		      {
		        "name": "PHP",
		        "count": 20
		      },
		      {
		        "name": "MySQL",
		        "count": 5
		      },
		      {
		        "name": "JavaScript",
		        "count": 4
		      },
		      {
		        "name": "Frontend",
		        "count": 3
		      },
		      {
		        "name": "iOS",
		        "count": 2
		      }
		    ],
		    newskills : [
		    	"Ruby", "Node"
		    ]
		  };		
	}]);
});