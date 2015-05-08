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