var app = angular.module('practiceApp');
app.service('myService', function () {

	// this.getData = function ($http, $q) {
	// 	alert("getData is firing");
	// 	var deferred = $q.defer();
	// 	$http({
	// 		method: 'GET',
	// 		url: "http://pokeapi.co/api/v1/pokemon/1/"
	// 	}).then(function (response) {
	// 		var parsedResponse = response.data;
	// 		console.log('this is the parsedResponse', parsedResponse);
	// 		deferred.resolve(parsedResponse);
	// 	})
	// 	return deferred.promise;
	// };

});