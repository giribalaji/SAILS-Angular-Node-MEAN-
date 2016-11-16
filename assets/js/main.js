requirejs.config({
   baseUrl: './',
    paths : {
      //Common Module
      "angular"                     : "bower_components/angular/angular.min",
      "angular-route"               : "bower_components/angular-route/angular-route.min",
      "angular-base64"              : "bower_components/angular-base64/angular-base64",
      "angular-resource"            : "bower_components/angular-resource/angular-resource.min",
      "angular-bootstrap"           : "bower_components/angular-bootstrap/ui-bootstrap-tpls.min", 
      "angular-table"               : "bower_components/bootstrap-table/dist/bootstrap-table.min", 
      "angular-bootstrap-table"     : "bower_components/bootstrap-table/dist/extensions/angular/bootstrap-table-angular.min", 
      "angular-ckeditor"            : "bower_components/angular-ckeditor/angular-ckeditor.min",
      "ckeditor"                    : "bower_components/ckeditor/ckeditor",


      //App
      "app"                         : "js/app",
      "routeResolver"               : "js/common/service/routeresolver",
      "APIService"                  : "js/common/service/APIService",
      "API"                         : "js/config/constant",

      //Auth Module
      "LoginController"             : "js/auth/controller/LoginController",
      "LogoutController"            : "js/auth/controller/LogoutController",
      "RegisterController"          : "js/auth/controller/RegisterController",
      "AccountController"           : "js/auth/controller/AccountController",
      "ProfileService"              : "js/auth/service/ProfileService",

      //Comman Module
      "AlertController"             : "js/common/controller/AlertController",
      "AlertService"                : "js/common/service/AlertService",
      "ListService"                 : "js/common/service/ListService",
      "404Controller"               : "js/common/controller/404Controller",
      "commonHeader"                : "js/common/directive/commonHeader",
      "commonFooter"                : "js/common/directive/commonFooter",
      "sidebarLeft"                 : "js/common/directive/sidebarLeft",
      "sidebarRight"                : "js/common/directive/sidebarRight",
      "generalDirective"            : "js/common/directive/generalDirective",
      "NavigationService"           : "js/common/service/NavigationService",

      //Dashboard
      "DashBoardController"         : "js/dashboard/controller/DashBoardController",
      "DashboardService"            : "js/dashboard/service/DashboardService",

      //Student
      "StudentController"           : "js/student/controller/StudentController",
      "StudentInfoController"       : "js/student/controller/StudentInfoController",
      "AddStudentController"        : "js/student/controller/AddStudentController",
      "StudentService"              : "js/student/service/StudentService",

      //Course
      "CourseController"            : "js/course/controller/CourseController",
      "AddCourseController"         : "js/course/controller/AddCourseController",
      "CourseService"               : "js/course/service/CourseService",

      //Batch
      "BatchController"             : "js/batch/controller/BatchController",
      "AddBatchController"          : "js/batch/controller/AddBatchController",
      "BatchService"                : "js/batch/service/BatchService",

      //Payment
      "PaymentController"           : "js/payment/controller/PaymentController", 
      "PaymentService"              : "js/payment/service/PaymentService",

      //Payment
      "PaymentMethodController"     : "js/payment_method/controller/PaymentMethodController", 
      "PaymentMethodService"        : "js/payment_method/service/PaymentMethodService",

      //Payment
      "PaymentTypeController"       : "js/payment_type/controller/PaymentTypeController", 
      "PaymentTypeService"          : "js/payment_type/service/PaymentTypeService",

      //Users
      "UsersController"            : "js/users/controller/UsersController",
      "AddUsersController"         : "js/users/controller/AddUsersController",
      "UsersService"               : "js/users/service/UsersService",

     

    },
    shim : {
      'angular': {            
            exports: 'angular'
      },
      'angular-route': {            
            deps: ['angular'],
            exports: 'angular-route'
      }, 
      'angular-resource': {            
            deps: ['angular'],
            exports: 'angular-resource'
      },
      'angular-bootstrap': {            
            deps: ['angular'] 
      },
      'angular-ckeditor': {            
            deps: ['ckeditor'] 
      },
      'angular-bootstrap-table': {            
            deps: ['angular'] 
      },
      'angular-table': {            
            deps: ['angular'] 
      },      
      'app':{
            deps:['angular','angular-route','routeResolver','angular-resource','angular-ckeditor']
      },     
      'routeResolver':{
            deps:['angular-route']
      }
    }
});

// and the 'jquery-private' module, in the
// jquery-private.js file:
define(['angular', 'angular-bootstrap','angular-table', 'angular-bootstrap-table', 'angular-route','angular-resource','app','commonHeader', 'commonFooter', 'sidebarLeft', 'sidebarRight', 'generalDirective','AlertController'], function (angular) {
    angular.bootstrap(document, ['AngularAMD']);
});