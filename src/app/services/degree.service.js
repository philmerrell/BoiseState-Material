(function() {
  'use strict';

  angular
    .module('boisestate.services')
    .factory('DegreeService', DegreeService)
  ;

  function DegreeService($http) {

    var filterDegreeLength, currentDegreeTitle;
    var tileFlipped = [];

    var service = {
      getCurrentDegreeTitle : getCurrentDegreeTitle,
      getDegrees            : getDegrees,
      getFlipped            : getFlipped,
      getTile               : getTile,
      resetFlipped          : resetFlipped,
      flipTile              : flipTile,
      setFilterDegreeLength : setFilterDegreeLength,
      getFilterDegreeLength : getFilterDegreeLength,
      setCurrentDegreeTitle : setCurrentDegreeTitle
    };

    return service;

    ////////////////////////////

    function flipTile(index) {
      console.log(tileFlipped);
      tileFlipped[index] = !tileFlipped[index];
    }

    function getFlipped() {
      return tileFlipped;
    }

    function getTile(index) {
      return tileFlipped[index];
    }

    function resetFlipped() {
      tileFlipped = [];
    }

    function getCurrentDegreeTitle() {
      return currentDegreeTitle;
    }

    function getDegrees() {
      return $http.get('assets/json/degrees.json', {cache: true});
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