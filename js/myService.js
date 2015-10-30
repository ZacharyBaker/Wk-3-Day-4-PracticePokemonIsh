angular.module('practiceApp').service('myService', ['$http', '$q', function ($http, $q) {

	this.getData = function () {
		alert("getData is firing");
		alert(typeof $q);
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: "http://pokeapi.co/api/v1/pokemon/1/"
		}).then(function (response) {
			var parsedResponse = response.data;
			console.log('this is the parsedResponse', parsedResponse);
			deferred.resolve(parsedResponse);
		})
		return deferred.promise;
	};

}]);