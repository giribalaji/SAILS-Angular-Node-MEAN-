'use strict';
define(['app', 'StudentService', 'CourseService', 'BatchService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
  app.register.controller('AddStudentController', ['$scope', '$rootScope', '$location', 'StudentService', '$routeParams', 'CourseService', 'BatchService',
    function ($scope, $rootScope, $location, StudentService, $routeParams, CourseService, BatchService) {

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
      }
      $scope.students = [];
      //Mask
      $("[data-mask]").inputmask();
      CourseService.list().then(function (data) {
        $scope.courses = data.response;
      });
      BatchService.list().then(function (data) {
        $scope.batches = data.response;
      });
      //Load student for edit case
      if ($routeParams.id) {
        $scope.edit = true;
        StudentService.find($routeParams.id).then(function (res) {
          if (res.success == true) {
            $scope.student = res.response;
            StudentService.payment($routeParams.id).then(function (res) {
              if (res.success == true) {
                $scope.student.payment = res.response;
              };
            })
          };
        })
      }

      var profile = {
        "stu_first_name": "",
        "stu_middle_name": "",
        "stu_last_name": "",
        "stu_gender": "",
        "stu_dob": "",
        "stu_email_id": "",
        "stu_admission_date": "",
        "stu_photo": "",
        "stu_mobile_no": "",
        "country": ""
      };
      $scope.addStudent = function (student) {
        angular.extend(profile, student.profile)
        StudentService.create(student).then(function (response) {
          $location.path('/student')
        })
      };
      $scope.updatedStudent = function (student) {
        console.log(student);
        StudentService.update(student.id, student).then(function (response) {
          $location.path('/student')
        })
      };

    }]);
});