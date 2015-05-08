(function() {
  'use strict';

  angular
    .module('boisestate.services')
    .factory('DegreeService', DegreeService)
  ;

  function DegreeService($http) {

    var service = {
      getDegrees  : getDegrees
    };

    return service;

    ////////////////////////////

    function getDegrees() {
      return $http.get('/assets/json/degrees.json', {cache: true});
    }
  }
})();