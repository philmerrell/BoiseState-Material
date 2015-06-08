(function() {
  'use strict';

  angular
    .module('boisestate.home', ['ui.router'])
    .config(HomeConfig)
  ;

  function HomeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'main': {
            templateUrl: 'home/home.tpl.html',
            controller: 'HomeCtrl as vm'
          },
          'menu': {
            templateUrl: 'menu/degree-filter.tpl.html'
          }
        },
        data: {
          pageTitle: 'Degrees'
        }
      });
  }

})();