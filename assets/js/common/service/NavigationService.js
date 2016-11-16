'use strict';
define(['app','APIService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */


	app.register.service('NavigationService', ['webService', function (webService) {
		var navigationJSONUrl = "js/common/nav.json";
		this.leftnav = function () {              
				return webService.callAPI("GET", navigationJSONUrl,{},{});
		}
	}]);
});