(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .controller('DegreeDetailCtrl', DegreeDetailCtrl)
  ;

  function DegreeDetailCtrl($stateParams) {
    var vm = this;

    vm.state = $stateParams.id;
  }

})();