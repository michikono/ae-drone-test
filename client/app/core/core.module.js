/**
 * Separate configuration file for modules; wrap all code in closures
 *   https://github.com/johnpapa/angular-styleguide#style-y128
 */
(function () {
  'use strict';

  /**
   * Move reused dependencies into separate core app module
   *   https://github.com/johnpapa/angular-styleguide#style-y165
   */
  angular.module('app.core', [
    'ui.bootstrap',
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'app.directives',
    'app.filters',
    'app.providers'
  ]);

  angular
    .module('app')
    .config(configure)
    .run(runBlock);

  /* @ngInject */
  function configure($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

  /**
   * Run block should use factories
   *   https://github.com/johnpapa/angular-styleguide#style-y171
   */
  /* @ngInject */
  function runBlock() {
  }
})();
