define(['routeResolver',"angular-base64",'angular-bootstrap'], function () {                                                                   

    //Angular module
	var app  = angular.module("AngularAMD", [
		'ngRoute',
		'ngResource',
		'routeResolverServices',
		"base64",
		'ui.bootstrap',
		'bsTable',
		'ckeditor']);  

	function getBool(val) {
	    return !!JSON.parse(String(val).toLowerCase());
	}
	//Check login before route
	app.run(['$location','$rootScope','$http', function($location, $rootScope, $http) {  
			
		$rootScope.$on('$routeChangeStart', function (eve, next, curr) {
			$rootScope.isLoggedIn = getBool(window.sessionStorage.getItem('auth.isLogin') || false);
			$rootScope.user = {
				userId  	: window.sessionStorage.getItem('userId'),
				firstname	: window.sessionStorage.getItem('firstname'),
				lastname 	: window.sessionStorage.getItem('lastname'),
				gender		: window.sessionStorage.getItem('gender'),
				picture		: window.sessionStorage.getItem('picture'),
				username	: window.sessionStorage.getItem('username')
			};
			//next : $$route {all route params,originalPath}
			if(next.$$route){
				if (next.$$route.secure == true && $rootScope.isLoggedIn == false) {
					$location.path('/login');
				}
			}
			
		});

		$http.get('js/common/nav.json').success(function(data) {
			$rootScope.navigations = data.nav_left;
		});
	}]);

	//Angular Routes
	app.config([
			'$routeProvider', 
			'routeResolverProvider', 
			'$controllerProvider',
	        '$compileProvider', 
	        '$filterProvider', 
	        '$provide', 
	        '$httpProvider',
        function (
        	$routeProvider, 
        	routeResolverProvider, 
        	$controllerProvider,
            $compileProvider, 
            $filterProvider, 
            $provide, 
            $httpProvider
            ) {

    	$httpProvider.defaults.useXDomain = true;
	    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	    
      	app.register = {
	        controller: $controllerProvider.register,
	        directive: $compileProvider.directive,
	        filter: $filterProvider.register,
	        factory: $provide.factory,
	        service: $provide.service,
	        constant: $provide.constant
	    };
	    //Define routes - controllers will be loaded dynamically
    	var route = routeResolverProvider.route;

		$routeProvider
			.when('/', 			route.resolve('js/dashboard/views/dashboard.html', 'DashBoardController', true))
			.when('/login', 	route.resolve('js/auth/views/login.html', 'LoginController', false))
			.when('/logout', 	route.resolve('js/auth/views/login.html', 'LogoutController', false))
			.when('/profile/id/:id', 	route.resolve('js/auth/views/profile.html', 'AccountController', true))
			.when('/404', 		route.resolve('js/common/views/404.html', '404Controller', false))
			//Modules
			.when('/student', 		route.resolve('js/student/views/student.html', 'StudentController', false))
			.when('/student/id/:id', 		route.resolve('js/student/views/studentinfo.html', 'StudentInfoController', false))
			.when('/student/add', 		route.resolve('js/student/views/edit.html', 'AddStudentController', false))
			.when('/student/edit/:id', 		route.resolve('js/student/views/edit.html', 'AddStudentController', false))
			//Course
			.when('/course', 			route.resolve('js/course/views/list.html', 'CourseController', true))
			.when('/course/edit/:id', 			route.resolve('js/course/views/edit.html', 'AddCourseController', true))
			.when('/course/add', 			route.resolve('js/course/views/edit.html', 'AddCourseController', true))
			//Batch
			.when('/batch', 			route.resolve('js/batch/views/list.html', 'BatchController', true))
			.when('/batch/edit/:id', 			route.resolve('js/batch/views/edit.html', 'AddBatchController', true))
			.when('/batch/add', 			route.resolve('js/batch/views/edit.html', 'AddBatchController', true))
			//Batch 
			.when('/payment', 			route.resolve('js/payment/views/list.html', 'PaymentController', true))
			.when('/payment/id/:id', 			route.resolve('js/payment/views/edit.html', 'PaymentController', true))
			.when('/payment/add', 			route.resolve('js/payment/views/edit.html', 'AddPaymentController', true))
			.when('/payment/edit/:id', 			route.resolve('js/payment/views/edit.html', 'AddPaymentController', true))
			//Payment Method
			.when('/paymentMethod', 			route.resolve('js/payment_method/views/list.html', 'PaymentMethodController', true))
			.when('/paymentMethod/edit/:id', 			route.resolve('js/payment_method/views/edit.html', 'PaymentMethodController', true))
			.when('/paymentMethod/add', 			route.resolve('js/payment_method/views/edit.html', 'PaymentMethodController', true))
			//Payment Type
			.when('/paymentType', 			route.resolve('js/payment_type/views/list.html', 'PaymentTypeController', true))
			.when('/paymentType/edit/:id', 			route.resolve('js/payment_type/views/edit.html', 'PaymentTypeController', true))
			.when('/paymentType/add', 			route.resolve('js/payment_type/views/edit.html', 'PaymentTypeController', true))
			//Users
			.when('/users', 			route.resolve('js/users/views/list.html', 'UsersController', true))
			.when('/users/id/:id', 			route.resolve('js/users/views/edit.html', 'UsersController', true))
			.when('/users/add', 			route.resolve('js/users/views/edit.html', 'AddUsersController', true))
			//Otherwise redirect to error page
			//.otherwise({redirectTo:'/'});

	}]);

	return app;	
});  




