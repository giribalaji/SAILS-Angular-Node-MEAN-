'use strict';
define(['app','CourseService'], function(app) {
	
	app.register.controller('CourseController', ['$scope','$rootScope', '$location','$routeParams','CourseService', function($scope, $rootScope, $location, $routeParams, CourseService){
		$rootScope.pageTitle = 'Manage Course';
		$rootScope.breadcrumb = {
			"stepone" :{
				url : "#/",
				label : "Home"
			},
			"steptwo":{
				url : "#/course",
				label : "Course"
			}
		}
		$scope.courses = [];
		
		if (!$scope.courses.length) {
			CourseService.list().then(function (data) {
				$scope.courses = data.response;
				$scope.courseList = [];
				$scope.courseList.push({});
				$scope.courseList.forEach(function (course) {
					course.bsTableControl = {
						options: {
							data: data.response,
							cache: false,
							striped: true,
							pagination: true,
							paginationVAlign: "bottom",
							pageSize: 25,
							pageList: [25, 50, 100, 200],
							search: true,
							showColumns: true,
							showRefresh: false,
							minimumCountColumns: 2,
							clickToSelect: false,
							showToggle: true,
							maintainSelected: true,
							columns: [{
								field: 'course_name',
								title: 'Course Name',	
								align: 'left',
								valign: 'bottom',						
								sortable: true,
								formatter :  function(data, row, index){
									return "<a href='#/course/edit/"+ row.course_id +"' >" + data + "</a>";
								}
							},{
								field: 'course_alias',
								title: 'Course Alias',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'course_code',
								title: 'Course Code',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'createdAt',
								title: 'Created At',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'updatedAt',
								title: 'Updated At',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'is_status',
								title: 'Status',
								align: 'left',
								valign: 'bottom',								
								sortable: true
							}]
						}
					};

				});
			});
		};
	}])
})