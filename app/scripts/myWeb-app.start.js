angular.module('MyWeb', ['ngRoute'])
  .config( ['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/portfolio', {
            templateUrl: '/myWebpage/app/templates/portfolio.html',
            controller:'MainControl'
        })
        .when('/contact', {
            templateUrl: '/myWebpage/app/templates/contact.html',
            controller:'MainControl'
        })
        // .when('/:linkUrl', { using attributes to define dynamice route :) :)
        //     templateUrl: '/myWebpage/app/templates/project.html',
        //     controller:'MainControl'
        // })
        .when('/dogedots', {
            templateUrl: '/myWebpage/app/templates/dogedots.html',
            controller:'MainControl'
        })
        .when('/skreens', {
            templateUrl: '/myWebpage/app/templates/skreens.html',
            controller:'MainControl'
        })
        .when('/viewpoint', {
            templateUrl: '/myWebpage/app/templates/viewpoint.html',
            controller:'MainControl'
        })
        .when('/about', {
            templateUrl: '/myWebpage/app/templates/about.html',
            controller:'MainControl'
        })        
        .otherwise({
            redirectTo: '/',
            templateUrl: '/myWebpage/app/templates/portfolio.html',
            controller:'MainControl'
        })
  }])
  .controller('MainControl', function($scope, $routeParams, $anchorScroll){
      $scope.linkUrl=$routeParams.linkUrl;
      $scope.name = 'Ian Steffy';
      $scope.projects = [
        { "id": 0, "linkUrl": "skreens", "title": "Skreens", "imgUrl": "img/skreensTV.png", "description": "HTML5, CSS3, Responsive, Design, jQuery", "backgroundColor" : "#000"},
        { "id": 2, "linkUrl": "viewpoint", "title": "ViewPoint Cloud", "imgUrl": "img/viewpoint-logo.png", "description": "HTML5, CSS3, jQuery, JavaScript, Ember.js, Handlebars", "backgroundColor" : "#00a7e1"},
        { "id": 1, "linkUrl": "dogedots", "title": "Doge Dots", "imgUrl": "img/dogedots-logo.png", "description": "Design, Xcode, Responsive, ASO, Animation, IOS App Publishing ", "backgroundColor" : "#333"}
      ];
      $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
      }
  })
