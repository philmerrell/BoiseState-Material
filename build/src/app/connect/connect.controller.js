(function() {
  'use strict';

  angular
    .module('boisestate.connect')
    .controller('ConnectCtrl', ConnectCtrl)
  ;


  function ConnectCtrl($mdDialog) {
    var vm = this;

    vm.closeDialog = closeDialog;

    ////////////////////////////


    function closeDialog() {
      $mdDialog.cancel();
    }
  }

})();