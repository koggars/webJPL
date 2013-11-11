webJPLControllers.controller('WebJPLHome', 
	function WebJPLHome($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location) {
		var userData = GlobalHeader.rediect($cookieStore.get("userData"), $location);
		if(userData == -1)
			return;	

		$rootScope.css = "home";

		$rootScope.header = userData.coursecode + " Main Menu";
		$scope.student = userData.username;

		$scope.navButtons = [
			{title: "Problems", location: "#/problems", color: "green"},			
			{title: "Help", location: "", color: "blue"},
			{title: "Quizes", location: "", color: "red"},
			{title: "About", location: "#/about", color: "pink"}];
	});