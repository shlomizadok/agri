// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource', 'ngMessages', 'ngCordova'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          }
        }
      })

      .state('app.signup', {
        url: '/signup',
        views: {
          'menuContent': {
            templateUrl: 'templates/signup.html',
            controller: 'SignupCtrl'
          }
        }
      })

      .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/user.html',
            controller: 'ProfileCtrl'
          }
        }
      })

      .state('app.profileEdit', {
        url: '/profile-edit',
        views: {
          'menuContent': {
            templateUrl: 'templates/user-edit.html',
            controller: 'ProfileEditCtrl'
          }
        }
      })

      .state('app.editProfile', {
        url: '/edit-profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/user-edit.html',
            controller: 'EditProfileCtrl'
          }
        }
      })

      .state('app.sales', {
        url: '/sales',
        views: {
          'menuContent': {
            templateUrl: 'templates/sales.html',
            controller: 'SalesCtrl'
          }
        }
      })

      .state('app.futureSales', {
        url: '/future-sales',
        views: {
          'menuContent': {
            templateUrl: 'templates/sales.html',
            controller: 'FutureSalesCtrl'
          }
        }
      })

      .state('app.newSale', {
        url: '/new-sale',
        views: {
          'menuContent': {
            templateUrl: 'templates/new-sale.html',
            controller: 'newSaleCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/sales/:saleId',
        views: {
          'menuContent': {
            templateUrl: 'templates/sale.html',
            controller: 'SaleCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/sales');
    $httpProvider.interceptors.push('AuthInterceptor');
    $ionicConfigProvider.views.maxCache(0);
  });
