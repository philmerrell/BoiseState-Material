(function(){
  'use strict';

  angular
    .module('boisestate.degree')
    .filter('interest', InterestFilter)
  ;

  function InterestFilter(DegreeFilterService) {
    return function(degrees) {
      var filters = DegreeFilterService.getActiveFilters();
      var filtered = [];

      var s = _.find(filters, {'type': 'Interest'});
      if(typeof s === 'undefined') return degrees;


      angular.forEach(filters, function(filter) {
        angular.forEach(degrees, function(degree) {
          if (filter.type === 'Interest') {
            if (degree.Interests.indexOf(filter.name) !== -1) {
              filtered.push(degree);
            }
          }
        });

      });
      return _.uniq(filtered);
    }
  }

})();