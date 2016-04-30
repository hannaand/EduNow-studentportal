var event = angular.module('event', []);
event.controller('eventCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

  $scope.filter = 'none';

// get all events
var refresh = function() {
  
  $http.get('/api/eventlist')
  .success(function(response) {
    console.log("I got the data I requested");
    $scope.eventlist = response.events;
    console.log(response);
    $scope.event = "";
  });
};  

refresh();

// add new event
  $scope.addEvent = function() {
    $http.post('/api/eventlist', $scope.event)
    .success(function(response) {
    console.log(response);
    refresh();
  });
};

// delete event
$scope.deleteEvent = function(index) {
  $http.delete('/api/eventlist/' + $scope.eventlist[index]._id)
  .success(function() {
    $scope.eventlist.splice(index, 1);
  })
  .error(function(err){
    alert('Error! Something went wrong');
    refresh();
  });     
};

// update event
$scope.toggleEdit = function(index) {
      $scope.eventlist[index].edit = !$scope.eventlist[index].edit;
};

// save update
$scope.saveEvent = function(index) {
      $http.put('/api/eventlist/' + $scope.eventlist[index]._id, $scope.eventlist[index])
      .success(function(){
        $scope.eventlist[index].edit = false;
      })
      .error(function(err){
        alert('Error! Här blev det lite fel!' + err);
      });
    };

    $scope.searchText = '';
    $scope.setSearchText = function(n) {
        $scope.searchText = n;
      console.log(n);
    }

$scope.deselect = function() {
  $scope.eventlist = "";
};

}]);﻿
