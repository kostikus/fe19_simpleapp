function friendsService($http){

    var friends = {};

    friends.getFriends = function(){
        return $http.get('friends.json');
    }
    
    return friends;

}

angular.module('simpleApp')

.factory('Friends', ['$http', friendsService])