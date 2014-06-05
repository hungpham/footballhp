'use strict';

/* App Module */

var worldcupApp = angular.module('worldcupApp', [
  'ngRoute',
  'worldcupAnimations',

  'worldcupControllers',
  'worldcupFilters',
  'worldcupServices'
]);

worldcupApp.config(['$routeProvider',
  function($routeProvider) { 
    $routeProvider.
      when('/livescore', {
        templateUrl: 'partials/livescore.html',
        controller: 'LivescoreCtrl'
      }).
      when('/groups', {
        templateUrl: 'partials/groups.html',
        controller: 'GroupsCtrl'
      }).
      when('/fifa-rank', {
        templateUrl: 'partials/fifarank.html',
        controller: 'FifaRankCtrl'
      }).
      otherwise({
        redirectTo: '/groups'
      });
  }]);

worldcupApp.constant('COLOR_FALSE', '#9BC09A');
worldcupApp.constant('COLOR_TRUE', '#5cb85c');

