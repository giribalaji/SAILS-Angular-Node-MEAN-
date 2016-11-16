'use strict';
define(['app'], function (app) {
	//['NavigationService', function (NavigationService)
	app.directive('sidebarLeft',  ['$http',function ($http) {
		return {
			restrict : "EA",
			templateUrl : "js/common/views/aside-left.html",
			transclude: true,
			link : function (scope, element, attr) {
				 console.log("response");
				// $http.get('js/common/nav.json').success(function(data) {
				// 	scope.navigations = data.nav_left;
				// });
			}
		}
	}]);
});