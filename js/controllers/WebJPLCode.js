webJPLControllers.controller('WebJPLCode', 
	function WebJPLCode($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location, aceModel, webJPlCodeModel) {
		var userData = GlobalHeader.rediect($cookieStore.get("userData"), $location);
		if(userData == -1)
			return;
			
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
				$scope.jplProblemLoading = false;
				var codeData = webJPlCodeModel.getProblem(data+"");
				$scope.javaHeader = codeData.javaHeader;
				$scope.javaTrailer = codeData.javaTrailer;

				editor.setValue(codeData.text);
			});
		}
		$scope.isNotJava = (code == null);
		
		$scope.box = $cookieStore.get("boxSettings");
		if($scope.box == null)
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
		$scope.jplInput = "";

		$scope.jplGetInput = false;
		$scope.jplLoading = false;
		$scope.jplComplete = false;
		$scope.jplUserTest = false;
		$scope.jplError = false;

		$scope.jplProblemLoading = true;
		$scope.hideArr = [false, false, false, false];

		$scope.runJPl = function(option, text)
		{
			var source = editor.getValue().substr(1);
			var object = {
				javaHeader : $scope.javaHeader, 
				javaTrailer : $scope.javaTrailer,
				problemName : code,
				userName : userData.username,
			};
			source = webJPlCodeModel.setProblem(source, object);
			$scope.jplGetInput = false;
			$scope.jplComplete = false;
			$scope.jplUserTest = false;

			if(option == 1 && text == "")
				text = "    ";
			var problemName = code;
			var courseCode = userData.coursecode;
			var userName = userData.username;
			var programmingLanguage = "Java";
			var mode = (option == 1 && text != null) ? 1 : 0;
			var userInput = (option == 1 && text != null) ? text : "";
			var js2 = source;

			if(!$scope.jplLoading)
			{
				$scope.jplLoading = true;
				var xsrf = "problemname=" + problemName + "&coursecode=" + courseCode + "&username=" + userName + "&source=" + js2 + "&language=" + programmingLanguage + "&mode=" + mode + "&input=" + userInput
				$http({
					    method: 'POST',
					    url: jplLinks.run,
					    data: xsrf,
					    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					}).success(function(data) {

						$scope.jplLoading = false;
						$scope.jplComplete = false;
						$scope.jplError = false;
						$scope.jplUserTest = false;
						$scope.hideArr = [false, false, false, false];

						if(mode == 1)
						{
							
							if(data.indexOf("Exception in thread") == -1)
							{
								$scope.jplUserTestOutput = data.replace("======","");
								$scope.jplUserTest = true;
							}
							else
							{
								$scope.jplErrorHeader = "Error In Java Code.";
								$scope.jplErrorData = data;
								$scope.jplError = true;
							}
						}
						else if(mode == 0)
						{
							jplData = webJPlCodeModel.getTestResults(data, userName)

							if(jplData.jplTestResults.length > 0)
							{
								$scope.jplTestResults = jplData.jplTestResults;
								$scope.jplTestStatus = jplData.jplTestStatus; 
								$scope.jplComplete = true;
							}
							else
							{
								$scope.jplErrorHeader = "Unknown Error!";
								$scope.jplErrorData = data;
								$scope.jplError = true;
							}
						}
				});
			}
		}

		$scope.hide = function() {

			$scope.hideArr[0] = $scope.jplLoading;
			$scope.hideArr[1] = $scope.jplComplete;
			$scope.hideArr[2] = $scope.jplUserTest;
			$scope.hideArr[3] = $scope.jplError;

			$scope.jplLoading = false;
			$scope.jplComplete = false;
			$scope.jplUserTest = false;
			$scope.jplError = false;
		}

		$scope.unhide = function() {
			$scope.jplLoading = $scope.hideArr[0];
			$scope.jplComplete = $scope.hideArr[1];
			$scope.jplUserTest = $scope.hideArr[2];
			$scope.jplError = $scope.hideArr[3]

			$scope.hideArr = [false, false, false, false];
		}

		$scope.$watchCollection('box', function() {
			$cookieStore.put("boxSettings", $scope.box);
		})
		editor.setValue("");
	});
