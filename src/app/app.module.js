(function() {
  'use strict';

  angular
    .module('boisestate', ['ngMaterial', 'boisestate.core', 'boisestate.compare', 'boisestate.degree', 'boisestate.home', 'boisestate.services', 'templates-app'])
    .config(AppConfig)
  ;

  function AppConfig($mdThemingProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise( '/' );



    // TODO: move into SASS solution
    var boiseStatePrimary = $mdThemingProvider.extendPalette('blue', {
      '500':  '09347A',
      '400': '0169A4',
      '300': 'f6f6f6',
      'contrastDefaultColor': 'light'
    });
    var boiseStateAccent = $mdThemingProvider.extendPalette('orange', {
      'A100':  'F1632A',
      'A200':  'F1632A',
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('boiseStateBlue', boiseStatePrimary);
    $mdThemingProvider.definePalette('boiseStateOrange', boiseStateAccent);

    $mdThemingProvider.theme('default')
      .primaryPalette('boiseStateBlue')
      .accentPalette('boiseStateOrange')
    ;


  }

})();