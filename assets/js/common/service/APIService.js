'use strict';
define(['app','API'], function (app) {
    
    
	app.register.service('APIService', ['webService','API', function (webService, API) {
		this.User = {
			login : function (user) {              
				return webService.callAPI(API.User.login.method, API.User.login.url, user,API.User.login.params);
			},
            register : function (user) {
                var params = API.User.register.params;
                angular.merge(params,user);
                return webService.callAPI(API.User.register.method, API.User.register.url, params);
            }

		}
	}]);
	
	app.register.service('webService', ['$http','$q','$rootScope','$base64', function($http, $q, $rootScope,$base64) { 
        
       

        function handleError( response ) {        
            if (response.data.error) {
                return( $q.reject(response.data.error) );
            }
            // Otherwise, use expected error message.
            return( $q.reject( response.data.error) );
        }
      
        function handleSuccess( response ) {
            return( response.data );
        }


		this.callAPI = function (method,url,data,params) { 
            var request = $http({
                method: method,
                url: url,                
                data: data || {},
                params: params || {} ,                     
            });
            
            return( request.then( handleSuccess, handleError ) );
		}
	}]); 

});