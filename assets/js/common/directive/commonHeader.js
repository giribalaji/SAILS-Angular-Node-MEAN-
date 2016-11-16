'use strict';
define(['app'], function (app) {
	app.directive('commonHeader', function () {
		return {
			restrict : "EA",			
			templateUrl : "js/common/views/header.html",
			transclude: true
		}
	})
});