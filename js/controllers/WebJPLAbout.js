webJPLControllers.controller('WebJPLAbout', 
	function WebJPLAbout($rootScope, GlobalHeader, $cookieStore, $location) {
		var userData = GlobalHeader.rediect($cookieStore.get("userData"), $location);
		if(userData == -1)
			return;

		$rootScope.css = "about";

		$rootScope.header = "About this App";
	});