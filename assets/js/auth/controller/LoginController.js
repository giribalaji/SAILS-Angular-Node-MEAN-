'use strict';
define(['app','APIService','AlertService','AlertController','ProfileService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.controller('LoginController', ['$scope', '$rootScope', '$location', 'APIService', 'AlertService', 'ProfileService', function($scope, $rootScope, $location, APIService, AlertService, ProfileService){
		//Page title
		$rootScope.title = "Login Page";
		$scope.user = {
				user_login_id : "admin",
				user_password : "admin"			
		}
		/**
		 * Submit Handler for login
		 * @param  {[type]} user [description]
		 * @return {[type]}      [description]
		 */
		$scope.submitLogin = function(user){
			
			//Calling APIService for server login	
			APIService.User.login(user).then(function(data){ 
				$rootScope.error = '';
				if (data.success == true) {
					$rootScope.isLoggedIn  = true;
					$rootScope.username  = $scope.user.user_login_id;
					window.sessionStorage.setItem('auth.isLogin', true);
					window.sessionStorage.setItem('username', $scope.user.user_login_id);

					//Get Profile
					if ($rootScope.isLoggedIn) {
						$location.path('/')
					};
				};
			},function(error){				
	            AlertService.add(error);
			});
		};
				
	}])
});