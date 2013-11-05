webJPLControllers.controller('WebJPLLogout', 
	function WebJPLLogout($cookieStore, $location) {

		
		$cookieStore.put("userData", null);
			$location.path("/");	
	});