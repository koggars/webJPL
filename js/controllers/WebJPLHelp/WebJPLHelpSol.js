webJPLControllers.controller('WebJPLHelpSol', 
	function WebJPLHelpSol($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location, webJPlHelpModel) {
		var userData = GlobalHeader.rediect($cookieStore.get("userData"), $location);
		if(userData == -1)
			return;	

		$rootScope.css = "help";

		$rootScope.header = userData.coursecode+" Solutions";
});