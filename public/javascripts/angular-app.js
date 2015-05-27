'use strict'

var QuestionApp = angular.module('QuestionApp', []);

QuestionApp.controller('MainCtrl', function($scope, Questions) {
	$scope.welcome = "Welcome to the QuestionApp";

	Questions.all(function(taco) {
		$scope.questions = taco;
	})
})

QuestionApp.factory('Questions', [ '$http', function($http) {

	this.all = function(cb) {
		$http.get('/questions')
		.success(function(data, status, headers, config) {
			cb(data);
		})
		.error(function(data, status, headers, config) {
			cb(new Error("Something's wrong"));
		});
	};
	
	return this;
}])


var all = function(cb) {
	// does something
	cb(something);
}

all()