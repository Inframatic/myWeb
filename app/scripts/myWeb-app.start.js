angular.module('MyWeb', ['ngRoute'])
  .config( ['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/portfolio', {
            templateUrl: '/myWebpage/app/templates/portfolio.html'
        })
        .when('/contact', {
            templateUrl: '/myWebpage/app/templates/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        })
  }])
  .controller('MainControl', function($scope){
      $scope.name = 'Ian Steffy';
      $scope.projects = [
        { "id": 0, "linkUrl": "skreens", "title": "Skreens", "imgUrl": "img/skreensTV-logo.png", "description": "HTML5, CSS3, Responsive, Design, jQuery", "backgroundColor" : "#000"},
        { "id": 2, "linkUrl": "viewpoint", "title": "ViewPoint Cloud", "imgUrl": "img/viewpoint-logo.png", "description": "HTML5, CSS3, JQuery, Javascript, Ember, Handlebars", "backgroundColor" : "#00a7e1"},
        { "id": 1, "linkUrl": "dogedots", "title": "Doge Dots", "imgUrl": "img/dogedots-logo.png", "description": "Design, XCode, Responsive, ASO, Animation, App Publishing ", "backgroundColor" : "#eee"}
      ]
  })
