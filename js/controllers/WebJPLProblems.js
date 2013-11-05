webJPLControllers.controller('WebJPLProblems', 
	function WebJPLProblems($rootScope, $scope, $http, jplLinks, $cookieStore, $location, $window, jplStatus) {

		var userData = $cookieStore.get("userData");

		if(userData == null)
			$location.path("/");	

		$rootScope.header =  "JPL Problems";
		$rootScope.css = "problems";
		//$rootScope.showJPLImage = true;

		$scope.search = "";
		$scope.student = userData.username;
		$scope.totalSearchArray = [];
		$scope.colorGuide = jplStatus;
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
							probObj.statusText = jplStatus[probObj.status].statusText;
							probObj.header = problemName;

							problemObjects.push(probObj);

							$scope.totalSearchArray.push(probObj);
						}
					}
					if(problemsArray[problemName] == null)
					{
						problemNameArray.push({value: problemName});
						problemsArray[problemName] = problemObjects;
					}
					else
					{
						problemName = problemName+"2";
						problemNameArray.push({value: problemName});
						problemsArray[problemName] = problemObjects;
					}

				}
			}

			$http.get(jplLinks.statement, {params: {coursecode: userData.coursecode}}).success(function(data) {
				var tmp = data.split("~");
				var problemNames = {};
				for(var i = 0; i<tmp.length; i++)
				{
					if(tmp[i].length > 0)
					{
						var tmp2 = tmp[i].split("^")
						var problemName = tmp2[0];
						if(problemNames[problemName] == null)
						{
							problemNames[problemName] = 1;
						}
						else
						{
							problemName = problemName+"2";
							problemNames[problemName] = 1;
						}

						for(var j = 1; j<tmp2.length; j++)
						{
							if(tmp2[j].length > 0)
							{
								if(problemsArray[problemName][j-1] != null)
								{
									problemsArray[problemName][j-1].problemDesc = tmp2[j];
								}
							}
						}
					}
				}


				$scope.jplProblemNames = problemNameArray;
				$scope.jplTotalProblems = problemsArray;
			});
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
			$("#problems-catergory-button").toggleClass('active');
			$scope.showProblems = !$scope.showProblems;
			$scope.showProblemText = ($scope.showProblems) ? "Hide" : "Show";
		}
		$scope.showProblemText = "Show";
		$scope.showColorHelp = false;
		$scope.toggleShowColorWinow = function()
		{
			if($scope.showColorHelp)
			{
				$("#problem-color-guide").slideUp('slow')
			}
			else
			{
				$("#problem-color-guide").slideDown('fast')
			}
			$("#problems-color-guide-button").toggleClass('active');
			$scope.showColorHelp = !$scope.showColorHelp;
			$scope.showColorText = ($scope.showColorHelp) ? "Hide" : "Show";
		}
		$scope.showColorText = "Show";
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

			$scope.search = "";
		}

		$scope.displayProblemDesc = function(problemObject)
		{
			var pDesc = problemObject.problemDesc.split("/").join("").split("PROBLEM STATEMENT").join("")
			var diagString = '<div id="problemDescDia" title="'+problemObject.header+' - '+problemObject.name+' Description">';
			diagString += '<span style="text-align: justify;display: block;width: 100%;">';
			diagString += pDesc+'</span></div>';
			var diag = $(diagString);
			$window.diaDesc = problemObject.problemDesc;
			diag.dialog({
	            autoOpen: false,
	            resizable: false,
	            modal: true,
	            width: 'auto',
	            buttons: [ { text: "Ok", click: function() { $( this ).dialog( "close" ); } } ]
	        });
			diag.dialog("open");
		}

		$scope.findObject = function(name)
		{
			$.each($scope.jplTotalProblems, function( key, value ) {
			  for(var i = 0; i<value.length; i++)
			  {
			  	if(value[i].name == name)
			  	{
			  		$scope.displayProblemDesc(value[i]);
			  	}
			  }
			});
		}

		$scope.gotoCode = function(code)
		{
			$location.path('/code').search({c:code});
		}
	});