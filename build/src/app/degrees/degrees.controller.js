(function() {
  'use strict';

  angular
    .module('boisestate.degree')
    .controller('DegreesCtrl', DegreesCtrl)
  ;

  function DegreesCtrl($q, $rootScope, $scope, DegreeService, DegreeFilterService) {
    var vm = this;

    vm.applyFlip = applyFlip;
    vm.degrees = [];
    vm.degreeFilterService = DegreeFilterService;
    vm.filterDegrees = [];
    vm.greaterThan = greaterThan;
    vm.activeFilters = DegreeFilterService.getActiveFilters();
    vm.removeFilter = removeFilter;

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


    activate();

    ///////////////////////////////

    function activate() {
      var promises = [getDegrees()];
      DegreeService.setCurrentDegreeTitle(null);

      return $q.all(promises);
    }

    function applyFlip(evt, tile) {
      console.log(tile);
      evt.stopPropagation();

    }

    function getDegrees() {
      return DegreeService.getDegrees().then(function(result) {
        vm.degrees = result.data;
        return vm.degrees;
      })
    }

    function removeFilter(filterObj) {
      $rootScope.$broadcast('filter:remove', filterObj);
    }

    function greaterThan(mathRequirement) {
      return function(degree) {
        if(degree.MathRequirement >= mathRequirement) {
          return true;
        } else {
          return false;
        }
      }
    }

    $scope.$watch(function() {
      return vm.filterDegrees;
    }, function(newValues) {
      DegreeService.setFilterDegreeLength(newValues.length);
      console.log(newValues.length);
    }, true);
  }

})();