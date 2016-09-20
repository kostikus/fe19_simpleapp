function tasksCtrl(Tasks){
    var vm = this;

    vm.tasks = Tasks.list;

    vm.rmTask = function( i ){
        Tasks.rmTask(i);
    }

    vm.doTask = function( i ){
        Tasks.doTask( i )
    }
    vm.undoTask = function( i ){
        Tasks.undoTask( i )
    }

    vm.addTask = function(){
        var data = {
            text: vm.newTask.text,
            done: false
        }
        Tasks.addTask(data);
        vm.newTask.text = '';
    }
}

angular.module('tasks')

.controller( 'tasksCtrl', ["Tasks", tasksCtrl])