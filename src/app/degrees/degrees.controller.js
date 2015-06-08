(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .controller('DegreesCtrl', DegreesCtrl)
  ;

  function DegreesCtrl($q, $rootScope, $scope, DegreeService, DegreeFilterService) {
    var vm = this;

    vm.degrees = [];
    vm.degreeFilterService = DegreeFilterService;
    vm.filterDegrees = [];
    vm.greaterThan = greaterThan;
    vm.activeFilters = DegreeFilterService.getActiveFilters();
    vm.removeFilter = removeFilter;

    vm.interests = ["Architecture", "Health & Medicine", "Law", "Sports", "Basket Weaving"]

    activate();

    ///////////////////////////////

    function activate() {
      var promises = [getDegrees()];
      DegreeService.setCurrentDegreeTitle(null);

      return $q.all(promises);
    }

    function getDegrees() {
      return DegreeService.getDegrees().then(function(result) {
        vm.degrees = result.data;
        return vm.degrees;
      })
    }

    function removeFilter(filterObj) {
      $rootScope.$broadcast('filter:remove', filterObj);
    }

    function greaterThan(mathRequirement) {
      return function(degree) {
        if(degree.MathRequirement >= mathRequirement) {
          return true;
        } else {
          return false;
        }
      }
    }

    $scope.$watch(function() {
      return vm.filterDegrees;
    }, function(newValues) {
      DegreeService.setFilterDegreeLength(newValues.length);
      console.log(newValues.length);
    }, true);
  }

})();