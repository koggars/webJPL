var webJPLControllers = angular.module('webJPLControllers', []);


webJPLControllers.controller('WebJPLLogin', 
	function WebJPLLogin($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location) {
		$rootScope = setHeader($rootScope, GlobalHeader.login);
		var userData = $cookieStore.get("userData");
		if(userData == null)
		{
			var login = {
				course: "1001ICT",
				student: "",
				password: "",
			}
		}
		else
		{
			$location.path('/problems');
		}


		$scope.login = login;
		$scope.loginError = "";
		$scope.loginFunction = function(login)
		{

			var output = {
				coursecode:$scope.login.course,
				username:$scope.login.student,
				password:$scope.login.password
			}
			if(output.coursecode != null && output.username != null && output.password != null)
				if(login.$valid)
				{
					$http.get(jplLinks.login, {params: output}).success(function(data) {
						if(data.length == 3)
						{
							$cookieStore.put("userData", output);
							$location.path('/problems');
						}
						else
						{
							$scope.isValid = false;
							$scope.loginError = data;
						}
					})
				}
				else
				{
					$scope.loginError = "Please Complete Form to login!"
				}
			else
			{
				$scope.loginError = "Form Must Be Completed!"
			}
		};

	});
webJPLControllers.controller('WebJPLProblems', 
	function WebJPLProblems($rootScope, $scope, $http, jplLinks, $cookieStore, $location, $window, jplStatus) {

		var userData = $cookieStore.get("userData");

		if(userData == null)
			$location.path("/");	

		$rootScope.header =  userData.coursecode+" JPL Problems";
		$rootScope.css = "problems";

		$scope.student = userData.username;
		$window.jpls = jplStatus;
		$http.get(jplLinks.problems, {params: {coursecode: userData.coursecode, username: userData.username}}).success(function(data) {
			var tmp = data.trim().split("$");
			var problemNameArray = [];
			var problemsArray = {};
			for(var i = 0; i<tmp.length; i++)
			{
				if(tmp[i].length > 0)
				{
					var line = tmp[i].split("%");
					var problemName = line[0];
					var problemObjects = [];

					for(var j = 1; j<line.length; j++)
					{
						var tmp2 = line[j].trim().split("/");
						if(tmp2[0].length > 0)
						{
							var probObj = {};
							probObj.name = tmp2[0];
							probObj.status = tmp2[1];
							probObj.color = jplStatus[probObj.status].color;

							problemObjects.push(probObj);
						}
					}
					problemNameArray.push({value: problemName});
					problemsArray[problemName] = problemObjects;
				}
			}

			$scope.jplProblemNames = problemNameArray;
			$scope.jplTotalProblems = problemsArray;

		});
		$scope.showProblems = false;

		$scope.toggleShow = function()
		{
			if($scope.showProblems)
			{
				$("#problems-list-container").slideUp('slow')
			}
			else
			{
				$("#problems-list-container").slideDown('fast')
			}

			$scope.showProblems = !$scope.showProblems;
		}
		$scope.currentProblem = null;
		$scope.changeProblemName = function(name)
		{

			var currentProblem = {};

			if($scope.jplTotalProblems[name] != null)
			{
				currentProblem.name = name;
				currentProblem.array = $scope.jplTotalProblems[name];


				$scope.currentProblem = currentProblem;
				$scope.toggleShow();
			}
		}
	});

webJPLControllers.controller('WebJPLLogout', 
	function WebJPLLogout($cookieStore, $location) {

		
		$cookieStore.put("userData", null);
			$location.path("/");	
	});


function setHeader(header, gheader)
{
	header.header = gheader.header;
	header.css = gheader.css;

	return header;
}
