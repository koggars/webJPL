webJPLApp.factory("GlobalHeader",function(){
	var globalHeaders = {
		login : {
			header : "Login to use webJPL",
			css : "login"
		},
    setHeader: function(header,type)
    {
      header.header = type.header;
      header.css = type.css;

      return header;
    }

	}

	return globalHeaders;
});

webJPLApp.factory("jplLinks",function(){
	var jplLinks = {
		"login" : "https://giant.ict.griffith.edu.au/webJPL/webJPLLogon.php",
		"problems" : "https://giant.ict.griffith.edu.au/webJPL/webJPLProblems.php",
		"statement" : "https://giant.ict.griffith.edu.au/webJPL/webJPLProblemStatements.php",
    "code" : "https://giant.ict.griffith.edu.au/webJPL/webJPLProblem.php"
	}

	return jplLinks;
});
webJPLApp.factory("jplStatus", function() {
  var statusArray = [{statusText : "Not started", color : "white"},
                    {statusText : "Obtained a copy of the JPL template", color : "cyan"},
                    {statusText : "Compiled program at least once", color : "#6495ED"},
                    {statusText : "Program runs but has failed some tests", color : "red"},
                    {statusText : "Program has been run at least once outside JPL automated testing", color : "blue"},
                    {statusText : "Program has successfully completed all tests", color : "lime"},
                    {statusText : "Solution was obtained", color : "yellow"}];
  return statusArray;
})
webJPLApp.factory("aceModel", function() {
  var aceModel = {
      themes: [{text: "ambiance", data:"ambiance"},
          {text: "chaos", data:"chaos"},
          {text: "chrome", data:"chrome"},
          {text: "clouds", data:"clouds"},
          {text: "clouds midnight", data:"clouds_midnight"},
          {text: "cobalt", data:"cobalt"},
          {text: "crimson editor", data:"crimson_editor"},
          {text: "dawn", data:"dawn"},
          {text: "dreamweaver", data:"dreamweaver"},
          {text: "eclipse", data:"eclipse"},
          {text: "github", data:"github"},
          {text: "idle fingers", data:"idle_fingers"},
          {text: "kr", data:"kr"},
          {text: "merbivore", data:"merbivore"},
          {text: "merbivore soft", data:"merbivore_soft"},
          {text: "mono industrial", data:"mono_industrial"},
          {text: "monokai", data:"monokai"},
          {text: "pastel on dark", data:"pastel_on_dark"},
          {text: "solarized dark", data:"solarized_dark"},
          {text: "solarized light", data:"solarized_light"},
          {text: "terminal", data:"terminal"},
          {text: "textmate", data:"textmate"},
          {text: "tomorrow", data:"tomorrow"},
          {text: "tomorrow night", data:"tomorrow_night"},
          {text: "tomorrow night blue", data:"tomorrow_night_blue"},
          {text: "tomorrow night bright", data:"tomorrow_night_bright"},
          {text: "tomorrow night eighties", data:"tomorrow_night_eighties"},
          {text: "twillight", data:"twillight"},
          {text: "vibrant ink", data:"vibrant_ink"},
          {text: "xcode", data:"xcode"}],

      mode: [{text: "Java", data:"java"},
      {text: "C/C++", data:"c_cpp"},
      {text: "Python", data:"phython"},
      {text: "PHP", data:"php"},
      {text: "Javascript", data:"javascript"}]
    }

  return aceModel;
})
webJPLApp.directive('student', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
      	var empty = (viewValue=="" && (viewValue==null || viewValue==""));
      	var hasS = viewValue.substring(0, 1) == "s";
      	var length = viewValue.length > 7 && viewValue.length < 9;

      	var bool = !empty && hasS && length;

        if (bool) {
          // it is valid
          ctrl.$setValidity('student', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('student', false);
          return undefined;
        }
      });
    }
  };
});

webJPLApp.directive('notempty', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
      	var bool = (viewValue=="" && (viewValue==null || viewValue==""));
        if (!bool) {
          // it is valid
          ctrl.$setValidity('notempty', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('notempty', false);
          return undefined;
        }
      });
    }
  };
});


