'use strict';
define(['app', 'BatchService', 'CourseService'], function (app) {

	app.register.controller('BatchController', ['$scope', '$rootScope', '$location', '$routeParams', 'BatchService', 'CourseService', function ($scope, $rootScope, $location, $routeParams, BatchService, CourseService) {
		$rootScope.pageTitle = 'Manage Batch';
		$rootScope.breadcrumb = {
			"stepone": {
				url: "#/",
				label: "Home"
			},
			"steptwo": {
				url: "#/batch",
				label: "Batch"
			}
		};

		$scope.batchs = [];
		if (!$scope.batchs.length) {
			BatchService.list().then(function (data) {
				$scope.batchs = data.response;
				$scope.batchList = [];
				$scope.batchList.push({});
				$scope.batchList.forEach(function (pay) {
					pay.bsTableControl = {
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
								field: 'title',
								title: 'Batch Title',
								align: 'left',
								valign: 'bottom',
								sortable: true,
								formatter :  function(data, row, index){
									return "<a href='#/batch/edit/"+ row.id +"' >" + data + "</a>";
								}
							},{
								field: 'course.course_name',
								title: 'Course Id',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'start_date',
								title: 'Start Date',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'end_date',
								title: 'End Date',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'frequency',
								title: 'Frequency',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'start_time',
								title: 'Start Time',	
								align: 'left',
								valign: 'bottom',						
								sortable: true
							},{
								field: 'end_time',
								title: 'End Time',
								align: 'left',
								valign: 'bottom',								
								sortable: true
							},{
								field: 'duration',
								title: 'Duration',
								align: 'left',
								valign: 'bottom',								
								sortable: true
							},{
								field: 'status',
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

		if ($routeParams.id) {
			$rootScope.pageTitle = "Edit Batch";
			$rootScope.breadcrumb.stepthree = {

			};

			BatchService.find($routeParams.id).then(function (data) {
				$scope.batch = data;
			});

			CourseService.list().then(function (data) {
				$scope.courses = data.response;
			});
		};

		$scope.updatedbatch = function (batch) {
			BatchService.update(batch).then(function (res) {
				if (res) {
					console.log(res);
				};
			})
		};
	}])
})