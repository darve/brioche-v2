(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('MainCtrl', ['$scope', '$rootScope', '$http', '$timeout', '$location', '$templateCache', '$compile', function($scope, $rootScope, $http, $timeout, $location, $templateCache, $compile) {}]);


})(window,document,window.angular,'BriocheApp','controllers');