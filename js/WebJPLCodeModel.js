String.prototype.replaceAll = function(str1, str2, ignore){return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);};

webJPLApp.factory("webJPlCodeModel",function(){
	return {
		getProblem : function(text)
		{
			while (text.charAt(0) == ' ' || text.charAt(0) == '\n')
			{
         text = text.substr(1);
       if ((index = text.indexOf("import")) != -1)
         {index = text.indexOf("\n");
          var javaHeader = text.substring(0, index + 1);
          text = text.substr(index);
          while (text.charAt(0) == ' ' || text.charAt(0) == '\n')
            text = text.substr(1);
          text = "\n " + text;  
         }  
       if ((index = text.indexOf("}}}")) != -1)  
         {text = text.replaceAll("}}}", "");
          var javaTrailer = "}}}";
         }
      }
           
      while (text.indexOf(" \n \n") != -1)
        text = text.replaceAll(" \n \n", " \n");
      while (text.indexOf("\n\n") != -1)
        text = text.replaceAll("\n\n", "\n");
      while (text.indexOf(" \n\n") != -1)
        text = text.replaceAll(" \n\n", "\n");
      while (text.charAt(text.length - 1) == '\n')
        text = text.substring(0, text.length - 1);  

    	return {text: text, javaHeader: javaHeader, javaTrailer: javaTrailer}
		},

		setProblem: function(js1, object)
		{
			console.log(object);
			js1 = object.javaHeader + js1 + object.javaTrailer;
			var js2 = "";


			js2 = js1.replace(object.problemName, object.userName + "_" + object.problemName);

			js2 = js2.replaceAll("+", "%a%");
			js2 = js2.replaceAll("&", "%b%");
			js2 = js2.replaceAll("\n", "%%");

			return js2;
		},
    getTestResults: function(data, userName)
    {
      var components = data.split("%");
      var passed = true;
      var fails = 0;
      var objectHeaders = ["test","input","expected","output"];
      var dataObjects = [];

      var jplTestStatus = {};

      console.log(components)
      for (var i = 0; i < components.length; i++)
      {
        if(components[i] != "" && components[i] != null)
        {
          var dataObjectRow = {};

          var row = components[i].split(" : ");

          if (row.length < 5)
            row = components[i].split(":");

          for (var j = 0; j < 4; j++)
          {
            if(row[j] != null)
            {
              var text = row[j];
              text = text.replaceAll("======",""); 
              text = text.trim();
              dataObjectRow[objectHeaders[j]] = text;
            }
          }

          if(row != null)
          {
            if(components[i].indexOf("Fail") != -1)
            {
              dataObjectRow.passed = false;
              passed = false;
              fails++;
            }  
            else 
            {
              dataObjectRow.passed = true;
            }
            if(dataObjectRow[objectHeaders[0]] != null || dataObjectRow[objectHeaders[1]] != null || dataObjectRow[objectHeaders[2]] != null || dataObjectRow[objectHeaders[3]] != null)
              dataObjects.push(dataObjectRow);
          }
        }
      }

      if (passed)
      {
        jplTestStatus.value = "Passed all " + (components.length - 1) + " tests"; 
      }
      else  
      {
        if (fails == 1)
          jplTestStatus.value = "Failed " + fails + " test";
        else  
          jplTestStatus.value = "Failed " + fails + " tests";
      }
      jplTestStatus.passed = passed;

      console.log(dataObjects);

      return {jplTestResults: dataObjects, jplTestStatus: jplTestStatus};
	  }
  }
});