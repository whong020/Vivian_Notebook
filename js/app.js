var myApp = angular.module('myApp',[]);

myApp.factory('myService', function () {
  var service = {};
  service.collection = ["A","B","C"];
  service.value = "A";
  return service;
});

myApp.controller('MainCtrl', function (myService) {
  var controller = {};
  controller.twoSum = twoSum;
  controller.threeSum = threeSum;
  return controller;;
});
