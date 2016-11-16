'use strict';
define(['app', 'PaymentTypeService'], function (app) {

	app.register.controller('PaymentTypeController', ['$scope', '$rootScope', '$location', '$routeParams', 'PaymentTypeService', 	function ($scope, $rootScope, $location, $routeParams, PaymentTypeService) {
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


				$scope.paymentTypes = [];
				if (!$scope.paymentTypes.length) {
					PaymentTypeService.list().then(function (data) {
						$scope.paymentTypes = data;
					});
				};


				if ($routeParams.id) {
					$rootScope.pageTitle = "Edit Payment";
					$rootScope.breadcrumb.stepthree = {

					};

					PaymentTypeService.find($routeParams.id).then(function (data) {
						$scope.payment = data;
					});
				};

				$scope.addPaymentType = function (paymentType) {
					PaymentTypeService.create(paymentType).then(function (res) {
						if (res) {
							$scope.paymentTypes.push(res)
						};
					})
				}

			


			}])
})