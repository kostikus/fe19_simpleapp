angular.module('simpleApp')
.directive('navbar', function(){
    return{
        restrict: 'E',
        templateUrl: 'views/partials/navbar.html',
        controller: 'navbarCtrl as navbar'
    }
})