(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .factory('PlanService', PlanService)
  ;

  function PlanService($http) {
    var service = {
      getBiologyPlan  : getBiologyPlan,
      getBotanyPlan   : getBotanyPlan,
      getEcologyPlan  : getEcologyPlan
    };

    return service;

    function getBiologyPlan() {
      return $http.get('assets/json/biology-major.json');
    }

    function getBotanyPlan() {
      return $http.get('assets/json/biology-botany.json');
    }

    function getEcologyPlan() {
      return $http.get('assets/json/biology-ecology.json');
    }

  }
})();