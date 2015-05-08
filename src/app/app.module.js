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
      '500':  '09347A'
    });
    var boiseStateAccent = $mdThemingProvider.extendPalette('orange', {
      'A100':  'F1632A',
      'A200':  'F1632A'
    });

    $mdThemingProvider.definePalette('blue', boiseStatePrimary);
    $mdThemingProvider.definePalette('orange', boiseStateAccent);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange')
    ;


  }

})();