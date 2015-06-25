(function () {
  'use strict';

  angular
    .module('boisestate')
    .controller('AppCtrl', AppCtrl)
  ;

  function AppCtrl($mdSidenav, $mdToast, $mdBottomSheet, $mdDialog, $state, $scope, DegreeService) {
    var app = this;

    //app.toggleMenu = toggleMenu;
    app.degreeService = DegreeService;
    app.showSimpleToast = showSimpleToast;
    app.state = $state;
    //app.showFilterBottomSheet = showFilterBottomSheet;
    app.showInterests = showInterests;
    app.showCharacteristics = showCharacteristics;
    app.showAdvanced = showAdvanced;
    app.flipTile = flipTile;
    app.tileFlipped = [];

    activate();

    ////////////////////////

    function activate() {

    }

    //function toggleMenu() {
    //
    //  $mdSidenav('left').toggle();
    //}

    function flipTile(index, event) {
      app.tileFlipped[index] = !app.tileFlipped[index];
      event.stopPropagation();

    }

    function showSimpleToast () {
      $mdToast.show({
        templateUrl: 'core/toast.tpl.html',
        hideDelay: 3000,
        position: 'top right'
      });

    }

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