function friendsCtrl(Friends){
    var vm = this;
    vm.loading = true;
    
    function getFriends(){
        Friends.getFriends().then(function(friends){
            vm.friends = friends.data;
            vm.loading = false;
        })
    }
    setTimeout( getFriends, 1000 );

}

angular.module('simpleApp')

.controller( 'friendsCtrl', ["Friends", friendsCtrl])