/**
 * Separate configuration file for modules
 *   https://github.com/johnpapa/angular-styleguide#style-y129
 */
(function () {
  'use strict';

  angular.module('app.myFirstFeature').config(setRouteState);

  function setRouteState($stateProvider) {
    /**
     * Always declare controllers with their routes
     *   https://github.com/johnpapa/angular-styleguide#style-y038
     */

    var state = {
      url: '/my-first-feature',
      templateUrl: 'app/my-first-feature/my-first-feature.html',
      controller: 'MyFirstFeatureController',
      controllerAs: 'vm',
      resolve: {}
    };
    $stateProvider.state('myFirstFeature', state);
    // [INJECT:ROUTES] Generated routes appear here, at this indent level. DO NOT REMOVE.
  }

  /**
   * Declare resolves here
   *   https://github.com/johnpapa/angular-styleguide#style-y081
   *
   * Manually call out resolver dependencies by placing the following comment above it: @ngInject
   *   https://github.com/johnpapa/angular-styleguide#style-y100
   */

})();
