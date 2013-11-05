webJPLControllers.controller('WebJPLCode', 
	function WebJPLCode($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location) {
		var userData = $cookieStore.get("userData");
		if(userData == null)
			$location.path("/");	


		var code = $location.search().c;
		if(code == null)
		{
			$rootScope.header =  "Write Your Own Code";
		}
		else
		{
			$rootScope.header =  code+" Problem";
		}
		$rootScope.css = "problems";
		//$rootScope.showJPLImage = true;
