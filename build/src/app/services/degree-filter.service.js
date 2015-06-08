(function() {
  'use strict';

  angular
    .module('boisestate.services')
    .factory('DegreeFilterService', DegreeFilterService)
  ;

  function DegreeFilterService() {
    var activeFilters = [];
    var degreeType = undefined;
    var campusLocation = undefined;
    var mathRequirement = 0;

    var service = {
      addFilterChip       : addFilterChip,
      getActiveFilters    : getActiveFilters,
      getDegreeType       : getDegreeType,
      getLocation         : getLocation,
      getMathRequirement  : getMathRequirement,
      removeFilter        : removeFilter,
      setDegreeType       : setDegreeType,
      setLocation         : setLocation,
      setMathRequirement  : setMathRequirement

    };

    return service;

    //////////////////////////////

    function addFilterChip(filterObj) {
      var filter;

      switch(filterObj.type) {

        case 'Interest':
          activeFilters.push(filterObj);
          break;

        case 'Degree Type':
          filter = _.find(activeFilters, {'type': 'Degree Type'});
          _.pull(activeFilters, filter);

          activeFilters.push(filterObj);
          break;

        case 'Location':
          filter = _.find(activeFilters, {'type': 'Location'});
          _.pull(activeFilters, filter);

          activeFilters.push(filterObj);
          break;

        case 'Math':
          filter = _.find(activeFilters, {'type': 'Math'});
          _.pull(activeFilters, filter);

          if(filterObj.name > 0) {
            activeFilters.push(filterObj);
          }
          break;

      }

    }

    function getActiveFilters() {
      return activeFilters;
    }

    function getDegreeType() {
      return degreeType;
    }

    function getLocation() {
      return campusLocation;
    }

    function getMathRequirement() {
      return mathRequirement;
    }

    function removeFilter(filterObj) {
      var filter = _.find(activeFilters, {'name': filterObj.name});
      _.pull(activeFilters, filter);

    }

    function setDegreeType(degree) {
      degreeType = degree;
    }

    function setLocation(location) {
      campusLocation = location;
    }

    function setMathRequirement(requirement) {
      mathRequirement = requirement;
    }


  }
})();