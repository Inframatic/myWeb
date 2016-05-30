angular.module('MyWeb', ['ngRoute'])
  .config( ['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/portfolio', {
            templateUrl: '/templates/portfolio.html',
            controller:'MainControl'
        })
        .when('/contact', {
            templateUrl: '/templates/contact.html',
            controller:'MainControl'
        })
        // .when('/:linkUrl', { using attributes to define dynamice route :) :)
        //     templateUrl: '/myWebpage/app/templates/project.html',
        //     controller:'MainControl'
        // })
        .when('/vr', {
            templateUrl: '/templates/vr.html',
            controller:'MainControl'
        })
        .when('/meventi', {
            templateUrl: '/templates/meventi.html',
            controller:'MainControl'
        })
        .when('/dogedots', {
            templateUrl: '/templates/dogedots.html',
            controller:'MainControl'
        })
        .when('/skreens', {
            templateUrl: '/templates/skreens.html',
            controller:'MainControl'
        })
        .when('/viewpoint', {
            templateUrl: '/templates/viewpoint.html',
            controller:'MainControl'
        })
        .when('/about', {
            templateUrl: '/templates/about.html',
            controller:'MainControl'
        })    
        .otherwise({
            redirectTo: '/',
            templateUrl: '/templates/portfolio.html',
            controller:'MainControl'
        })
  }])
  .controller('MainControl', function($scope, $routeParams){
      $scope.linkUrl=$routeParams.linkUrl;
      $scope.name = 'Ian Steffy';
      $scope.projects = [
        { "id": 0, "linkUrl": "skreens", "title": "Skreens", "imgUrl": "img/skreensTV.png", "description": "HTML5, CSS3, Responsive, Design, jQuery", "backgroundColor" : "#000"},
        { "id": 2, "linkUrl": "viewpoint", "title": "ViewPoint Cloud", "imgUrl": "img/viewpoint-logo.png", "description": "HTML5, CSS3, JQuery, JavaScript, Ember, Handlebars", "backgroundColor" : "#00a7e1"},
        { "id": 1, "linkUrl": "dogedots", "title": "Doge Dots", "imgUrl": "img/dogedots-logo.png", "description": "Design, XCode, Responsive, ASO, Animation, IOS App Publishing ", "backgroundColor" : "#333"},
        { "id": 3, "linkUrl": "meventi", "title": "meventi", "imgUrl": "img/meventi-logo.png", "description": "PHP, LESS, CSS3, jQuery, Photoshop, version control, HTML5, JavaScript, Design, Git, Github, Responsive ", "backgroundColor" : "#333"},
        { "id": 4, "linkUrl": "vr", "title": "Vjubox VR", "imgUrl": "img/vr-logo.png", "description": "Angular.js, XML, krpano, version control, three.js, HTML5, CSS3, JavaScript, Git, Github, Photoshop , Responsive", "backgroundColor" : "#222222"}
      ]
  })
