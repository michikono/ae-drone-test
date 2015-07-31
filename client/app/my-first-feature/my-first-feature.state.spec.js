/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';
  describe('myFirstFeature routes', function () {
    describe('state', function () {
      var $state, $templateCache;

      beforeEach(function () {
        angular.mock.module('app');
        angular.mock.module('app.myFirstFeature');

        // Place template loading modules below here
        angular.mock.module('app/my-first-feature/my-first-feature.html');
        // [INJECT:ROUTE_TEST_TEMPLATES] templates module for test loaded here, at this indent level. DO NOT REMOVE.
      });

      beforeEach(inject(function (_$state_, _$templateCache_) {
        $state = _$state_;
        $templateCache = _$templateCache_;
      }));

      it('should map state myFirstFeature to url /my-first-feature ', function () {
        expect($state.href('myFirstFeature')).toEqual('/my-first-feature');
      });
      it('should map my-first-feature route to view template', function () {
      	var view = 'app/my-first-feature/my-first-feature.html';
        expect($state.get('myFirstFeature').templateUrl).toEqual(view);
      });
      // [INJECT:ROUTE_TESTS] Generated routes appear here, at this indent level. DO NOT REMOVE.
    });
  });
})();
