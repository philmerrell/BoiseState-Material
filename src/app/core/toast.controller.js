(function() {
  'use strict';

  angular
    .module('boisestate.core')
    .controller('ToastCtrl', ToastCtrl)
  ;

  function ToastCtrl($mdToast, $state, DegreeService) {

    var vm = this;

    vm.compare = compare;
    vm.resetFlipped = resetFlipped;


    function compare() {

      $state.go('compare');
      $mdToast.cancel();
    }

    function resetFlipped() {
      DegreeService.resetFlipped();
    }
  }

})();