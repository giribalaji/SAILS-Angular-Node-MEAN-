'use strict';
define(['app'], function (app) {
	app.directive('commonFooter', function () {
		return {
			restrict : "EA",
			templateUrl : "js/common/views/footer.html",
			transclude: true
		}
	})
});