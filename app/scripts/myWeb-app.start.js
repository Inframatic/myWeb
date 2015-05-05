angular.module('MyWeb', [])
.controller('MainControl', function($scope){
    $scope.name = 'Ian Steffy';
    $scope.projects = [
      { "id": 0, "title": "Skreens", "imgUrl": "img/skreensTV-logo.png", "description": "HTML5, CSS3, Responsive, Design, jQuery", "backgroundColor" : "#000"},
      { "id": 2, "title": "ViewPoint Cloud", "imgUrl": "img/viewpoint-logo.png", "description": "HTML5, CSS3, JQuery, Javascript, Ember, Handlebars", "backgroundColor" : "#00a7e1"},
      { "id": 1, "title": "Doge Dots", "imgUrl": "img/dogedots-logo.png", "description": "Design, XCode, Responsive, ASO, Animation, App Publishing ", "backgroundColor" : "#eee"}
    ]
})
