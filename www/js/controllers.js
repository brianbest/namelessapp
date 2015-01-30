angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Routes) {
        $scope.routes = Routes.all();
    })

    .controller('routeDetailCtrl', function($scope, $stateParams, Routes) {
        $scope.route = Routes.get($stateParams.routeID);
        $scope.starter = null;
        $scope.ender = null;
        $scope.timeFind = null;
        $scope.findTimes = function(){
            var startval = parseInt(document.getElementById('route_start').value),
                endval = parseInt(document.getElementById('route_end').value);

            if (startval < endval){
                //Use times
                $scope.starter = [startval,startval];
                $scope.ender = [endval,endval];
                $scope.timeFind = $scope.route.times;
            }else if (startval > endval){
                //Use Reverse times
                $scope.starter = [startval,startval];
                $scope.ender = [endval,endval];
                $scope.timeFind = $scope.route.times;
            }else{
                // Do nothing they are equal
            }


        }
    })


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
    .controller('TransitRoute',function($scope,route){
        this.routes = route;
    });
