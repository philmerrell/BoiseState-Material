(function() {
  'use strict';

  angular
    .module('boisestate.compare', ['ui.router'])
    .config(CompareConfig)
  ;

  function CompareConfig($stateProvider) {
    $stateProvider
      .state('compare', {
        url: '/compare',
        views: {
          'menu': {
            templateUrl: 'menu/degree-filter.tpl.html',
            controller: 'DegreeFilterCtrl as vm'
          },
          'main': {
            templateUrl: 'compare/compare.tpl.html',
            controller: 'CompareCtrl as vm'
          }
        },
        data: {
          pageTitle: 'Compare'
        }
      })
  }

})();