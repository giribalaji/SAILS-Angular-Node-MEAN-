'use strict';
define(['app'], function (app) {
	app.directive('sidebarRight', function () {
		return {
			restrict : "EA",
			templateUrl : "js/common/views/aside-right.html",
			transclude: true
		}
	})
});