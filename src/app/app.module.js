(function() {
  'use strict';

  angular
    .module('boisestate', ['ngMaterial'])
    .config(AppConfig)
  ;

  function AppConfig($mdThemingProvider) {

    var boiseStatePalette = $mdThemingProvider.extendPalette('blue', {
      '500':  '09347A'
    });

    $mdThemingProvider.definePalette('blue', boiseStatePalette);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange')
    ;


  }

})();