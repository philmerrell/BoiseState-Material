(function() {
  'use strict';

  angular.module('boisestate.core')
    .controller('BottomSheetCtrl', BottomSheetCtrl);

  function BottomSheetCtrl($mdDialog, $mdBottomSheet) {

    var vm = this;

    vm.showInterests = showInterests;
    vm.showCharacteristics = showCharacteristics;
    vm.showAdvanced = showAdvanced;



    function showInterests(ev) {
      $mdDialog.show({
        templateUrl: 'core/interests.tpl.html',
        controller: 'InterestsCtrl as vm',
        parent: angular.element(document.body),
        targetEvent: ev
      })
        .then(function(answer) {
          //$scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          //$scope.alert = 'You cancelled the dialog.';
        });
    }

    function showCharacteristics(ev) {
      $mdDialog.show({
        templateUrl: 'core/characteristics.tpl.html',
        controller: 'InterestsCtrl as vm',
        parent: angular.element(document.body),
        targetEvent: ev
      })
        .then(function(answer) {
          //$scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          //$scope.alert = 'You cancelled the dialog.';
        });
    }

    function showAdvanced(ev) {
      $mdDialog.show({
        templateUrl: 'core/advanced.tpl.html',
        controller: 'InterestsCtrl as vm',
        parent: angular.element(document.body),
        targetEvent: ev
      })
        .then(function(answer) {
          //$scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          //$scope.alert = 'You cancelled the dialog.';
        });
    }

  }
})();