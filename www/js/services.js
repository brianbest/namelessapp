angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})
    .factory('Routes', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        // Some fake testing data
        var route =[
            {
                name : "Route 1",
                sub  : "Sydney-Dominion-Glace Bay",
                desti : ['Dorchester Street','Ashby Corner', 'Spar Road', 'Mayflower Mall', 'C.B.U.', 'Reserve', 'Dominion', 'Glace Bay'],
                times : [
                    ['7:20','7:25','7:30','7:35','7:40','7:50', '---', '8:00'],
                    ['8:00','8:10','8:15','8:20','8:25','8:35','8:40','9:00'],
                    ['9:00','9:10','9:15','9:20','9:25','9:35','9:40','10:00'],
                    ['10:00','10:10','10:19','10:22','10:27','10:35','10:40','11:00'],
                    ['11:00','11:10','11:19','11:22','11:27','11:35','11:40','12:00'],
                    ['12:00','12:10','12:15','12:20','12:25','12:35','12:40','13:00'],
                    ['13:00','13:10','13:15','13:20','13:25','13:35','13:40','14:00'],
                    ['14:00','14:10','14:15','14:20','14:25','14:35','14:40','15:00'],
                    ['15:00','15:10','15:15','15:20','15:25','15:35','15:40','16:00'],
                    ['16:00','16:10','16:15','16:20','16:25','16:35','16:40','17:00'],
                    ['17:00','17:10','17:15','17:20','17:25','17:35','17:40','18:00'],
                    ['18:00','18:10','18:15','18:20','18:25','18:35','18:40','19:00'],
                    ['20:00','20:10','20:20','20:25','20:30','20:40','20:45','21:00'],
                    ['22:00','22:05','22:10','22:15','22:20','22:30','22:35','22:40']
                ],
                revTimes : [
                    ['7:00','7:10','7:20','7:25','7:30','7:35','7:45','8:00'],
                    ['8:00','8:15','8:20','8:30','8:35','8:40','8:50','9:00'],
                    ['9:00','9:15','9:20','9:30','9:35','9:40','9:50','10:00'],
                    ['10:00','10:15','10:20','10:30','10:35','10:40','10:50','11:00'],
                    ['11:00','11:15','11:20','11:30','11:35','11:40','11:50','12:00'],
                    ['12:00','12:15','12:20','12:30','12:35','12:40','12:50','13:00'],
                    ['13:00','13:15','13:20','13:30','13:35','13:40','13:50','14:00'],
                    ['13:00','13:15','13:20','13:30','13:35','13:40','13:50','14:00'],
                    ['14:00','14:15','14:20','14:30','14:35','14:40','14:50','15:00'],
                    ['15:00','15:15','15:20','15:30','15:35','15:40','15:50','16:00'],
                    ['16:00','16:15','16:20','16:30','16:35','16:40','16:50','17:00'],
                    ['17:00','17:15','17:20','17:30','17:35','17:40','17:50','18:00'],
                    ['18:00','---','18:10','18:15','18:20','18:22','18:30','18:35'],
                    ['19:00','19:15','19:20','19:30','19:35','19:40','19:50','20:00'],
                    ['21:00','21:15','21:20','21:30','21:35','21:40','21:50','22:00']
                ]

            },
            {
                name : "Route 3",
                sub  : "Glace Bay - New Aberdeen",
                desti : ['Comm. Street (start)','First Street','Connaught Ave','Main Street','Comm. Street (end)'],
                times : [
                    ['8:00','8:05','8:10','8:15','8:30'],
                    ['9:00','9:05','9:10','9:15','9:30'],
                    ['12:00','12:05','12:10','12:15','12:30'],
                    ['13:00','13:05','13:10','13:15','13:30'],
                    ['16:00','16:05','16:10','16:15','16:30'],
                    ['17:00','17:05','17:10','17:15','17:30']
                ],
                revTimes : [
                    []
                ]
            },
            {
                name : "Route 4",
                sub  : "Glace Bay - Steels Hill",
                desti : ['Comm. Street (start)','Brookside Street',"Steel's Hill",'Gen. Hosp. South St.','Comm. Street (end)'],
                times : [
                    ['7:30','7:35','7:45','7:50','8:00'],
                    ['8:30','8:35','8:45','8:50','9:00'],
                    ['9:30','9:35','9:45','9:50','10:00'],
                    ['11:30','11:35','11:45','11:50','12:00'],
                    ['12:30','12:35','12:45','12:50','13:00'],
                    ['15:30','15:35','15:45','15:50','16:00'],
                    ['16:30','16:35','16:45','16:50','17:00'],
                    ['17:30','17:35','17:45','17:50','18:00']
                ],
                revTimes : []
            },
            {
                name : "Route 5",
                sub  : "Sydney - North Sydney - Sydney Mines",
                desti : ['Dorchester Street','Syd. River','Northside Mall','Comm. Street','Northside Hospital','Main Street','Pit Street'],
                times : [
                    ["8:00",'8:15','8:35','8:40','8:45','8:50','9:00'],
                    ["12:00",'12:15','12:35','12:40','12:45','12:50','13:00'],
                    ["14:00",'8:15','8:35','8:40','8:45','8:50','9:00'],
                    ["17:05",'8:15','8:35','8:40','8:45','8:50','9:00']
                ],
                revTimes : []
            },
            {
                name : "Route 8",
                sub  : "Sydney - Whitney Pier",
                desti : [],
                times : [],
                revTimes : []
            },
            {
                name : "Route 9",
                sub  : "Sydney - New Waterford",
                desti : [],
                times : [],
                revTimes : []
            },
            {
                name : "Route 10",
                sub  : "Sydney - Alexandra Street",
                desti : [],
                times : [],
                revTimes : []
            },
            {
                name : "Route 11",
                sub  : "Sydney - Ashby",
                desti : [],
                times : [],
                revTimes : []
            },
            {
                name : "Route 12",
                sub  : "Sydney - Sydney River",
                desti : [],
                times : [],
                revTimes : []
            },
            {
                name : "Route 13",
                sub  : "George Street - Cottage Road",
                desti : [],
                times : [],
                revTimes : []
            }
        ];



        return {
            all: function() {
                return route;
            },
            get: function(routeID) {
                // Simple index lookup
                return route[routeID];
            }
        }
    });
