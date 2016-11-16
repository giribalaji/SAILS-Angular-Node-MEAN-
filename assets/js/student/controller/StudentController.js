'use strict';
define(['app', 'StudentService'], function (app) {
	/**
	 * LoginController
	 * @param  {[type]} $scope                                
	 * @param  {[type]} $rootScope                            
	 * @param  {[type]} $location                             
	 * @param  {[type]} APIService                        
	 */
	app.register.controller('StudentController', ['$scope', '$rootScope', '$location', 'StudentService', function ($scope, $rootScope, $location, StudentService) {
		$rootScope.pageTitle = 'Manage Student';
		$scope.students = [];
		
		if (!$scope.students.length) {
			StudentService.list().then(function (data) {
				$scope.students = data.response;
				$scope.studentsList = [];
				$scope.studentsList.push({});
				$scope.studentsList.forEach(function (student) {
					student.bsTableControl = {
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
								field: 'stu_first_name',
								title: 'Name',
								sortable: true,
								formatter :  function(data, row, index){
									return "<a href='#/student/id/"+ row.id +"' >" + row.stu_first_name +" "+ (row.stu_middle_name || '') +" "+ (row.stu_last_name || '') + "</a>";
								}
								}, {
									field: 'stu_email_id',
									title: 'Email',
									align: 'left',
									valign: 'bottom',
									sortable: true
								}, {
									field: 'stu_mobile_no',
									title: 'Phone No',
									align: 'left',
									valign: 'bottom',
									sortable: true
								}, {
									field: 'stu_admission_date',
									title: 'Admission Date',
									align: 'left',
									valign: 'bottom',
									sortable: true
								},{
									field: 'id',
									title: 'Country',
									align: 'left',
									valign: 'bottom',
									sortable: true,
									formatter :  function(data, row, index){
										return "<a href='#/student/edit/"+ row.id +"' >Edit</a>";
									}
								}]
						}
					};

				});
			});
		};


	}]);
});