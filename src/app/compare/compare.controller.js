(function() {
  'use strict';

  angular
    .module('boisestate.compare')
    .controller('CompareCtrl', CompareCtrl)
  ;

  function CompareCtrl() {
    var vm = this;

    //app.showCompare = false;
    vm.compare = ['Philosophy', 'Computer Science', 'Biology']

  }

})();