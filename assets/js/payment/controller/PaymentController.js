'use strict';
define(['app', 'PaymentService'], function (app) {

	app.register.controller('PaymentController', ['$scope', '$rootScope', '$location', '$routeParams', 'PaymentService', 	function ($scope, $rootScope, $location, $routeParams, PaymentService) {
				$rootScope.pageTitle = 'Payment List';
				$rootScope.breadcrumb = {
					"stepone": {
						url: "#/",
						label: "Home"
					},
					"steptwo": {
						url: "#/payment",
						label: "Payment"
					}
				}


				$scope.payments = [];
				if (!$scope.payments.length) {
					PaymentService.list().then(function (data) {
						$scope.payments = data.response;
					});
				};


				if ($routeParams.id) {
					$rootScope.pageTitle = "Edit Payment";
					$rootScope.breadcrumb.stepthree = {

					};

					PaymentService.find($routeParams.id).then(function (data) {
						$scope.payment = data;
					});
				};

				$scope.updatedpayment = function (batch) {
					PaymentService.update(payment).then(function (res) {
						if (res) {
							console.log(res);
						};
					})
				}

				PaymentService.list().then(function (data) {

					$scope.paymentsList = [];
					$scope.paymentsList.push({});
					$scope.paymentsList.forEach(function (pay) {

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
									field: 'student.stu_first_name',
									title: 'Student',
									align: 'left',
									valign: 'bottom',
									sortable: true
								},
									{
										field: 'amount',
										title: 'Amount',
										align: 'left',
										valign: 'bottom',
										sortable: true
									},
									{
										field: 'type.title',
										title: 'Payment Type',
										align: 'left',
										valign: 'bottom',
										sortable: true
									},
									{
										field: 'type.account_no',
										title: 'Account Details',
										align: 'left',
										valign: 'bottom',
										sortable: true
									},
									{
										field: 'created_at',
										title: 'Date',
										align: 'left',
										valign: 'bottom',
										sortable: true
									},
									{
										field: 'course.course_name',
										title: 'Course',
										align: 'left',
										valign: 'bottom',
										sortable: true
									},
									{
										field: 'batch.title',
										title: 'Batch',
										align: 'left',
										valign: 'bottom',
										sortable: true
									}]
							}
	          	}

					});

				});


			}])
})