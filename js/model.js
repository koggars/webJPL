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
		"statement" : "https://giant.ict.griffith.edu.au/webJPL/webJPLProblemStatements.php"
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
      themes: [{text: "ambiance", value:"ambiance"},
          {text: "chaos", value:"chaos"},
          {text: "chrome", value:"chrome"},
          {text: "clouds", value:"clouds"},
          {text: "clouds midnight", value:"clouds_midnight"},
          {text: "cobalt", value:"cobalt"},
          {text: "crimson editor", value:"crimson_editor"},
          {text: "dawn", value:"dawn"},
          {text: "dreamweaver", value:"dreamweaver"},
          {text: "eclipse", value:"eclipse"},
          {text: "github", value:"github"},
          {text: "idle fingers", value:"idle_fingers"},
          {text: "kr", value:"kr"},
          {text: "merbivore", value:"merbivore"},
          {text: "merbivore soft", value:"merbivore_soft"},
          {text: "mono industrial", value:"mono_industrial"},
          {text: "monokai", value:"monokai"},
          {text: "pastel on dark", value:"pastel_on_dark"},
          {text: "solarized dark", value:"solarized_dark"},
          {text: "solarized light", value:"solarized_light"},
          {text: "terminal", value:"terminal"},
          {text: "textmate", value:"textmate"},
          {text: "tomorrow", value:"tomorrow"},
          {text: "tomorrow night", value:"tomorrow_night"},
          {text: "tomorrow night blue", value:"tomorrow_night_blue"},
          {text: "tomorrow night bright", value:"tomorrow_night_bright"},
          {text: "tomorrow night eighties", value:"tomorrow_night_eighties"},
          {text: "twillight", value:"twillight"},
          {text: "vibrant ink", value:"vibrant_ink"},
          {text: "xcode", value:"xcode"}],
      mode: [
      {text: "Java", value:"java"},
      {text: "C/C++", value:"c_cpp"},
      {text: "Python", value:"phython"},
      {text: "PHP", value:"php"},
      {text: "Javascript", value:"javascript"}]
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


