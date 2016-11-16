'use strict';
define(['app'], function (app) {
	app.directive('a', function() {
	    return {
	        restrict: 'E',
	        link: function(scope, elem, attrs) {
	            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
	                elem.on('click', function(e){
	                    e.preventDefault();
	                });
	            }
	        }
	   };
	});
	app.directive('message', function () {
		return {
			restrict : "E",
			scope : {
				alerts : "=alerts"
			},
			templateUrl : "js/common/views/alert.html",
			link : function($scope, element, attributes) {
				element.on('closed.bs.alert', function () {
				  alert('sadsad');
				})
			}
		}
	});
	app.directive('autoComplete', function($timeout) {
	    return function(scope, element, iAttrs) {
	            element.autocomplete({
	                source: scope[iAttrs.uiItems],
	                select: function() {
	                    $timeout(function() {
	                      element.trigger('input');
	                    }, 0);
	                }
	            });
	    };
	});
});