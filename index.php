<?php header('Access-Control-Allow-Origin: *'); ?>
<!DOCTYPE HTML>
<html lang="en" ng-app="webJPLApp">
	<head>
		<title>Web JPL - Mobile</title>
		<meta charset='utf-8' />
	    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
	    <meta name="apple-mobile-web-app-capable" content="yes">
	    <meta name="apple-mobile-web-app-status-bar-style" content="black">
	    <link rel="stylesheet" href="css/root.css" />
		<link rel="stylesheet" href="css/{{css}}.css" ng-show='css != null || css != ""'/>

		<!-- AngularJS MVC Framework -->
		<script src="lib/AngularJS/angular.js"></script>
  		<script src="lib/AngularJS/angular-route.js"></script>
		<script src="lib/AngularJS/angular-cookies.js"></script>

  		<!-- jQuery -->
		<script src="lib/jQuery.js"></script>
		<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

		<!-- Ace JS -->
		<script src="lib/Ace/ace.js"></script>

		<!-- Main App Javascript (Contains Routing) -->
		<script src="js/app.js"></script>

		<!-- Main App Models -->
		<script src="js/models/WebJPLModels.js"></script>
		<script src="js/models/WebJPLCodeModel.js"></script>
		<script src="js/models/WebJPLHelpModel.js"></script>

		<!-- Main App Controlers -->
		<script src="js/controllers/WebJPLLogin.js"></script>
		<script src="js/controllers/WebJPLLogout.js"></script>
		<script src="js/controllers/WebJPLProblems.js"></script>
		<script src="js/controllers/WebJPLCode.js"></script>
		<script src="js/controllers/WebJPLHome.js"></script>
		<script src="js/controllers/WebJPLAbout.js"></script>

		<!-- Help Page Controlers -->
		<script src="js/controllers/WebJPLHelp/WebJPLHelpIndex.js"></script>
		<script src="js/controllers/WebJPLHelp/WebJPLHelpTut.js"></script>
		<script src="js/controllers/WebJPLHelp/WebJPLHelpVideos.js"></script>
		<script src="js/controllers/WebJPLHelp/WebJPLHelpExamples.js"></script>
		<script src="js/controllers/WebJPLHelp/WebJPLHelpSol.js"></script>
	</head>
	<body>
		<div id='root-main'>
			<div id='root-header' class='root-bar'>
				<img ng-show='showJPLImage' id="jplHeader"src="images/jplwhite30.jpg">
				<p id='root-header-content'>{{header}}</p>
			</div>
			<div id='root-body'>
				<div ng-view></div>
			</div>
			<div id='root-footer' class='root-bar'>Developed by Brandon White & Darryn McLeod</div>
		</div>
	</body>
</html>
