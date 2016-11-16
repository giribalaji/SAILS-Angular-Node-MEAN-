'use strict';
define(['app', 'PaymentMethodService'], function (app) {

	app.register.controller('PaymentMethodController', ['$scope', '$rootScope', '$location', '$routeParams', 'PaymentMethodService', 	function ($scope, $rootScope, $location, $routeParams, PaymentMethodService) {
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


				$scope.paymentMethods = [];
				if (!$scope.paymentMethods.length) {
					PaymentMethodService.list().then(function (data) {
						$scope.paymentMethods = data;
					});
				};


				// if ($routeParams.id) {
				// 	$rootScope.pageTitle = "Edit Payment";
				// 	$rootScope.breadcrumb.stepthree = {

				// 	};

				// 	PaymentMethodService.find($routeParams.id).then(function (data) {
				// 		$scope.payment = data;
				// 	});
				// };

				$scope.addPaymentMethod = function (paymentMethods) {
					PaymentMethodService.create(paymentMethods).then(function (res) {
						if (res) {
							$scope.paymentMethods.push(res);
						};
					})
				}



			}])
})