(function() {
  'use strict';

  angular
    .module('boisestate.core')
    .controller('InterestsCtrl', InterestsCtrl)
  ;


  function InterestsCtrl($mdDialog, $mdBottomSheet, DegreeFilterService) {
    var vm = this;
    vm.closeDialog = closeDialog;
    vm.viewResults = viewResults;
    vm.selectInterest = selectInterest;
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

    function closeDialog() {

      $mdDialog.cancel();

    }

    function viewResults() {

      $mdDialog.hide();
      $mdBottomSheet.hide();
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


  }

})();