angular.module('practiceApp').controller('mainCtrl', ['$scope', 'myService', function ($scope, myService) {

	$scope.getData = function () {
		myService.getData().then(function (dataFromService) {
			$scope.moves = dataFromService;
			console.log('thisisPokeish', $scope.pokeIsh)
		})
	}
	
	
	$scope.showHide = true;
	
	$scope.moveDataFunc = function(url){
		$scope.showHide = false;
		myService.getMoveDetails(url).then(function(ish){
			$scope.moveDetails = ish;
		})
		
	}

}]);

