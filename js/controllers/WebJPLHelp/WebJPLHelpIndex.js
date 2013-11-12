webJPLControllers.controller('WebJPLHelpIndex', 
	function WebJPLHelpIndex($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location) {
		var userData = GlobalHeader.rediect($cookieStore.get("userData"), $location);
		if(userData == -1)
			return;	

		$rootScope.css = "help";

		$rootScope.header = "Course Help";
		$scope.student = userData.username;
		$scope.cCode = userData.coursecode;

		if(userData.coursecode.charAt(0) == '7')
		{
			userData.coursecode = "1"+userData.coursecode.substr(1);
		}

		$scope.navButtons = [
			{title: "Tutorials", location: "#/help/tutorials", color: "green"},			
			{title: "Videos", location: "#/help/videos", color: "blue"},
			{title: "Examples", location: "#/help/examples", color: "red"},
			{title: "Solutions", location: "#/help/solutions", color: "pink"}];
	});