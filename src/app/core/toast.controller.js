(function() {
  'use strict';

  angular
    .module('boisestate.core')
    .controller('ToastCtrl', ToastCtrl)
  ;

  function ToastCtrl($mdToast, $state) {

    var vm = this;

    vm.compare = compare;


    function compare() {

      $state.go('compare');
      $mdToast.cancel();
    }
  }

})();