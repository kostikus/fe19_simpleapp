function navbarCtrl(Tasks){
    var vm = this;

    vm.addTask = function(){
        var data = {
            text: vm.newTask.text,
            done: false
        }
        Tasks.addTask(data);
        vm.newTask.text = '';
    }
}

angular.module('simpleApp')
.controller('navbarCtrl', ["Tasks", navbarCtrl]);