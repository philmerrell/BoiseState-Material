(function() {
  'use strict';

  angular
    .module('boisestate.degree', ['ui.router'])
    .config(DegreeConfig)
  ;

  function DegreeConfig($stateProvider) {
    $stateProvider
      .state('degrees', {
        url: '/degrees',
        abstract: true,
        views: {
          'main': {
            template: '<div layout="row" flex ui-view></div>'
          },
          'menu': {
            templateUrl: 'menu/degree-filter.tpl.html',
            controller: 'DegreeFilterCtrl as vm'
          }
        }
      })

      .state('degrees.search', {
        url: '/',
        templateUrl: 'degrees/degrees.tpl.html',
        controller: 'DegreesCtrl as vm'
      })

      .state('degrees.detail', {
        url: '/:id',
        templateUrl: 'degrees/degree-detail.tpl.html',
        controller: 'DegreeDetailCtrl as vm',
        data: {
          pageTitle: 'Detail'
        }
      })
  }
})();