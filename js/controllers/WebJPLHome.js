webJPLControllers.controller('WebJPLHome', 
	function WebJPLHome($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location) {
		var userData = $cookieStore.get("userData");

		if(userData == null)
			$location.path("/");	

		$rootScope.css = "home";

		$rootScope.header = userData.coursecode + " Main Menu";
		$scope.student = userData.username;

		$scope.navButtons = [
			{title: "Problems", location: "#/problems", color: "green"},			
			{title: "New Code", location: "", color: "blue"},
			{title: "Quizes", location: "", color: "red"},
			{title: "About", location: "", color: "pink"}];
	});