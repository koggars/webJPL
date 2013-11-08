webJPLControllers.controller('WebJPLAbout', 
	function WebJPLAbout($rootScope, $cookieStore, $location) {
		var userData = $cookieStore.get("userData");


		if(userData == null)
			$location.path("/");

		$rootScope.css = "about";

		$rootScope.header = "About this App";
	});