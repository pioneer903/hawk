'use strict';

/**
 * @ngdoc function
 * @name hawkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hawkApp
 */
angular.module('hawkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
