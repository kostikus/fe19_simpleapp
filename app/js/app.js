angular.module('tasks', []);
angular.module('simpleApp', [
    'ui.router',
    'tasks'
  ])

.config([ '$stateProvider', function($stateProvider){

    $stateProvider
    .state('start', {
      url: "/",
      templateUrl: "views/start.html"
    })
    .state('tasks', {
      url: "/tasks",
      templateUrl: "views/tasks.html",
      controller: "tasksCtrl as tasks"
    })
    .state('friends', {
      url: "/friends",
      templateUrl: "views/friends.html",
      controller: "friendsCtrl as friends"
    })

} ])