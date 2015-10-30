var app = angular.module('practiceApp');


app.controller('mainCtrl', function ($scope, myService) {

	// $scope.getData = function () {
	// 	myService.getData().then(function (dataFromService) {
	// 		$scope.pokeIsh = dataFromService;
	// 		console.log('thisisPokeish', $scope.pokeIsh)
	// 	})
	// }
	$scope.test = "test";
	// $scope.getData();

});

