
		(function()
		{
			if(document.documentMode < 9)
			{
				document.body.innerHTML = "";
				document.write("The content you are trying to view is not supported in the current Document Mode of Internet Explorer. Change the Document Mode to Internet Explorer 9 Standards and try to view the content again.<br>To change the Document Mode, press F12, click Document Mode: <current mode>, and then select Internet Explorer 9 Standards.");
				return;
			}
			window.addEventListener("load",function() 
			{
				setTimeout(function() 
				{					
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = 'assets/js/CPXHRLoader.js';
					script.defer = 'defer';
					script.onload = function()
					{
						var lCSSLoaded = false;
						var lJSLoaded = false;
						function constructDIVs()
						{
							if(lCSSLoaded && lJSLoaded)
							{
								initializeCP();
							}
						}
						cpXHRJSLoader.css('assets/css/CPLibraryAll.css',function() {
							lCSSLoaded = true;
							constructDIVs();
						});
						var lJSFiles = [  'assets/js/jquery-1.6.1.min.js','assets/js/CPM.js','assets/playbar/playbarScript.js' ];
						cpXHRJSLoader.js(lJSFiles,function()
						{
							//console.log("js loaded");
							lJSLoaded = true;
							constructDIVs();
						});
					}
					document.getElementsByTagName('head')[0].appendChild(script);
				},1);
			},false);
		})();
		