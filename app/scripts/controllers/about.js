'use strict';

/**
 * @ngdoc function
 * @name hawkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hawkApp
 */
angular.module('hawkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
