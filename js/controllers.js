
var worldcupControllers = angular.module('worldcupControllers', ['pascalprecht.translate']);

worldcupControllers.controller('GroupsCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('data/data.group.json?t=' + t).success(function(data) {
	  $scope.groups = data.groups;
	});



}]).controller('FifaRankCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('data/data.fifarank.json?t=' + t).success(function(data) {
	  $scope.teams = data;
	});



}]).controller('LivescoreCtrl', ['$scope', '$http', function($scope, $http) {
	
	$http.get('data/data.rounds.json?t=' + t).success(function(data) {
	  	$scope.rounds = data.rounds;
	  	for (var i = $scope.rounds.length - 1; i >= 0; i--) {
	  		var url_round = 'data/data.round' + (i + 1) +'.json?t=' + t;
	  		$scope.getGames(i, url_round);
	  	}; 

	  	 
	});


	$scope.getGames = function(i, url){
		$http.get(url).success(function(data) {
			$scope.rounds[i].games  = data.games;
			 
		});	
	}

	$scope.matchDetail = function(teamkey1, teamkey2){

	}
}]);
var t = randomNumber();
function randomNumber(){
	//return '';
	return Math.random(Math.random() *  10000000000);
}