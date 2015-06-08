(function() {
  'use strict';

  angular
    .module('boisestate.services')
    .factory('DegreeService', DegreeService)
  ;

  function DegreeService($http) {

    var filterDegreeLength, currentDegreeTitle;

    var service = {
      getCurrentDegreeTitle: getCurrentDegreeTitle,
      getDegrees            : getDegrees,
      setFilterDegreeLength: setFilterDegreeLength,
      getFilterDegreeLength: getFilterDegreeLength,
      setCurrentDegreeTitle: setCurrentDegreeTitle
    };

    return service;

    ////////////////////////////

    function getCurrentDegreeTitle() {
      return currentDegreeTitle;
    }

    function getDegrees() {
      return $http.get('/assets/json/degrees.json', {cache: true});
    }

    function setFilterDegreeLength(num) {
      console.log('service', num);
      filterDegreeLength = num;
    }

    function getFilterDegreeLength() {
      return filterDegreeLength;
    }

    function setCurrentDegreeTitle(title) {
      currentDegreeTitle = title;
    }
  }
})();