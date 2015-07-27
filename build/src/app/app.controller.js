(function () {
  'use strict';

  angular
    .module('boisestate')
    .controller('AppCtrl', AppCtrl)
  ;

  function AppCtrl($mdToast, $mdDialog, $mdMedia, $state, $scope, $window, DegreeService) {
    var app = this;

    app.degreeService = DegreeService;
    app.back = back;
    app.showSimpleToast = showSimpleToast;
    app.state = $state;
    app.showInterests = showInterests;
    app.showCharacteristics = showCharacteristics;
    app.showAdvanced = showAdvanced;
    app.showConnectDialog = showConnectDialog;
    app.flipTile = flipTile;
    app.tileFlipped = [];
    app.hideCompareToast = false;

    activate();

    ////////////////////////

    function activate() {

    }

    function back() {
      $window.history.back();
    }

    function flipTile(index, event) {
      DegreeService.flipTile(index);
      //app.tileFlipped[index] = !app.tileFlipped[index];
      event.stopPropagation();

    }

    function showSimpleToast () {

      var position = $mdMedia('sm') ? 'top right' : 'top right';

      $mdToast.show({
        templateUrl: 'core/toast.tpl.html',
        controller: 'ToastCtrl as vm',
        hideDelay: 0,
        position: position
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

    function showConnectDialog(ev) {
      $mdDialog.show({
        templateUrl: 'connect/connect.tpl.html',
        controller: 'ConnectCtrl as vm',
        parent: angular.element(document.body),
        targetEvent: ev
      });
    }

    $scope.$watch(function() {
      return DegreeService.getFlipped();
    }, function(newValues) {
      console.log(newValues);
      //DegreeService.setFilterDegreeLength(newValues.length);
      app.compareGroup = [];
      angular.forEach(newValues, function(value, index) {
        if(value) {
          app.compareGroup.push(value);
        } else {
          _.pullAt(app.compareGroup, index);
        }
      });

      if(app.compareGroup.length > 1) {

        if(app.hideCompareToast) {
          showSimpleToast();
        }

      } else if(app.compareGroup.length < 2) {
        $mdToast.cancel().then(function() {
          app.hideCompareToast = true;
        });
      }

    }, true);


  }
})();