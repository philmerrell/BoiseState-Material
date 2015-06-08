(function () {
  'use strict';

  angular
    .module('boisestate')
    .controller('AppCtrl', AppCtrl)
  ;

  function AppCtrl($mdSidenav, $mdToast, $state, DegreeService) {
    var app = this;

    app.toggleMenu = toggleMenu;
    app.degreeService = DegreeService;
    app.showSimpleToast = showSimpleToast;
    app.state = $state;

    activate();

    ////////////////////////

    function activate() {

    }

    function toggleMenu() {

      $mdSidenav('left').toggle();
    }

    function showSimpleToast () {
      $mdToast.show({
        templateUrl: 'core/toast.tpl.html',
        hideDelay: 3000,
        position: 'top right'
      });

    }

  }
})();