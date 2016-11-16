'use strict';
define(['app','CourseService'], function(app) {
	
	app.register.controller('AddCourseController', ['$scope','$rootScope', '$location','$routeParams','CourseService', function($scope, $rootScope, $location, $routeParams, CourseService){
		$rootScope.pageTitle = 'Add Course';
		$rootScope.breadcrumb = {
			"stepone" :{
				url : "#/",
				label : "Home"
			},
			"steptwo":{
				url : "#/course",
				label : "Course"
			},
			"stepthree":{
				label : "Add Course"
			}
		}
		$scope.addCourse = function  (course) {
			CourseService.create(course).then(function (res) {
				if (res) {
					console.log(res);
					$location.path('/course')
				};
			})
		}
		if ($routeParams.id) {
			$rootScope.pageTitle ="Edit Course";			
			CourseService.find($routeParams.id).then(function (data) {
				$scope.course = data.response;
			});
		};

		$scope.updatedCourse = function (course) {			
			CourseService.update(course).then(function (res) {
				if (res) {
					console.log(res);
					$location.path('/course')
				};
			})
		}

		// Editor options.
	  $scope.options = {
	    language: 'en',
	    allowedContent: true,
	    entities: false
	  };

	  // Called when the editor is completely ready.
	  $scope.onReady = function () {
	    // ...
	  };
		
	}])
})