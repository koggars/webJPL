webJPLControllers.controller('WebJPLLogin', 
	function WebJPLLogin($rootScope, GlobalHeader, $scope, $http, jplLinks, $cookieStore, $location) {
		$rootScope = GlobalHeader.setHeader($rootScope, GlobalHeader.login);
		
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
			$location.path('/home');
		}


		$scope.login = login;
		$scope.loginError = "";

		$scope.courses = [
			{text: "1001ICT", data: "1001ICT"},
			{text: "7001ICT", data: "7001ICT"},
			{text: "1005ICT", data: "1005ICT"},
			{text: "7005ICT", data: "7005ICT"},
		]

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
							$location.path('/home');
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