(function() {
  'use strict';

  angular
    .module('boisestate.services')
    .factory('DegreeFilterService', DegreeFilterService)
  ;

  function DegreeFilterService() {
    var activeFilters = [];

    var service = {
      addFilter         : addFilter,
      getActiveFilters  : getActiveFilters,
      removeFilter      : removeFilter
    };

    return service;

    //////////////////////////////


    function addFilter(filterObj) {
      activeFilters.push(filterObj);
      console.log(activeFilters);
    }

    function getActiveFilters() {
      return activeFilters;
    }

    function removeFilter(filterObj) {
      var index = activeFilters.indexOf(filterObj);
      activeFilters.splice(index, 1);
    }

  }
})();