webJPLApp.factory("webJPlHelpModel",function(){ return {

	tutorialObject : function(coursecode) {

		var returnedObject = [];

		if(coursecode = "1001ICT")
		{
			returnedObject = [
			{
				title:"Data Types",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html"
			},
			{
				title:"Arith. Operators",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/op1.html"
			},
			{
				title:"Boolean Operators",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/op2.html"
			},
			{
				title:"Expressions",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/expressions.html"
			},
			{
				title:"if-else",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/if.html"
			},
			{
				title:"switch",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/switch.html"
			},
			{
				title:"while",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/while.html"
			},
			{
				title:"for",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/for.html"
			},
			{
				title:"branch",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/branch.html"
			},
			{
				title:"Arrays",
				link: "http://download.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"
			},
			{
				title:"Methods",
				link: "http://download.oracle.com/javase/tutorial/java/javaOO/methods.html"
			},
			{
				title:"Arguments",
				link: "http://download.oracle.com/javase/tutorial/java/javaOO/arguments.html"
			}]
		}
		else if(coursecode == "1007ICT")
		{
			returnedObject = [
			{
				title:"Exceptions",
				link: "http://docs.oracle.com/javase/tutorial/essential/exceptions/index.html"
			},
			{
				title:"Input/Output",
				link: "http://docs.oracle.com/javase/tutorial/essential/io/index.html"
			},
			{
				title:"OO Concepts",
				link: "http://docs.oracle.com/javase/tutorial/java/concepts/index.html"
			},
			{
				title:"Classes",
				link: "http://docs.oracle.com/javase/tutorial/java/javaOO/index.html"
			},
			{
				title:"Inheritance",
				link: "http://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html"
			},
			{
				title:"Polymorphism",
				link: "http://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html"
			},
			{
				title:"Interfaces",
				link: "http://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html"
			},
			{
				title:"Swing Components",
				link: "http://docs.oracle.com/javase/tutorial/uiswing/components/index.html"
			},
			{
				title:"Swing Layouts",
				link: "http://docs.oracle.com/javase/tutorial/uiswing/layout/index.html"
			},
			{
				title:"Swing Events",
				link: "http://docs.oracle.com/javase/tutorial/uiswing/events/index.html"
			},
			{
				title:"Generics",
				link: "http://docs.oracle.com/javase/tutorial/java/generics/index.html"
			},
			{
				title:"Collections",
				link: "http://docs.oracle.com/javase/tutorial/collections/index.html"
			}
			]
		}
		return returnedObject;
	},

	videoObject : function(coursecode)
	{
		var returnedObject = {};
		returnedObject.link = "http://www.ict.griffith.edu.au/JPL/videopage.php";


		if(coursecode = "1001ICT")
		{
			returnedObject.values = 
			[
				{title: "Install JPL", value: "1001ICTInstallJPL"},
				{title: "Variables", value: "1001ICTVariables"},
				{title: "Arith. Expressions", value: "1001ICTArithmetic"},
				{title: "Bool. Expressions 1", value: "1001ICTBoolPart1"},
				{title: "Bool. Expressions 2", value: "1001ICTBoolPart2"},
				{title: "Bool. Expressions 3", value: "1001ICTBoolPart3"},
				{title: "Strings", value: "1001ICTStrings"},
				{title: "if-else", value: "1001ICTIfElse"},
				{title: "while", value: "1001ICTWhileLoop"},
				{title: "do-while", value: "1001ICTDoWhileLoop"},
				{title: "for", value: "1001ICTForLoop"},
				{title: "Arrays", value: "1001ICTArrays"},
				{title: "Methods", value: "1001ICTMethods"},
				{title: "Debugging", value: "1001ICTDebugging"},
			];
		}
		else if(coursecode == "1007ICT")
		{
			returnedObject.values = [
				{title: "Exceptions", value: "1005ICTExceptions"},
				{title: "Files", value: "1005ICTFiles"},
				{title: "Classes 1", value: "1005ICTClasses1"},
				{title: "Classes 2", value: "1005ICTClasses2"},
				{title: "Classes 3", value: "1005ICTClasses3"},
				{title: "Inheritance", value: "1005ICTInheritance"},
				{title: "Polymorphism", value: "1005ICTPolymorphism"},
				{title: "GUI", value: "1005ICTGUI"},
				{title: "Collections", value: "1005ICTCollections"},
			];
		}
		return returnedObject;
	},

	examplesObject: function(coursecode)
	{
		var returnedObject = {};
		returnedObject.link = "http://www.ict.griffith.edu.au/";

		if(coursecode = "1001ICT")
		{
			returnedObject.values = [
				{title: "Arith. Expression", value: "arithExp.java"},
				{title: "Bool. Expression", value: "booleanExp.java"},
				{title: "if-else", value: "conditional.java"},
				{title: "for loop", value: "loops.java"},
				{title: "Strings", value: "strings.java"},
				{title: "String Methods", value: "stringmethods.txt"},
				{title: "Arrays", value: "arrays.java"},
				{title: "Methods", value: "methods.java"},
			];
		}
		else if(coursecode == "1007ICT")
		{
			returnedObject.values = [
				{title: "String Methods", value: "stringmethods.txt"},
				{title: "Exceptions", value: "ExceptionDemo.java"},
				{title: "Files", value: "FileClassDemo.java"},
				{title: "Class 1", value: "DateTest.java"},
				{title: "Class 2", value: "Hangman.java"},
				{title: "Inheritance", value: "Book.java"},
				{title: "Polymorphism", value: "Polymorphic.java"},
				{title: "Interfaces", value: "SecretTest.java"},
				{title: "GUI 1", value: "ButtonDemo.java"},
				{title: "GUI 2", value: "StopWatch.java"},
				{title: "GUI 3", value: "TrafficLight.java"},
				{title: "ArrayList", value: "ArrayListDemo.java"},
				{title: "HashMap", value: "HashMapDemo.java"},
			];
		}
	},
	buttonColors: ["00e331","00b2e3","e00331","e300b2"],
}});