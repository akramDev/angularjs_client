angular.module('ngBoilerplate.account', ['ui.router'])
.config(function($stateProvider){
	$stateProvider.state('login', {
		url:'/login',
		views:{
			'main':{
				templateUrl:'account/login.tpl.html',
				controller:'LoginCtrl'
			}
		},
		data: { pageTitle: "Login" }
	})
	.state('register', {
		url:'/register',
		views:{
			'main':{
				templateUrl:'account/register.tpl.html',
				controller:'RegisterCtrl'
			}
		},
		data: { pageTitle: "Register" }
	});
})
.controller('LoginCtrl',function($scope){
	$scope.login = function(){
		alert("user logged with " + $scope.account.name + " and " + $scope.account.password);
	};
})
.controller('RegisterCtrl',function($scope){
	$scope.register = function(){
		alert("user register with " + $scope.account.name + " and " + $scope.account.password);
	};
});