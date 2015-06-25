(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .controller('DegreeFilterCtrl', DegreeFilterCtrl)
  ;

  function DegreeFilterCtrl($scope, DegreeFilterService, DegreeService) {
    var vm = this;

    vm.degreeType = {};
    vm.interests = [];
    vm.interestAnswer = {};
    vm.location = [];
    vm.mathRequirement = 0;
    vm.selectInterest = selectInterest;
    vm.selectDegreeType = selectDegreeType;
    vm.selectLocation = selectLocation;
    vm.selectMathRequirement = selectMathRequirement;
    vm.degreeService = DegreeService;

    vm.interests = ["Agriculture", "Arts & Media", "Business & Industry", "Communications", "Computers and Technology",
      "Design", "Economic and Political Systems", "Education and Human Development", "Engineering", "Health Related",
      "History", "Interdisciplunary Studies", "Languages and Culture", "Literature", "Management and Entrepreneurship",
      "Math", "Music", "Natural Resources & Environment", "Performance Art", "Public Service", "Science Related",
      "Social Behavior & Human Understanding", "Gaming & Computer Graphics", "Social Justice and Diversity",
      "Construction and Design", "Money and Finance", "Law", "The Human Body"
    ];

    vm.characteristics = ["Do research", "Innovate", "Lead Others", "Make Decisions", "Multitask", "Organize/Categorize",
      "Read", "Solve Problems/Puzzles", "Think Creatively", "Think Critically", "Work with Deadlines", "Work with my hands",
      "Work with Other People", "Write", "Working with Numbers", "Listening", "Taking things apart and putting them back together",
      "Working with Money/Budgeting", "Working on Computers", "Sports"];

    ////////////////////////////

    function filterDegreeLength() {
      console.log('controller', DegreeService.getFilterDegreeLength());
      return DegreeService.getFilterDegreeLength();
    }

    function selectDegreeType(degreeType) {
      var degreeTypeObj = {
        name: degreeType,
        type: 'Degree Type'
      };

      DegreeFilterService.setDegreeType(degreeType);
      DegreeFilterService.addFilterChip(degreeTypeObj);
    }

    function selectLocation(location) {
      var locationObj = {
        name: location,
        type: 'Location'
      };
      DegreeFilterService.setLocation(location);
      DegreeFilterService.addFilterChip(locationObj);
    }

    function selectMathRequirement(requirement) {
      var mathRequirementObj = {
        name: requirement,
        type: 'Math'
      };
      DegreeFilterService.setMathRequirement(requirement);
      DegreeFilterService.addFilterChip(mathRequirementObj);
    }

    function selectInterest(interest, value, index) {

      var interestObj = {
        name: interest,
        type: 'Interest',
        index: index
      };

      if (value) {

        vm.interests.push(interestObj);
        DegreeFilterService.addFilterChip(interestObj);

      } else {
        var obj = _.find(vm.interests, {'name': interest});
        _.pull(vm.interests, obj);
        DegreeFilterService.removeFilter(interestObj);
      }

    }

    function removeFilter(event, filterObj) {

      console.log(filterObj);

      switch(filterObj.type) {
        case 'Interest':
          var index = vm.interests.indexOf(filterObj.name);
          vm.interests.splice(index, 1);
          vm.interestAnswer[filterObj.index] = false;
          break;
        case 'Degree Type':
          vm.degreeType = {};
          DegreeFilterService.setDegreeType(undefined);
          break;
        case 'Location':
          vm.location = {};
          DegreeFilterService.setLocation(undefined);
          break;
        case 'Math':
          vm.mathRequirement = 0;
          DegreeFilterService.setMathRequirement(0);
          break;

      }

    }

    $scope.$on('filter:remove', removeFilter);

  }

})();