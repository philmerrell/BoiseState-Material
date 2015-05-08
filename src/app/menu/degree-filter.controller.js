(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .controller('DegreeFilterCtrl', DegreeFilterCtrl)
  ;

  function DegreeFilterCtrl($scope, DegreeFilterService) {
    var vm = this;

    vm.degreeType = [];
    vm.interests = [];
    vm.interestAnswer = {};
    vm.location = [];
    vm.mathRequirement = 0;
    vm.selectInterest = selectInterest;

    ////////////////////////////


    function selectInterest(interest, value, index) {
      var interestObj = {
        name: interest,
        type: 'Interest',
        index: index
      };
      console.log(interest, value);


      if(value) {
        vm.interests.push(interestObj);
        DegreeFilterService.addFilter(interestObj);
      } else {
        var index = vm.interests.indexOf(interest);

        vm.interests.splice(index, 1);
        DegreeFilterService.removeFilter(interestObj);
      }

    }

    function removeFilter(event, filterObj) {

      switch(filterObj.type) {
        case 'Interest':
          var index = vm.interests.indexOf(filterObj.name);
          vm.interests.splice(index, 1);
          vm.interestAnswer[filterObj.index] = false;
          break;
      }
    }

    $scope.$on('filter:remove', removeFilter);

  }

})();