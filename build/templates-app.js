!function(e){try{e=angular.module("templates-app")}catch(t){e=angular.module("templates-app",[])}e.run(["$templateCache",function(e){e.put("compare/compare.tpl.html",'<md-content flex=""><md-content class="md-padding"><md-chips ng-model="vm.compare"><md-chip-template><strong>{{$chip}}</strong></md-chip-template></md-chips></md-content><section><md-list layout-padding=""><md-list-item class="md-4-line"><div class="md-list-item-text"><h1>Areas of Interest</h1><p><b>Philosophy:</b> Law, Social Services</p><p><b>Computer Science:</b> Technology</p><p><b>Biology:</b> Health & Medicine, Technology</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-4-line"><div class="md-list-item-text"><h1>Math Requirement</h1><p><b>Philosophy:</b> Low</p><p><b>Computer Science:</b> High</p><p><b>Biology:</b> High</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-4-line"><div class="md-list-item-text"><h1>Second Language Requirement</h1><p><b>Philosophy:</b> True</p><p><b>Computer Science:</b> False</p><p><b>Biology:</b> False</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-4-line"><div class="md-list-item-text"><h1>Colleges</h1><p><b>Philosophy:</b> College of Arts & Sciences</p><p><b>Computer Science:</b> College of Engineering</p><p><b>Biology:</b> College of Arts & Sciences</p></div></md-list-item></md-list></section></md-content>')}])}(),function(e){try{e=angular.module("templates-app")}catch(t){e=angular.module("templates-app",[])}e.run(["$templateCache",function(e){e.put("core/toast.tpl.html",'<md-toast><span flex="">Added to compare list.</span><md-button class="md-accent" ui-sref="compare">View</md-button></md-toast>')}])}(),function(e){try{e=angular.module("templates-app")}catch(t){e=angular.module("templates-app",[])}e.run(["$templateCache",function(e){e.put("degrees/degree-detail.tpl.html",'<md-content flex="" id="content"><md-tabs md-dynamic-height="" md-border-bottom=""><md-tab label="Explore"><md-content><md-card><md-card-content><div layout="row" layout-sm="column"><div flex=""><img width="100%" src="assets/images/placeholder.png"></div><div flex=""><h2>Overview</h2><p>The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...</p><p><b>Degrees:</b> Bachelors, Masters<br><b>Location:</b> Boise, Twin Falls<br><b>Format:</b> Lecture, Online<br><b>Concentrations:</b> Botany Emphasis, Ecology Emphasis</p><h3 class="md-title">This program could be a good fit for you if...</h3><ul><li>You like Numbers</li><li>Are good at spreadsheets</li><li>Other things too</li></ul></div></div></md-card-content></md-card><md-card><md-card-content><h2>Program Highlights</h2><p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p></md-card-content></md-card></md-content><md-list><md-subheader class="md-accent md-no-sticky">CAREER OUTCOMES</md-subheader><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Forensic Accounting</h3><h4>Average Salary: $40 - $100k</h4><p>Other objective data goes here...</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Certified Internal Auditor</h3><h4>Average Salary: $40 - $100k</h4><p>Other objective data goes here...</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Comptroller/Controller</h3><h4>Average Salary: $40 - $100k</h4><p>Other objective data goes here...</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Accounting Clerk</h3><h4>Average Salary: $40 - $100k</h4><p>Other objective data goes here...</p></div></md-list-item></md-list><md-subheader class="md-accent md-no-sticky">RELATED DEGREES</md-subheader><md-grid-list md-cols-sm="1" md-cols-md="2" md-cols-gt-md="4" md-row-height-gt-md="1:1" md-row-height="2:2" md-gutter="12px" md-gutter-gt-sm="8px"><md-grid-tile class="fade"><img width="100%" ng-src="assets/images/placeholder.png"><md-grid-tile-footer><h3 class="oswald">Philosophy</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile class="fade"><img width="100%" ng-src="assets/images/placeholder.png"><md-grid-tile-footer><h3 class="oswald">Anthropology</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile class="fade"><img width="100%" ng-src="assets/images/placeholder.png"><md-grid-tile-footer><h3 class="oswald">Biology</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile class="fade"><img width="100%" ng-src="assets/images/placeholder.png"><md-grid-tile-footer><h3 class="oswald">History</h3></md-grid-tile-footer></md-grid-tile></md-grid-list><p>&nbsp;</p><p>&nbsp;</p></md-tab><md-tab label="Experience"><md-content><md-card><md-card-content><h1>Meet Our Students</h1><div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/RyyA6Z-gQok" frameborder="0" allowfullscreen=""></iframe></div></md-card-content></md-card><md-card><md-card-content><h1>Meet Our Faculty</h1><div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/1dmyqcogDCA" frameborder="0" allowfullscreen=""></iframe></div></md-card-content></md-card></md-content></md-tab><md-tab label="Plan"><md-content><md-select style="width: 100%" ng-model="vm.activePlan" ng-change="vm.changePlan()" placeholder="Choose emphasis"><md-optgroup><md-option ng-value="concentration.courses" ng-repeat="concentration in vm.concentrations">{{concentration.name}}</md-option></md-optgroup></md-select></md-content><div layout="row"><span flex=""></span><md-progress-circular ng-if="vm.showLoading" class="md-accent" md-mode="indeterminate"></md-progress-circular><span flex=""></span></div><md-list ng-if="vm.plan.length && !vm.showLoading"><section ng-repeat="semester in vm.plan"><md-subheader class="md-accent md-no-sticky"><span class="md-title">{{semester.Name}}</span></md-subheader><md-list-item ng-repeat="course in semester.Courses" class="md-3-line"><div class="md-list-item-text"><div layout="row"><h3>{{course.Description}}</h3><span flex=""></span><span class="md-title">{{course.Credits}}</span></div><p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p></div></md-list-item></section></md-list></md-tab></md-tabs></md-content>')}])}(),function(e){try{e=angular.module("templates-app")}catch(t){e=angular.module("templates-app",[])}e.run(["$templateCache",function(e){e.put("degrees/degrees.tpl.html",'<md-content flex="" id="content"><md-content layout-padding=""><md-chips class="custom-chips" ng-model="vm.activeFilters" readonly="true"><md-chip-template class=""><strong>{{$chip.name}}</strong> <em>({{$chip.type}})</em></md-chip-template><button md-chip-remove="" ng-click="vm.removeFilter($chip)" class="md-primary filterchip"><md-icon md-svg-icon="assets/icons/close.svg"></md-icon></button></md-chips></md-content><md-content ng-if="app.hideFilter" class="fade"><md-subheader class="md-accent md-subheader" style="background-color: rgba(255, 255, 255, 0.85)">FILTER MAJORS:</md-subheader><div layout="row"><md-button flex="" style="margin: 0;" ng-click="vm.showInterests = !vm.showInterests"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Areas of Interest</h3><span flex=""></span><md-icon md-svg-icon="assets/icons/arrow-down.svg"></md-icon></div></md-button></div><md-divider></md-divider><md-content ng-if="vm.showInterests" class="md-padding fade"><section><label>I am interested in...</label><md-checkbox ng-repeat="interest in vm.interests" ng-model="vm.activeInterest[$index]" aria-label="Checkbox 2" class="md-warn">{{interest}}</md-checkbox></section></md-content><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ng-click="vm.showCharacteristics = !vm.showCharacteristics"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Characteristics</h3><span flex=""></span><md-icon md-svg-icon="assets/icons/arrow-down.svg"></md-icon></div></md-button></div><md-divider></md-divider><md-content ng-if="vm.showCharacteristics" class="md-padding fade"><label>I like to...</label><md-checkbox ng-repeat="charateristic in vm.characteristics" ng-model="vm.activeCharacteristic[$index]" aria-label="Checkbox 2" class="md-warn">{{charateristic}}</md-checkbox></md-content><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ng-click="vm.showDepartments = !vm.showDepartments"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Advanced Filters</h3><span flex=""></span><md-icon md-svg-icon="assets/icons/arrow-down.svg"></md-icon></div></md-button></div><md-divider></md-divider><section ng-if="vm.showDepartments" class="fade"><md-radio-group ng-model="vm.location" ng-change="vm.selectLocation(vm.location)"><md-radio-button value="Boise">Boise</md-radio-button><md-radio-button value="Twin Falls">Twin Falls</md-radio-button><md-radio-button value="Online">Online</md-radio-button></md-radio-group></section><md-divider></md-divider></md-content><md-subheader class="md-accent md-no-sticky"><span class="md-subhead">MAJORS</span></md-subheader><md-grid-list md-cols-sm="1" md-cols-md="2" md-cols-lg="3" md-cols-gt-lg="4" md-row-height-gt-md="1:1" md-row-height="2:2" md-gutter="12px" md-gutter-gt-sm="8px"><md-grid-tile ng-click="vm.tileFlipped[$index] = !vm.tileFlipped[$index]; $event.stopPropagation();" ng-class="{\'flip-container-active\': vm.tileFlipped[$index]}" class="flip-container fade" ng-repeat="degree in vm.filterDegrees = ( vm.degrees | filter:{ DegreeType: vm.degreeFilterService.getDegreeType(), Location: vm.degreeFilterService.getLocation() } | filter: vm.greaterThan(vm.degreeFilterService.getMathRequirement()) | interest ) track by degree.Id"><div class="flipper"><div class="front"><img width="100%" ng-src="{{::degree.Image}}"></div><div style="text-align: center;" class="back"><h3 style="margin-top: 0;" class="oswald">{{::degree.Title}}</h3><p><span style="background: #666; color: #fff; padding: 3px; font-size: 0.8em;">Minor</span> <span style="background: #666; color: #fff; padding: 3px; font-size: 0.8em;">BA</span> <span style="background: #666; color: #fff; padding: 3px; font-size: 0.8em;">Masters</span></p><p>Lorem ipsum dolor sit amet, facilis periculis mea ea, scripta legendos persecuti ne has. In mel meis atqui reprehendunt, et brute blandit apeirian vis, ius te indoctum voluptatibus.</p></div></div><md-grid-tile-footer style="z-index: 3;"><h3 ng-if="!vm.tileFlipped[$index]" class="oswald">{{::degree.Title}}</h3><span flex=""></span><md-button ng-if="vm.tileFlipped[$index]" ng-click="app.state.go(\'degrees.detail\', {id: degree.UrlId})" class="fade md-accent md-raised">Learn More</md-button></md-grid-tile-footer></md-grid-tile></md-grid-list></md-content>')}])}(),function(e){try{e=angular.module("templates-app")}catch(t){e=angular.module("templates-app",[])}e.run(["$templateCache",function(e){e.put("home/home.tpl.html",'<md-content flex="" id="content"><section><md-card style="background-color: #666; color: #fff;"><md-card-content style="font-size: 2.5em; text-align: center;"><img width="75%" src="assets/images/nav-logo.png"><p>Find <em>your</em> degree.</p><div layout="row"><span flex=""></span><md-button ui-sref="degrees.search" class="md-raised md-accent">Explore</md-button></div></md-card-content></md-card></section><section><md-subheader class="md-accent md-no-sticky">Degrees</md-subheader><md-grid-list md-cols-sm="1" md-cols-md="2" md-cols-gt-md="4" md-row-height-gt-md="1:1" md-row-height="2:2" md-gutter="12px" md-gutter-gt-sm="8px"><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Philosophy</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Anthropology</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Psychology</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Computer Science</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Biology</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Social Work</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Basket Weaving</h3></md-grid-tile-footer></md-grid-tile><md-grid-tile><img width="100%" src="assets/images/placeholder.png"><md-grid-tile-footer><h3>Weight Lifting</h3></md-grid-tile-footer></md-grid-tile></md-grid-list></section><section><md-subheader class="md-primary">Other things</md-subheader><md-list layout="column" layout-padding=""><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of other text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of other text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of other text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of other text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of other text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of other text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider><md-list-item class="md-3-line"><div class="md-list-item-text"><h3>Philosophy</h3><h4>Some other Text</h4><p>A bunch of other text in order to fill out this paragraph</p></div></md-list-item><md-divider></md-divider></md-list></section></md-content>')}])}(),function(e){try{e=angular.module("templates-app")}catch(t){e=angular.module("templates-app",[])}e.run(["$templateCache",function(e){e.put("menu/degree-filter.tpl.html",'<md-toolbar class="md-tall md-padding"><a ui-sref="home"><img src="assets/images/nav-logo.png" width="90%"></a></md-toolbar><md-content class="sidenav-blue"><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ui-sref="degrees.search" ng-click="app.toggleMenu()"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Majors</h3><span flex=""></span> <span style="border-radius: 30px; background-color: #fff; color: #F1632A; width: 35px; font-size: 1.5em; margin-right: 20px;">{{vm.degreeService.getFilterDegreeLength()}}</span></div></md-button></div><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ui-sref="compare" ng-click="app.toggleMenu()"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Compare</h3><span flex=""></span> <span style="border-radius: 30px; background-color: #fff; color: #F1632A; width: 35px; font-size: 1.5em; margin-right: 20px;"></span></div></md-button></div><md-divider></md-divider><p>&nbsp;</p><div class="" style="margin-left: 10px; color: #e6e6e6; font-size: 0.8em;">FILTER MAJORS:</div><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ng-click="vm.showInterests = !vm.showInterests"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Areas of Interest</h3><span flex=""></span><md-icon md-svg-icon="assets/icons/arrow-down.svg"></md-icon></div></md-button></div><md-divider></md-divider><md-content ng-if="vm.showInterests" class="md-padding sidenav-blue fade"><section><div><md-checkbox ng-change="vm.selectInterest(\'Architecture\', vm.interestAnswer[0], 0)" ng-model="vm.interestAnswer[0]" aria-label="Architecture">Architecture</md-checkbox></div><div><md-checkbox ng-change="vm.selectInterest(\'Health & Medicine\', vm.interestAnswer[1], 1)" ng-model="vm.interestAnswer[1]" aria-label="Health & Medicine">Health & Medicine</md-checkbox></div><div><md-checkbox ng-change="vm.selectInterest(\'Social Services\', vm.interestAnswer[2], 2)" ng-model="vm.interestAnswer[2]" aria-label="Social Services">Social Services</md-checkbox></div></section></md-content><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ng-click="vm.showCharacteristics = !vm.showCharacteristics"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Characteristics</h3><span flex=""></span><md-icon md-svg-icon="assets/icons/arrow-down.svg"></md-icon></div></md-button></div><md-divider></md-divider><md-content ng-if="vm.showCharacteristics" class="md-padding sidenav-blue fade"><section><div><md-checkbox ng-change="vm.selectInterest(\'Architecture\', vm.interestAnswer[0], 0)" ng-model="vm.interestAnswer[0]" aria-label="Architecture">Architecture</md-checkbox></div><div><md-checkbox ng-change="vm.selectInterest(\'Health & Medicine\', vm.interestAnswer[1], 1)" ng-model="vm.interestAnswer[1]" aria-label="Health & Medicine">Health & Medicine</md-checkbox></div><div><md-checkbox ng-change="vm.selectInterest(\'Social Services\', vm.interestAnswer[2], 2)" ng-model="vm.interestAnswer[2]" aria-label="Social Services">Social Services</md-checkbox></div></section></md-content><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ng-click="vm.showColleges = !vm.showColleges"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Colleges</h3><span flex=""></span><md-icon md-svg-icon="assets/icons/arrow-down.svg"></md-icon></div></md-button></div><md-divider></md-divider><section ng-if="vm.showColleges" class="fade"><md-radio-group ng-model="vm.degreeType" ng-change="vm.selectDegreeType(vm.degreeType)"><md-radio-button value="Certificate">Certificate</md-radio-button><md-radio-button value="Bachelors">Bachelors</md-radio-button><md-radio-button value="Masters">Masters</md-radio-button><md-radio-button value="PhD">PhD</md-radio-button></md-radio-group></section><md-divider></md-divider><div layout="row"><md-button flex="" style="margin: 0;" ng-click="vm.showDepartments = !vm.showDepartments"><div layout="row" layout-align="start center"><h3 style="margin-left: 10px;">Departments</h3><span flex=""></span><md-icon md-svg-icon="assets/icons/arrow-down.svg"></md-icon></div></md-button></div><md-divider></md-divider><section ng-if="vm.showDepartments" class="fade"><md-radio-group ng-model="vm.location" ng-change="vm.selectLocation(vm.location)"><md-radio-button value="Boise">Boise</md-radio-button><md-radio-button value="Twin Falls">Twin Falls</md-radio-button><md-radio-button value="Online">Online</md-radio-button></md-radio-group></section><md-divider></md-divider><p class="md-padding"><strong>Math Requirement</strong></p><md-slider flex="" class="md-accent md-padding" ng-model="vm.mathRequirement" ng-change="vm.selectMathRequirement(vm.mathRequirement)" step="1" min="0" max="4" aria-label="Math Requirement"></md-slider><md-divider></md-divider><p class="md-padding"><strong>Second Language Requirement</strong></p><div style="font-size: 2em;"><md-switch aria-label="Second Language Requirement" ng-true-value="\'yup\'" ng-false-value="\'nope\'"></md-switch></div><div class="md-padding"><md-checkbox ng-model="app.hideFilter" aria-label="Hide Degree Filter">Hide Filter: {{ app.hideFilter }}</md-checkbox></div></md-content>')}])}();