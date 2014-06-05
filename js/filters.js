'use strict';

/* Filters */

angular.module('worldcupFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}).filter('score', function() {
  return function(input) {
    return input ? input : '0';
  };
});
