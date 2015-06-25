(function () {
  'use strict';

  angular
    .module('boisestate')
    .controller('AppCtrl', AppCtrl)
  ;

  function AppCtrl($mdSidenav, $mdToast, $mdBottomSheet, $state, $scope, DegreeService) {
    var app = this;

    app.toggleMenu = toggleMenu;
    app.degreeService = DegreeService;
    app.showSimpleToast = showSimpleToast;
    app.state = $state;
    app.showFilterBottomSheet = showFilterBottomSheet;
    app.showInterests = showInterests;
    app.flipTile = flipTile;
    app.tileFlipped = [];

    activate();

    ////////////////////////

    function activate() {

    }

    function toggleMenu() {

      $mdSidenav('left').toggle();
    }

    function showFilterBottomSheet($event) {
      $mdBottomSheet.show({
        templateUrl: 'core/bottom-sheet-filter.tpl.html',
        controller: 'BottomSheetCtrl as vm',
        targetEvent: $event
      }).then(function(clickedItem) {
        //$scope.alert = clickedItem.name + ' clicked!';
      });
    }

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


  }
})();