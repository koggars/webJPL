webJPLControllers.controller('WebJPLCode', 
	function WebJPLCode($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location) {
		var userData = $cookieStore.get("userData");
		if(userData == null)
			$location.path("/");	


		var code = $location.search().c;
		console.log($location.search());

		if(code == null)
		{
			$rootScope.header = "Write Your Own Code";
		}
		else
		{
			$rootScope.header = code+" Problem";
		}


		$rootScope.css = "code";
		$scope.box = {height: 800, font: 20, theme: "monokai", mode: "java"};
		var editor = ace.edit("code-editor");
		$scope.setTheme($scope.box.theme);
		$scope.setMode($scope.box.mode);

		$scope.setTheme = function(themeName)
		{
			 editor.setTheme("ace/theme/"+themeName);
		}

		$scope.setMode = function(modeType)
		{
			editor.getSession().setMode("ace/mode/"+modeType);
		}
	});
