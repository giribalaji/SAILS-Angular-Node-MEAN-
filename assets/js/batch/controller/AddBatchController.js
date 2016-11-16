'use strict';
define(['app', 'BatchService', 'CourseService'], function (app) {

	app.register.controller('AddBatchController',
		['$scope', '$rootScope', '$location', '$routeParams', 'BatchService', 'CourseService',
			function ($scope, $rootScope, $location, $routeParams, BatchService, CourseService) {
				$rootScope.pageTitle = 'Add Batch';
				$rootScope.breadcrumb = {
					"stepone": {
						url: "#/",
						label: "Home"
					},
					"steptwo": {
						url: "#/batch",
						label: "Batch"
					}
				}
				//
				var batchSchema = {
					"title": "",
					"course_id": "",
					"start_date": "",
					"end_date": "",
					"frequency": "",
					"start_time": "",
					"end_time": "",
					"duration": "",
					"status": ""
				};
				//Mask
				$("[data-mask]").inputmask();
				CourseService.list().then(function (data) {
					$scope.courses = data.response;
				});
				$scope.timedifference = function (ts, te) {
					if (ts && te) {
						var t1 = ts.split(':'),
							t2 = te.split(':');
						if (t1.length == 3 && t2.length == 3) {
							console.log(parseInt(t2[1]) - (parseInt(t1[1]) / 60));
							$scope.batch.duration = (parseInt(t2[0]) - parseInt(t1[0])) + ((parseInt(t2[1]) / 60) - (parseInt(t1[1]) / 60));
						}
					}
				}
				$scope.addBatch = function (batch) {
					
					angular.extend(batchSchema, batch);

					BatchService.create(batch).then(function (res) {
						if (res) {
							$location.path('/batch')
						};
					});
				}

				
				if ($routeParams.id) {
					$rootScope.pageTitle = "Edit Batch";
					BatchService.find($routeParams.id).then(function (data) {
						$scope.batch = data;
					});
				};

				$scope.updatedBatch = function (batch) {					
					var batchSchema = {
						"title": batch.title,
						"course_id": batch.course.course_id,
						"start_date": batch.start_date,
						"end_date": batch.end_date,
						"frequency": batch.frequency,
						"start_time": batch.start_time,
						"end_time": batch.end_time,
						"duration": batch.duration,
						"status": batch.status
					};
					BatchService.update(batch.id, batchSchema).then(function (res) {
						if (res) {
							console.log(res);
							$location.path('/batch')
						};
					})
				}

			}])
})