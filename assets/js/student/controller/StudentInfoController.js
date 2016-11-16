'use strict';
define(['app', 'StudentService', 'PaymentMethodService', 'PaymentTypeService'], function(app) {
    /**
     * LoginController
     * @param  {[type]} $scope                                
     * @param  {[type]} $rootScope                            
     * @param  {[type]} $location                             
     * @param  {[type]} APIService                        
     */
    app.register.controller('StudentInfoController', ['$scope', '$rootScope', '$location', 'StudentService', '$routeParams', 'PaymentMethodService', 'PaymentTypeService',
        function($scope, $rootScope, $location, StudentService, $routeParams, PaymentMethodService, PaymentTypeService) {

            $rootScope.pageTitle = 'Student Profile';
            $rootScope.breadcrumb = {
                "stepone": {
                    url: "#/",
                    label: "Home"
                },
                "steptwo": {
                    url: "#/student",
                    label: "Student"
                },
                "stepthree": {
                    label: "Student Profile"
                }
            };            
            $scope.students = [];
            $scope.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(),
                startingDay: 1
            };
            $scope.dateOptions2 = {
                formatYear: 'yy',
                minDate: new Date(),
                startingDay: 1
            }
            $scope.open1 = function() {
                $scope.popup1.opened = true;
            };
            $scope.open2 = function() {
                $scope.popup2.opened = true;
            };
            $scope.formats = ['yyyy-mm-dd', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[0];
            $scope.altInputFormats = ['M!/d!/yyyy'];
            $scope.popup1 = {
                opened: false
            };
            $scope.popup2 = {
                opened: false
            };


            /**
             * Find Student Info
             * @param  {[type]}
             * @return {[type]}
             */
            StudentService.find($routeParams.id).then(function(res) {
                if (res.success == true) {
                    $scope.student = res.response;
                    $scope.student.stu_full_name = $scope.student.stu_title + " " + $scope.student.stu_first_name + " " + $scope.student.stu_last_name;

                    StudentService.payment($routeParams.id).then(function(res) {
                        if (res.success == true) {
                            $scope.student.payment = res.response;
                        };
                    })
                }
            });
            
            $("[data-mask]").inputmask();

            $scope.paymentMethods = [];
            if (!$scope.paymentMethods.length) {
                PaymentMethodService.list().then(function(data) {
                    $scope.paymentMethods = data;
                });
            };
            $scope.paymentTypes = [];
            if (!$scope.paymentTypes.length) {
                PaymentTypeService.list().then(function(data) {
                    $scope.paymentTypes = data;
                });
            };


            /**
             * Collect Fee for student
             * @param {[type]} payment [description]
             */
            $scope.addPayment = function(payment) {

                var schema = {
                    'student_id': $scope.student.id,
                    'payment_method': payment.method.id,
                    'payment_type': payment.type.id,
                    'batch_id': $scope.student.batch.id,
                    'course_id': $scope.student.course.course_id,
                    'amount': payment.amount,
                    'payment_date': payment.date,
                    'fee_details': $scope.student.fee_details,
                    'fee_due_date': payment.due_date
                };

                //console.log(payment)

                StudentService.collectFee(schema).then(function(res) {
                    //console.log(res);
                    res.payment.method = payment.method;
                    res.payment.type = payment.type;
                    $scope.student.payment.push(res.payment);
                    $scope.student.fee_details = res.fee_details;
                })
            }

        }
    ]);
});


