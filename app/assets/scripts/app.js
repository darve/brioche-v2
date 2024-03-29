
/*  Romeo Prototype
/* ================================== */

(function(w,d,n,ng,ns) {

    'use strict';

    var app = ng.module(ns /* module name */,
                       [ns + '.controllers',
                        ns + '.services',
                        ns + '.filters',
                        'ngRoute'] /* module dependencies */);

    app.config(['$routeProvider', function( $routeProvider ){
        $routeProvider.when('/', { templateUrl: 'home.html' });
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

    app.run(['$timeout', '$rootScope', '$http', function($timeout, $rootScope, $http) {

    }]);

})(window,document,navigator,window.angular,'BriocheApp');