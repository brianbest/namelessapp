angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Routes) {
        $scope.routes = Routes.all();
    })

    .controller('routeDetailCtrl', function($scope, $stateParams, Routes) {
        $scope.route = Routes.get($stateParams.routeID);
        $scope.starter = 0;
        $scope.ender = null;
        $scope.timeFind = null;
        $scope.destLook = [];
        $scope.errCatch = null;
        $scope.findTimes = function($scope){
            var startval = parseInt(document.getElementById('route_start').value),
                endval = parseInt(document.getElementById('route_end').value);

            if (startval < endval){
                //Use times

                $scope.timeFind = $scope.route.times;
                $scope.starter = startval;
                $scope.ender = endval;
                $scope.destLook = [startval,endval];
                $scope.errCatch = null;

            }else if (startval > endval){
                //Use Reverse times
                var destlng = $scope.route.desti.length - 1;

                var x = destlng - startval;
                var y = destlng - endval;
                console.log($scope.route.revTimes.length);
                if ($scope.route.revTimes.length === 1){

                    $scope.errCatch = 'This Route is circular, your destination is past prior to your start location.'
                }else{
                    $scope.timeFind = $scope.route.revTimes;
                    $scope.starter = startval;
                    $scope.ender = endval;
                    $scope.destLook = [x,y];
                    $scope.errCatch = null;
                }

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
