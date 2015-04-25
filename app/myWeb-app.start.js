angular.module('MyWeb', [
  ])
.controller('MainControl', function($scope){
    $scope.name = 'Ian Steffy';
    $scope.projects = [
      { "id": 0, "title": "Skreens", "url": "img/skreensTV-logo.png", "description": "HTML5, CSS3, Responsive, Design, jQuery"},
      { "id": 1, "title": "Doge Dots", "url": "some/img/url.png", "description": "Design, XCode, Responsive, ASO, Animation, App Publishing "},
      { "id": 2, "title": "ViewPoint Cloud", "url": "some/img/url.png", "description": "HTML5, CSS3, JQuery, Javascript, Ember, Handlebars"}
    ]
  })
;