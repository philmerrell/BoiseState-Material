(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .controller('DegreeDetailCtrl', DegreeDetailCtrl)
  ;

  function DegreeDetailCtrl($q, $stateParams, $timeout, DegreeService, PlanService) {
    var vm = this;

    vm.degree = null;
    vm.plan = [];
    vm.changePlan = changePlan;
    vm.concentrations = [
      {name: 'Biology BS, Biology', courses: getBiologyPlan()},
      {name: 'Biology BS, Botany', courses: getBotanyPlan()},
      {name: 'Biology BS, Ecology', courses: getEcologyPlan()}
    ];

    vm.showLoading = false;


    activate();

    ////////////////////////////

    function activate() {
      var promises = [getDegrees(), getBiologyPlan()];

      return $q.all(promises).then(function() {

      });

    }

    function changePlan() {
      vm.showLoading = true;
      $timeout(function() {
        vm.showLoading = false;
      }, 2000);

    }

    function getBiologyPlan() {

      return PlanService.getBiologyPlan().then(function(result) {
        console.log(result.data);
        vm.plan = result.data;
        return vm.plan;
      });
    }

    function getBotanyPlan() {
      return PlanService.getBotanyPlan().then(function(result) {
        vm.plan = result.data;
        return vm.plan
      });
    }

    function getEcologyPlan() {
      return PlanService.getEcologyPlan().then(function(result) {
        vm.plan = result.data;
        return vm.plan;
      });
    }

    function getDegrees() {
      return DegreeService.getDegrees().then(function(result) {
        vm.degree = _.find(result.data, {'UrlId': $stateParams.id});
        DegreeService.setCurrentDegreeTitle(vm.degree.Title);
        return vm.degree;
      });
    }

  }

})();