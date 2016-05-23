angular
.module('auth0')
.controller('auth0Ctrl', ['$scope', '$meteor',
	function ($scope, $meteor) {

		$scope.tasks = [{
							text: 'This is task 1'
							}, {
							text: 'This is task 2'
							}, {
							text: 'This is task 3'
						}];

		$scope.loginUserWithAuth0 = function  () {
			if(Meteor.isCordova) {
				// popup doesn't work on mobile
				Meteor.loginWithAuth0({ loginStyle: 'redirect' });
			} else {
				Meteor.loginWithAuth0({ loginStyle: 'popup' });
			}
		};

		$scope.logout = function  () {
			Meteor.logout(function(err) {
			  // callback
			  alert('logout success');
			});
		};
	}]);