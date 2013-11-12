webJPLControllers.controller('WebJPLHelpTut', 
	function WebJPLHelpTut($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location, webJPlHelpModel) {
		var userData = GlobalHeader.rediect($cookieStore.get("userData"), $location);
		if(userData == -1)
			return;	

		$rootScope.css = "help";

		$rootScope.header = userData.coursecode+" Tutorials";

		if(userData.coursecode.charAt(0) == '7')
		{
			userData.coursecode = "1"+userData.coursecode.substr(1);
		}

		$scope.tutorials = webJPlHelpModel.tutorialObject(userData.coursecode);
		$scope.buttonColors = webJPlHelpModel.buttonColors;


	});