(function() {
  'use strict';

  angular
    .module('boisestate.compare')
    .controller('CompareCtrl', CompareCtrl)
  ;

  function CompareCtrl() {
    var vm = this;
    vm.compare = ['Philosophy', 'Computer Science', 'Biology']

  }

})();