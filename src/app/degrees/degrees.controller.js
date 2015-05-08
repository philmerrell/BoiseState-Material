(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .controller('DegreesCtrl', DegreesCtrl)
  ;

  function DegreesCtrl($q, $rootScope, DegreeService, DegreeFilterService) {
    var vm = this;

    vm.degrees = [];

    vm.activeFilters = DegreeFilterService.getActiveFilters();
    vm.removeFilter = removeFilter;

    activate();

    ///////////////////////////////

    function activate() {
      var promises = [getDegrees()];

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
      console.log(filterObj);
    }
  }

})();