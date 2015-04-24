(function() {
  'use strict';

  angular
    .module('boisestate', ['ngMaterial'])
    .config(AppConfig)
  ;

  function AppConfig($mdThemingProvider) {

    // TODO: move into SASS solution
    var boiseStatePrimary = $mdThemingProvider.extendPalette('blue', {
      '500':  '09347A'
    });
    var boiseStateAccent = $mdThemingProvider.extendPalette('orange', {
      '500':  'F1632A'
    });

    $mdThemingProvider.definePalette('blue', boiseStatePrimary);
    $mdThemingProvider.definePalette('orange', boiseStateAccent);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange')
    ;


  }

})();