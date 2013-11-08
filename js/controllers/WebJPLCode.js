webJPLControllers.controller('WebJPLCode', 
	function WebJPLCode($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location, aceModel) {
		var userData = $cookieStore.get("userData");


		if(userData == null)
			$location.path("/");	

		$rootScope.css = "code";
		var editor = ace.edit("code-editor");
		var code = $location.search().c;

		if(code == null)
		{
			$rootScope.header = "Write Your Own Code";
		}
		else
		{
			$rootScope.header = code+" Problem";

			var query = {
				problemname: code,
				coursecode: userData.coursecode,
				username: userData.username,
				language: "Java",
				mode:"normal"
			}

			$http.get(jplLinks.code, {params: query}).success(function(data) {
				editor.setValue(data);
			});
		}
		$scope.isNotJava = (code == null);
		$scope.box = {
				height: 800, font: 20,
				theme: aceModel.themes[16].data,
				mode: aceModel.mode[0].data
		};
		$scope.box.wordWraping = false;

		$scope.toggleWordWraping = function()
		{
			$scope.box.wordWraping = !$scope.box.wordWraping;
			editor.getSession().setUseWrapMode($scope.box.wordWraping);

			$scope.buttonSelected = ($scope.box.wordWraping) ? "active" : "";
		}

		$scope.setTheme = function()
		{
			var themeName = $scope.box.theme;
			editor.setTheme("ace/theme/"+themeName);
		}

		$scope.setMode = function()
		{
			var modeType = $scope.box.mode;
			editor.getSession().setMode("ace/mode/"+modeType);
		}
		$scope.changeEditor = function(int)
		{
			switch(int)
			{
				case 0:
					$scope.box.font++
					break;
				case 1:
					if($scope.box.font-1 >= 1)
						$scope.box.font--
					else
						$scope.box.font=1;
					break;					
				case 2:
					$scope.box.height+=10
					break;
				case 3:
					if($scope.box.height-10 >= $scope.box.font)
						$scope.box.height-=10
					else
						$scope.box.height = $scope.box.font;
					break;
			}
		}
		$scope.ace = aceModel;
		$scope.setTheme();
		$scope.setMode();
		$scope.toggleWordWraping();


		$scope.jplLoading = false;
		$scope.jplComplete = false;
		$scope.jplUserTest = false;


		$scope.runJPl = function(mode, text)
		{
			var source = editor.getValue();
			var query = {
					problemname: code,
					coursecode: userData.coursecode,
					username: userData.username,
					language: "Java",
					mode: (mode == 1 && text != null) ? 1 : 0,
					input: (mode == 1 && text != null) ? text : "",
					source: source
			};
			$scope.jplLoading = true;
		}

	});
