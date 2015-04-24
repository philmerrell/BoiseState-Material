(function () {
  'use strict';

  angular
    .module('boisestate')
    .controller('AppCtrl', AppCtrl)
  ;

  function AppCtrl($mdSidenav) {
    var app = this;

    app.toggleMenu = toggleMenu;

    activate();

    ////////////////////////

    function activate() {

    }

    function toggleMenu() {

      $mdSidenav('left').toggle();
    }

  }
})();