'use strict';

/* Services */

var worldcupServices = angular.module('worldcupServices', ['ngResource']);

worldcupServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
