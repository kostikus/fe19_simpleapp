function tasksService(){

    var tasks = {};

    tasks.list = [
        {text: 'Some task', done: false},
        {text: 'Some task2', done: false},
        {text: 'Some task3', done: false},
        {text: 'Some task4', done: false}
    ];

    tasks.rmTask = function( i ){
        tasks.list.splice(i, 1);
    }

    tasks.doTask = function( i ){
        tasks.list[i].done = true;
    }
    tasks.undoTask = function( i ){
        tasks.list[i].done = false;
    }

    tasks.addTask = function(data){
        tasks.list.push( data );
    }

    return tasks;

}

angular.module('tasks')

.factory('Tasks', [tasksService])