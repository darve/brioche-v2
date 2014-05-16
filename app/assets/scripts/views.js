angular.module('BriocheApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/home.html',
    "<h1>Welcome to Brioche</h1>"
  );

}]);
