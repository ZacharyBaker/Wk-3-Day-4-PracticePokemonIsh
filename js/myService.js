angular.module('practiceApp').service('myService', ['$http', '$q', function ($http, $q) {


var baseURL = "http://pokeapi.co";

	this.getData = function () {
		
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: baseURL + "/api/v1/pokemon/1/"
		}).then(function (response) {
			var parsedResponse = response.data.moves;
			console.log('this is the parsedResponse', parsedResponse);
			deferred.resolve(parsedResponse);
		})
		return deferred.promise;
	};
	
	this.getMoveDetails = function(url){
			var deferred = $q.defer();	
			 $http({
			method: 'GET',
			url: baseURL + url
		}).then(function(response){
			deferred.resolve(response.data);
		});
		return deferred.promise;
	}

}]);