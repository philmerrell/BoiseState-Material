(function () {
  'use strict';

  angular
    .module('boisestate.connect', ['ui.router'])
    .config(ConnectConfig)
  ;

  function ConnectConfig($stateProvider) {
    $stateProvider
      .state('connect', {
        url: '/connect',
        views: {
          'menu': {
            templateUrl: 'menu/degree-filter.tpl.html',
            controller: 'DegreeFilterCtrl as vm'
          },
          'main': {
            templateUrl: 'connect/connect.tpl.html'
          }
        },
        data: {
          pageTitle: 'Compare'
        }
      });
  }
})();