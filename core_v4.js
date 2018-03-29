

function get_screen_width() {

	var window_width = window.innerWidth ;

var today = new Date();
 var the_date = new Date("December 31, 2023");
 var the_cookie_date = the_date.toGMTString();
 var the_cookie = "users_resolution="+ window_width +"x"+ screen.height;
 var the_cookie = the_cookie + ";expires=" + the_cookie_date;
 document.cookie=the_cookie


$.get('?page=set_screen&size=' + window_width, function(data) {
  //alert('Load was performed.');
});

}



function CheckForJPG(divName)
{
    var fup = document.getElementById(divName);
    if (!fup)
    {
          //alert(divName);
	   return true;
    }
    var fileName = fup.value;

    if (fileName == "") return true;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
    //if(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "doc")
    if( ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "png" || ext == "PNG" || ext == "ICO" || ext == "ico"   )
    {
        return true;
    }
    else
    {
        alert("You may only upload JPG images");
        fup.focus();
        return false;
    }
}

function CheckForJPGMP3(divName)
{
    var fup = document.getElementById(divName);
    if (!fup)
    {
          //alert(divName);
	   return true;
    }
    var fileName = fup.value;
    if (fileName == "") return true;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
    //if(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "doc")
    if( ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "MP3" || ext == "mp3" )
    {
        return true;
    }
    else
    {
        alert("You may only upload JPG and MP3 files");
        fup.focus();
        return false;
    }
}




 function strstr( haystack, needle, bool ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strstr('Kevin van Zonneveld', 'van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: strstr('Kevin van Zonneveld', 'van', true);
    // *     returns 2: 'Kevin '

    var pos = 0;

    pos = haystack.indexOf( needle );
    if( pos == -1 ){
        return false;
    } else{
        if( bool ){
            return haystack.substr( 0, pos );
        } else{
            return haystack.slice( pos );
        }
    }
}

function getYOffset() {
    var pageY;
    if(typeof(window.pageYOffset)=='number') {
       pageY=window.pageYOffset;
    }
    else {
       pageY=document.documentElement.scrollTop;
    }
    return pageY;
}


function s101_popup_close() {

		$('#popup_wrap').fadeOut(600);
  	$('#light_box_effect').fadeOut(660) ;

	 $('#s101_container2').hide(600) ;

	 $('#s101_container2').html('') ;

    	return;

}


function isEmpty(str)
{
  // Check whether string is empty.
  for (var intLoop = 0; intLoop < str.length; intLoop++)
   if (" " != str.charAt(intLoop))
    return false;
  return true;
}

 function checkRequired(f)
 {
  var strError = "";
  for (var intLoop = 0; intLoop < f.elements.length; intLoop++)
  if (null!=f.elements[intLoop].getAttribute("required"))
   if (isEmpty(f.elements[intLoop].value))
    strError += "  " + f.elements[intLoop].name + "\n";
   if ("" != strError) {
    alert("Required data is missing:\n" + strError);
    return false;
   } else
  return true
 }

 var s101Manager =
 {

    doSubmitForm : function(sFormName,sResultDiv,IsFileUpload)
    {


		if (g_Debug_Mode == 'on') {

			alert('doSubmitForm') ;
			alert('SFormName:' + sFormName ) ;
			alert('sResultDiv:' + sResultDiv ) ;
			alert('IsFileUpload:' + IsFileUpload ) ;

		}

        // argument formId can be the id or name attribute value of the
        // HTML form, or an HTML form object.

        var formObject = document.getElementById(sFormName);

        if (!formObject)
        {
            alert('bad formObject: ' + sFormName);
        }

        if (!checkRequired(formObject)  )
        {
            return false;
        }

        if (IsFileUpload == undefined)
        {

			// Do nothing

        }
        else
        {

			// Do nothing

        }

//    Example to grab extra data fields and then add to 'data:' below
//
//    var event_venue = document.getElementById('event_venue').value;

	if (sFormName.substr(0,1) == '.') {

		// do something if needed

	} else {

		if (sFormName.substr(0,1) == '#') {

			// do something if needed

		} else {

			sFormName = '#' + sFormName ;

		}

	}



		if (g_Debug_Mode == 'on') {

			// alert('here now: ' + sFormName) ;

		}

    save_mp3_q = $.ajax({
        type: 'POST',
        url: 'index.php',
		data: $(sFormName).serialize(),
        success: function(content)
        {

		if (g_Debug_Mode == 'on') {

		alert('content:' + content) ;

		alert($(sFormName).serialize()) ;

		}

		s101Manager.doProcessResponse(sFormName,sResultDiv,content,'form');

            if (content == 'done')
            {

				// do something if needed

            }
            else
            {

				// do something if needed

            }

// Add Message or action for Completion if needed
//
//			$('#' + sResultDiv).html("Saved...<br><br>");

//			alert(content.substr(0, 11)) ;


//				alert(content) ;

//				alert(content.indexOf("#RESPONSE=")) ;

	        if (content.indexOf("#RESPONSE=") > 0)
			{
//				alert(content.indexOf("#RESPONSE=")) ;

				return;
			}



	        if (content.substr(0, 9) != 'networks|')
			{
				$('#s101_container2').fadeOut(600);
			}

        }
    });

		if (g_Debug_Mode == 'on') {

			// alert('all done') ;

		}
    },


    doSubmitForm2 : function(sFormName,sResultDiv,sDisableButton, sHideMessage)
    {

		if (g_Debug_Mode == 'on') {

			// alert('doSubmitForm2') ;

		}

	var DisableButtonID = sDisableButton ;

        // argument formId can be the id or name attribute value of the
        // HTML form, or an HTML form object.
        var formObject = document.getElementById(sFormName);
        if (!formObject)
        {
            alert('bad formObject: ' + sFormName);
        }

        if (!checkRequired(formObject)  )
        {
            return false;
        }



//    Example to grab extra data fields and then add to 'data:' below
//
//    var event_venue = document.getElementById('event_venue').value;

	if (sFormName.substr(0,1) == '.') {

		// do something if needed

	} else {

		if (sFormName.substr(0,1) == '#') {

			// do something if needed

		} else {

			sFormName = '#' + sFormName ;

		}

	}

    save_mp3_q = $.ajax({
        type: 'POST',
        url: 'index.php',
		data: $(sFormName).serialize(),
        success: function(content)
        {

//		alert(content) ;

		s101Manager.doProcessResponse(sFormName,sResultDiv,content,'form');

            if (content == 'done')
            {

				// do something if needed

            }
            else
            {

				// do something if needed

            }

// Add Message or action for Completion if needed
//
//			$('#' + sResultDiv).html("Saved...<br><br>");

	        $('#s101_container2').fadeOut(600);

        }
    });

    },

   doSubmitForm3 : function(sFormName,sResultDiv,sHideMessage)
    {

		if (g_Debug_Mode == 'on') {

			// alert('doSubmitForm3') ;

		}

        // argument formId can be the id or name attribute value of the
        // HTML form, or an HTML form object.
        var formObject = document.getElementById(sFormName);
        if (!formObject)
        {
            alert('bad formObject: ' + sFormName);
        }

        if (!checkRequired(formObject)  )
        {
            return false;
        }


//    Example to grab extra data fields and then add to 'data:' below
//
//    var event_venue = document.getElementById('event_venue').value;

	if (sFormName.substr(0,1) == '.') {

		// do something if needed

	} else {

		if (sFormName.substr(0,1) == '#') {

			// do something if needed

		} else {

			sFormName = '#' + sFormName ;

		}


	}

		if (g_Debug_Mode == 'on') {

		// alert(sFormName) ;

}

    save_mp3_q = $.ajax({
        type: 'POST',
        url: 'index.php',
		data: $(sFormName).serialize(),
        success: function(content)
        {


		if (g_Debug_Mode == 'on') {


		alert(content) ;

	}

	$('#s101_interstitial').attr('src','/js/s101_admin/images/Interstial2.png');

	$('#s101_make_site_continue').css('display','block');

	$('#s101_make_site_loading').css('display','none');

	var temp = new Array();

	g_Beta_Server_Prefix = '' ;

	temp = content.split('##SITE_ID=');

	var resp_array = new Array();

    resp_array = temp[1].split('##');

	var url = resp_array[0] ;

	var temp = new Array();

	temp_site_id = url ;

	temp = content.split('##SERVER_ID=');

	var resp_array = new Array();

    resp_array = temp[1].split('##');

	var server = resp_array[0] ;

if (g_server_id == 'beta4') {

	g_Beta_Server_Prefix = '.v5beta' ;

//	url = 'http://' + url + g_Beta_Server_Prefix + '.section101.com/admin' ;

	url = 'link_twitter' ;


} else {

	if (g_server_mode == 'qa') {

		url = 'http://admin-qa.section101.com' ;

//		url = 'step5&site_id=' + temp_site_id ;

		url = 'link_twitter' ;



	} else {

		url = 'http://admin-qa.section101.com' ;

		url = 'link_twitter' ;

	}

}

//	$("a[id='s101_make_site_continue_link']").attr('href', url) ;

//		s101Manager.doProcessResponse(sFormName,sResultDiv,content,'form');

            if (content == 'done')
            {

				// do something if needed

            }
            else
            {

				// do something if needed

            }

// Add Message or action for Completion if needed
//
//			$('#' + sResultDiv).html("Saved...<br><br>");

//	        $('#s101_container2').fadeOut(600);

        }
    });

    },

    doSubmitForm_clean : function(sFormName,sResultDiv,sDisableButton, sHideMessage)
    {

		if (g_Debug_Mode == 'on') {

			// alert('doSubmitForm_clean') ;

		}

	var DisableButtonID = sDisableButton ;

        // argument formId can be the id or name attribute value of the
        // HTML form, or an HTML form object.
        var formObject = document.getElementById(sFormName);
        if (!formObject)
        {
            alert('bad formObject: ' + sFormName);
        }

        if (!checkRequired(formObject)  )
        {
            return false;
        }



//    Example to grab extra data fields and then add to 'data:' below
//
//    var event_venue = document.getElementById('event_venue').value;

	if (sFormName.substr(0,1) == '.') {

		// do something if needed

	} else {

		if (sFormName.substr(0,1) == '#') {

			// do something if needed

		} else {

			sFormName = '#' + sFormName ;

		}

	}

    save_mp3_q = $.ajax({
        type: 'POST',
        url: 'index.php',
		data: $(sFormName).serialize(),
        success: function(content)
        {

//		alert(content) ;

		s101Manager.doProcessResponse(sFormName,sResultDiv,content,'form');

            if (content == 'done')
            {

				// do something if needed

            }
            else
            {

				// do something if needed

            }

// Add Message or action for Completion if needed
//
//			$('#' + sResultDiv).html("Saved...<br><br>");

        }
    });

    },


   doAjaxGetDirect : function(sUrl,sDiv)
    {
        //lert('doAjaxGet:'+sUrl);
        //       alert('doAjaxGet:'+sDiv);

        //var sUrl = "php/get.php?username=anonymous&userid=0";
        var div = document.getElementById(sDiv);
        div.innerHTML = "Loading.  Please Wait...<br><br>";

        var
        handleSuccess = function(o)
        {


            if(o.responseText !== undefined)
            {
                sText = "<li>Transaction id: " + o.tId + "</li>";
                        sText += "<li>HTTP status: " + o.status + "</li>";
                sText += "<li>Status code message: " + o.statusText + "</li>";
                sText += "<li>HTTP headers: <ul>" + o.getAllResponseHeaders + "</ul></li>";
                sText += "<li>Server response: " + o.responseText + "</li>";
                sText += "<li>Argument object: Object ( [foo] => " + o.argument.foo +
                             " [bar] => " + o.argument.bar +" )</li>";

                //alert(o.responseText);

                div.innerHTML = o.responseText;

		// alert('1b') ;


			}
		}
		// alert('1c') ;

		return(o.responseText) ;
	},


   doPopup_temp : function(sPopupName,sTitle,sParams,sWidth,init_script)
    {

		if (g_Debug_Mode == 'on') {

			// alert('doPopup_1' + init_script) ;

		}

        url_params = "";
        if (sParams != undefined)
            url_params = sParams;

        if ((sWidth == undefined) || (sWidth == ''))
            sWidth = "320px";

			$(function()
			{
				$('#s101_popup_scroll').jScrollPane({showArrows:false, scrollbarWidth: 15,  scrollbarMargin:10, reinitialiseOnImageLoad: true});
			});

//       s101Manager.doAjaxGet('index.php?popup=1&action='+sPopupName+url_params ,'popupContent','',sPopupName);

//    $.post('index.php', $('#add_collection_form').serialize(),

 var top = $(document).scrollTop() + 10;

			$("#s101_container2").css('top',top + 'px');

			$("#s101_container2").css('left','10px');

			$("#s101_container2").css('background-color','#ffffff');

			$("#s101_container2").css('color','#000000');



		$('#s101_container2').html("<br><br><center><img src='/js/s101_admin/images/update_Progress.gif'></center><br><br>");


			$("#s101_container2").show();

//		alert(sPopupName + url_params) ;


	    $.post('index.php', 'popup=1&action=' + sPopupName + url_params ,
        function(data)
        {

//			alert(data) ;

			s101Manager.doProcessResponse(sPopupName,'popup',data,'popup');

		if (sWidth != '0px') {

			$('#s101_container2').html(data);

		}

        if (init_script != undefined)

			var funcCall = 'init_popup_' + init_script + "();";


			var ret = eval(funcCall);

        }
    );

		if (sWidth != '0px') {

			 $( "#s101_container2" ).draggable({ handle: "div.s101_header_action_name" });

		}

    },


   doPopup : function(sPopupName,sTitle,sParams,sWidth,init_script,x_pos )
    {

		if (g_Debug_Mode == 'on') {

			// alert('doPopup - ' + init_script) ;

		}

        url_params = "";
        if (sParams != undefined)
            url_params = sParams;

        if (x_pos == undefined)
            x_pos = '10';

        if ((sWidth == undefined) || (sWidth == ''))
            sWidth = "320px";


		if (g_Debug_Mode == 'on') {

			// alert('doPopup2') ;

		}

			$(function()
			{
				if (g_SITE != 'support') {

					if (g_SITE != 'signup5') {

						$('#s101_popup_scroll').jScrollPane({showArrows:false, scrollbarWidth: 15,  scrollbarMargin:10, reinitialiseOnImageLoad: true});
					}			

				}	

		});

//       s101Manager.doAjaxGet('index.php?popup=1&action='+sPopupName+url_params ,'popupContent','',sPopupName);

//    $.post('index.php', $('#add_collection_form').serialize(),

 var top = $(document).scrollTop() + 10;

		if (g_Debug_Mode == 'on') {

			// alert('doPopup3') ;

		}


			$("#s101_container2").css('top',top + 'px');


  		   $("#s101_container2").css('left',x_pos + 'px');

			$("#s101_container2").css('background-color','#ffffff');

			$("#s101_container2").css('color','#000000');

    $('#s101_container2').show(600, function() {
//		$('#s101_container2').html("Loading.  Please Wait...<br><br>");

        $('#s101_container2').fadeIn(300);
    });


//			$("#s101_container2").show();

		if (g_Debug_Mode == 'on') {

		alert('popup pre-post:' + sPopupName + url_params) ;

		}

	    $.post('index.php', 'popup=1&action=' + sPopupName + url_params ,
        function(data)
        {

		if (g_Debug_Mode == 'on') {

			alert('popup resp:' + data) ;

		}

			s101Manager.doProcessResponse(sPopupName,'popup',data,'popup');

		if (sWidth != '0px') {

			$('#s101_container2').html(data);

		}

        if (init_script != undefined)

			var funcCall = 'init_popup_' + init_script + "();";

//			alert('Init Script- ' + funcCall) ;

		if (g_Debug_Mode == 'on') {

			// alert('Init Script- ' + funcCall) ;

		}

			var ret = eval(funcCall);

		if (g_Debug_Mode == 'on') {

			// alert('Ret- ' + ret) ;

		}

        }
    );

		if (sWidth != '0px') {

			 $( "#s101_container2" ).draggable({ handle: "div.s101_header_action_name" });

		}

    },




   doAjaxGetDirect : function(sUrl,sDiv)
    {
        //lert('doAjaxGet:'+sUrl);
        //       alert('doAjaxGet:'+sDiv);

        //var sUrl = "php/get.php?username=anonymous&userid=0";
        var div = document.getElementById(sDiv);
        div.innerHTML = "Loading.  Please Wait...<br><br>";

        var
        handleSuccess = function(o)
        {


            if(o.responseText !== undefined)
            {
                sText = "<li>Transaction id: " + o.tId + "</li>";
                        sText += "<li>HTTP status: " + o.status + "</li>";
                sText += "<li>Status code message: " + o.statusText + "</li>";
                sText += "<li>HTTP headers: <ul>" + o.getAllResponseHeaders + "</ul></li>";
                sText += "<li>Server response: " + o.responseText + "</li>";
                sText += "<li>Argument object: Object ( [foo] => " + o.argument.foo +
                             " [bar] => " + o.argument.bar +" )</li>";

                //alert(o.responseText);

                div.innerHTML = o.responseText;

		// alert('1b') ;


			}
		}
		// alert('1c') ;

		return(o.responseText) ;
	},




    doPopup_reload : function(sPopupName,sTitle,sParams,landing_page,sWidth)
    {

			if (g_Debug_Mode == 'on') {

				// alert('doPopup_noscroll - switch it out') ;


				// alert(sPopupName) ;

				// alert(sParams) ;

			}

		//	alert(landing_page) ;

        url_params = "";
        if (sParams != undefined)
            url_params = sParams;

        if ((sWidth == undefined) || (sWidth == ''))
            sWidth = "320px";

	    $.post('index.php', 'popup=1&action=' + sPopupName + url_params ,
        function(data)
        {

		if (g_Debug_Mode == 'on') {
				alert(data) ;

		}

               document.location = "?page=" + landing_page ;

			// do something

        }

	    );

			if (g_Debug_Mode == 'on') {

			// alert('done bnoscroll') ;

			}


    },

   doAjaxGetDirect : function(sUrl,sDiv)
    {
        //lert('doAjaxGet:'+sUrl);
        //       alert('doAjaxGet:'+sDiv);

        //var sUrl = "php/get.php?username=anonymous&userid=0";
        var div = document.getElementById(sDiv);
        div.innerHTML = "Loading.  Please Wait...<br><br>";

        var
        handleSuccess = function(o)
        {


            if(o.responseText !== undefined)
            {
                sText = "<li>Transaction id: " + o.tId + "</li>";
                        sText += "<li>HTTP status: " + o.status + "</li>";
                sText += "<li>Status code message: " + o.statusText + "</li>";
                sText += "<li>HTTP headers: <ul>" + o.getAllResponseHeaders + "</ul></li>";
                sText += "<li>Server response: " + o.responseText + "</li>";
                sText += "<li>Argument object: Object ( [foo] => " + o.argument.foo +
                             " [bar] => " + o.argument.bar +" )</li>";

                //alert(o.responseText);

                div.innerHTML = o.responseText;

		// alert('1b') ;


			}
		}
		// alert('1c') ;

		return(o.responseText) ;
	},




   doProcessResponse : function(sFormName,sResultDiv,response_text, action_mode) {

			if (g_Debug_Mode == 'on') {

		//		alert('doProcessResponse') ;

		//	alert('doProcessResponse - response1: ' + response_text) ;

			// alert('doProcessResponse - sResultDiv: ' + sResultDiv) ;

			// alert('doProcessResponse - action_mode: ' + action_mode) ;

//			$('#' + sResultDiv).css('display','block') ;

//			$('#' + sResultDiv).html(response_text) ;


			}



          if(response_text !== undefined)
            {

			if (g_Debug_Mode == 'on') {

				// alert('Process Response') ;

			}

              if (response_text.substr(0, 8) == 'networks')
                {
                	show_networks_posted(response_text);
                	return;
                }

                if ( strstr( response_text , "##CLOSE_ACTION="))
                {

                   var temp = new Array();

                     temp = response_text.split('##CLOSE_ACTION=');

                     var close_action = new Array();
                     close_action = temp[1].split('##');

					var code = close_action[0] ;

//				if (length.code > 0) {

					eval(code);

//				}

			if (g_Debug_Mode == 'on') {

				// alert('code: ' + code) ;

				// alert('sFormName: ' + sFormName) ;

			}



					if (sFormName == '#s101_action_popup_form') {

						action_name = document.s101_action_popup_form.action.value ;

			if (g_Debug_Mode == 'on') {

				// alert('action_name: ' + action_name) ;

			}


					} else {

		if (g_Debug_Mode == 'on') {

				// alert('action_mode1: ' + action_mode) ;

				// alert('close_action1: ' + close_action) ;

			}


						if (action_mode != 'popup') {

							if (close_action != 'none,') {




		if (g_Debug_Mode == 'on') {

				// alert('action_mode3: ' + action_mode + ']') ;

			}


				sFormName2 = sFormName ;

		if ( sFormName2.substring(0,1) == '#' ) {

			sFormName2 = sFormName2.substring(1) ;

		}


		if (g_Debug_Mode == 'on') {

				// alert('action_mode3a: ' + action_mode) ;

				// alert('sFormName2: ' + sFormName2 + ']') ;


			}



								action_name = eval('document.' + sFormName2 + '.action.value') ;

		if (g_Debug_Mode == 'on') {

				// alert('action_mode3: done') ;

			}



							}

						}

					}

		if (g_Debug_Mode == 'on') {

				// alert('action_mode2: ' + action_mode) ;

				// alert('close_action2: ' + close_action) ;

			}


					if (action_mode != 'popup') {

						if (close_action != 'none,') {

							s101_popform_close_action(close_action[0],sFormName,action_name) ;

						}

					}

                }


			if (g_Debug_Mode == 'on') {

				// alert('Process Response2') ;

			}

                if ( strstr( response_text , "##REFRESH##"))
                {

					s101_popup_close();

					window.location.href=window.location.href ;

                }

                if ( strstr( response_text , "##USERPAGE##"))
                {

                    //document.location = "http://mountainjam.com/?page=user";
                    document.location = "http://users.section101.com/?page=user";
                    //alert('userpage');
                }

                if ( strstr( response_text , "##REPOST##"))
                {
                    document.location = "?page=repost";
                }
                if ( strstr( response_text , "##GOTOPAGE="))
                {

                     var temp = new Array();
                     temp = response_text.split('##GOTOPAGE=');

                     var close_action = new Array();
                     close_action = temp[1].split('##');

                    document.location = "?page=" + close_action[0] ;
                }

                if ( strstr( response_text , "##RESPONSE="))
                {

			//		alert('Process Response: ' + response_text ) ;

                     var temp = new Array();
                     temp = response_text.split('##RESPONSE=');

                     var close_action = new Array();
                     close_action = temp[1].split('##');

			//		alert('Response: ' + close_action[0] ) ;

					$('#' + sResultDiv).html(close_action[0] ) ;

                }



                if ( strstr( response_text , "##GOTOURL="))
                {

                     var temp = new Array();
                     temp = response_text.split('##GOTOURL=');

                     var close_action = new Array();
                     close_action = temp[1].split('##');

                    document.location = close_action[0] ;
                }

                if ( strstr( response_text , "##ERROR="))
                {

                     var temp = new Array();
                     temp = response_text.split('##ERROR=');

                     var close_action = new Array();
                     close_action = temp[1].split('##');

			$('#' + sResultDiv).css('display','block') ;

			$('#' + sResultDiv).html(close_action[0]) ;


                   // document.location = close_action[0] ;
                }


                 if ( strstr( response_text , "##BACK##"))
                {
                    //document.location = "http://mountainjam.com/?page=user";
                    //alert("BACK");
                    history.back(1);
                    //alert('userpage');
                }
                if ( strstr( response_text , "##GO_HOME##"))
                {
                    //document.location = "http://mountainjam.com/";
                    document.location = "?";
                    //alert('go home');
                }
                if ( strstr( response_text , "<ul class=form_errors>"))
                {
     //               alert(o.responseText);
                }
            }



        },


	doFrameRefresh : function()
		{

		// alert('1') ;

		document.getElementById('s101_admin_iframe').contentDocument.location.reload(true);

		// alert('2') ;


		},

   doAjaxGet : function(sUrl,sDiv,sFormName,sPopupName, sHideMessage)
    {

        var div = document.getElementById(sDiv);


        var
        handleSuccess = function(o)
        {


            if(o.responseText !== undefined)
            {
                sText = "<li>Transaction id: " + o.tId + "</li>";
                        sText += "<li>HTTP status: " + o.status + "</li>";
                sText += "<li>Status code message: " + o.statusText + "</li>";
                sText += "<li>HTTP headers: <ul>" + o.getAllResponseHeaders + "</ul></li>";
                sText += "<li>Server response: " + o.responseText + "</li>";
                sText += "<li>Argument object: Object ( [foo] => " + o.argument.foo +
                             " [bar] => " + o.argument.bar +" )</li>";



                if (o.responseText.substr(0, 8) == 'networks')
                {
                	show_networks_posted(o.responseText);
                	return;
                }



                if ( strstr( o.responseText , "##CLOSE_ACTION="))
                {

                   var temp = new Array();

                     temp = o.responseText.split('##CLOSE_ACTION=');

                     var close_action = new Array();
                     close_action = temp[1].split('##');

					var code = close_action[0] ;

					eval(code);


					if (sFormName == 's101_action_popup_form') {

						action_name = document.s101_action_popup_form.action.value ;

					} else {

						if (close_action != 'none,') {

							action_name = eval('document.' + sFormName + '.action.value') ;

						}


					}


					if (close_action != 'none,') {


						s101_popform_close_action(close_action[0],sFormName,action_name) ;

					}

                }

	               div.innerHTML = o.responseText;

                if ( strstr( o.responseText , "##REFRESH##"))
                {
                    //alert('refresh');
					// refresh();

					window.location.href=window.location.href ;


                }

                if ( strstr( o.responseText , "##USERPAGE##"))
                {
                    //document.location = "http://mountainjam.com/?page=user";
                    document.location = "http://users.section101.com/?page=user";
                    //alert('userpage');
                }
                if ( strstr( o.responseText , "##REPOST##"))
                {
                    document.location = "?page=repost";
                }
                if ( strstr( o.responseText , "##GOTOPAGE="))
                {

                     var temp = new Array();
                     temp = o.responseText.split('##GOTOPAGE=');

                     var close_action = new Array();
                     close_action = temp[1].split('##');

                    document.location = "?page=" + close_action[0] ;
                }

                 if ( strstr( o.responseText , "##BACK##"))
                {
                    //document.location = "http://mountainjam.com/?page=user";
                    //alert("BACK");
                    history.back(1);
                    //alert('userpage');
                }
                if ( strstr( o.responseText , "##GO_HOME##"))
                {
                    //document.location = "http://mountainjam.com/";
                    document.location = "?";
                    //alert('go home');
                }
                if ( strstr( o.responseText , "Error:"))
                {
                    //alert(o.responseText);
                }
            }
        }


        var handleUpload = function(obj)
        {
            if(obj.responseText !== undefined)
            {
                sText = "<li>Transaction id: " + obj.tId + "</li>";
                        sText += "<li>HTTP status: " + obj.status + "</li>";
                sText += "<li>Status code message: " + obj.statusText + "</li>";
                sText += "<li>HTTP headers: <ul>" + obj.getAllResponseHeaders + "</ul></li>";
                sText += "<li>Server response: " + obj.responseText + "</li>";
                sText += "<li>Argument object: Object ( [foo] => " + obj.argument.foo +
                             " [bar] => " + obj.argument.bar +" )</li>";

                //alert(sText);


                div.innerHTML = obj.responseText;
                if ( strstr( obj.responseText , "##REFRESH##"))
                {
                    //alert('refresh');
                    refresh();
                }
                 if ( strstr( obj.responseText , "##USERPAGE##"))
                {
                    //alert('redirect');
                    document.location = "/?page=user";
                }
            }

        }

        var handleFailure = function(o)
        {


            if(o.responseText !== undefined)
            {
                sText = "<li>Transaction id: " + o.tId + "</li>";
                sText += "<li>HTTP status: " + o.status + "</li>";
                sText += "<li>Status code message: " + o.statusText + "</li>";
                alert(sText);
                div.innerHTML = sText;
            }
        }

        var callback =
        {
            upload: handleUpload,
            success:handleSuccess,
            failure: handleFailure,
            cache:false,
            argument: { foo:"foo", bar:"bar" }
        };

		// alert('surl:' + sUrl) ;

		// alert('callback:' + callback) ;

   //     var request = YAHOO.util.Connect.asyncRequest('POST', sUrl, callback);


    } /* END FUNCTION */

 }




function showElement(bShow,elementID)
{
    e  =document.getElementById(elementID);
    if (!e)
    {
        alert('showElement - Notfound:' + elementID);
        return;
    }
    if (bShow)
    {
        e.style.visibility = "visible";
        e.style.height = "42px";
        //alert('showed:' + elementID);
    }
    else
    {
        e.style.height     = "0px";
        e.style.visibility = "hidden";
        //alert('Hid:' + elementID);
    }
}
function show_toolbar(bShow)
{

    showElement(bShow,"NOSHELL_TOOLBAR");
    showElement(bShow,"TOOLBAR_BACKDROP");
}

function ie_setup_div_with_backdrop(element_id,element_backdrop_id)
{


    el_backdrop = document.getElementById(element_backdrop_id);

    if (! el_backdrop )
    {
        alert("el_backdrop not found:" +   element_backdrop_id);
        return;
    }

    topx = el_backdrop.style.top;

    if (topx == '')
        topx = "0px";

    leftx =  el_backdrop.style.left;

    if (leftx == '')
        leftx = "0px";

    el = document.getElementById(element_id);
    if (! el )
    {
        alert("el not found:" +   el);
        return;
    }

    wid = el.style.width;
    hi =  el.style.height;

    el.style.top = topx;
    el.style.left = leftx;
    el_backdrop.style.width = wid;
    el_backdrop.style.height = hi;

    el.style.visibility = "visible";

}
function setup_div_with_backdrop(element_id,element_backdrop_id)
{



    if (navigator.appName=="Microsoft Internet Explorer")
    {
        return ie_setup_div_with_backdrop(element_id,element_backdrop_id)
    }

    el_backdrop = document.getElementById(element_backdrop_id);

    if (! el_backdrop )
    {
        alert("el_backdrop not found:" +   element_backdrop_id);
        return;
    }


    top = el_backdrop.offsetTop + "px";

    if (top == '')
    {
        top = "0px";
        //alert('top is blank');
    }
    left =  el_backdrop.offsetLeft + "px";

    if (left == '')
        left = "0px";

    el = document.getElementById(element_id);
    if (! el )
    {
        alert("el not found:" +   el);
        return;
    }


    wid = el.offsetWidth + "px";
    hi =  el.offsetHeight + "px";

    //alert(wid);

    el.style.top = top;
    el.style.left = left;
    //el_backdrop.style.width = wid;
    el_backdrop.style.height = hi;
    el.style.visibility = true;

}

function disableEnterKey(e)
{
     var key;
     if(window.event)
          key = window.event.keyCode;     //IE
     else
          key = e.which;     //firefox
     if(key == 13)
          return false;
     else
          return true;
}

function noenter() {

  return !(window.event && window.event.keyCode == 13);

}

function insert_text(el,ins) {

alert(ins) ;

    if (el.setSelectionRange){
        el.value = el.value.substring(0,el.selectionStart) + ins + el.value.substring(el.selectionStart,el.selectionEnd) + el.value.substring(el.selectionEnd,el.value.length);
    }
    else if (document.selection && document.selection.createRange) {
        el.focus();
        var range = document.selection.createRange();
        range.text = ins + range.text;
    }

}

function S101_Insert_Link(el,ins, form) {

//alert(el) ;

//alert(ins) ;

//alert(form) ;

//alert(el);

//alert(ins);

//alert(form);




var oForm = document.forms[form];

//alert('1') ;

var oTagsList = oForm.elements['link_name'];

//alert('2') ;
var link_name = oTagsList.value;

var oTagsList = oForm.elements['link_url'];

var link_url = oTagsList.value;

var oTagsList = oForm.elements['link_target'];

var link_target = oTagsList.value;


var link_data = '<a href="' + link_url + '" target="' + link_target + '" rel="s101_insert_link">' + link_name + '</a>' ;

//alert(link_data) ;

    if (el.setSelectionRange){
        el.value = el.value.substring(0,el.selectionStart) + link_data + el.value.substring(el.selectionStart,el.selectionEnd) + el.value.substring(el.selectionEnd,el.value.length);
    }
    else if (document.selection && document.selection.createRange) {
        el.focus();
        var range = document.selection.createRange();
        range.text = link_data + range.text;
    }

//alert('10') ;


S101_toggleDiv('form_link');

//alert('11') ;


}

function s101_popform_close_action(result,form_name,action_name) {


} ;

function S101_Insert_Pic_Link(el,ins,form) {


//alert(ins) ;

var image_width = document.s101_action_popup_form.image_width.value ;

var image_url_loc = document.s101_action_popup_form.image_url_loc.value ;

var image_ext_link = document.s101_action_popup_form.image_ext_link.value ;

var image_link_target = document.s101_action_popup_form.image_link_target.value ;

var link_target = '' ;

if (image_link_target.length >  1) {

var link_target = ' target="' + image_link_target + '" ' ;

}

if (image_url_loc.length >  1) {

  ins = image_url_loc ;

}

if (image_width < 1) {

var link_data = '<img src="' + ins + '"  rel="s101_inserted_image" width="100%">' ;

} else {

//alert(ins) ;

if (image_width > 200) {

ins = ins.replace("_sm.","_md.") ;

}

if (image_width > 500) {

ins = ins.replace("_md.","_lr.") ;

}

//alert(ins) ;

var link_data = '<img src="' + ins + '" width="' + image_width + '"  rel="s101_inserted_image" >' ;

}

if (image_ext_link.length >  1) {

var link_data = '<a href="' + image_ext_link + '" ' + link_target + ' width="100%">' + link_data + '</a>' ;

}

//alert(link_data) ;

    if (el.setSelectionRange){
        el.value = el.value.substring(0,el.selectionStart) + link_data + el.value.substring(el.selectionStart,el.selectionEnd) + el.value.substring(el.selectionEnd,el.value.length);
    }
    else if (document.selection && document.selection.createRange) {
        el.focus();
        var range = document.selection.createRange();
        range.text = link_data + range.text;
    }

S101_toggleDiv('form_pic');

}


function S101_Pop_Up(file_name,width,height) {

//var windowprops = width + "=300,height=" + height + ",location=no,toolbar=no,menubar=no,scrollbars=no,resizable=yes";

var PARAMETERS = {};

    PARAMETERS.map = {};
    window.location.search.substring(1).replace(/([^&=]+)([=]([^&]*))?(&|$)/g,function(s,k,q,v){
        if (undefined === PARAMETERS.map[k]) {
            PARAMETERS.map[k] = [];
        }
        PARAMETERS.map[k].push(decodeURIComponent(v));
    });
    for (var k in PARAMETERS.map) {
        var a = PARAMETERS.map[k];
        PARAMETERS.map[k] = ((1 == a.length) ? a[0] : a);
    }



			jQuery(document).ready(function(){

				jQuery.facebox(function() {
  					jQuery.get(file_name, function(data) {
    					jQuery.facebox(data)
  					})
				})
			});



}

function S101_Pop_Up2(file_name,width,height) {

jQuery.facebox(function() {
  jQuery.get('code.js', function(data) {
    jQuery.facebox('<textarea>' + data + '</textarea>')
  })
})

}


function zs101_popup_toggle_extra(divid) {

//	alert(divid);

    var e = document.getElementById(divid);

//  alert(e.style.display) ;

 if (e.style.display != 'block') {

    e.style.display = 'block';

 } else {

   e.style.display = 'none';

}

//	$('#s101_popup_form_extra').css('display','block') ;

}


function s101_example_action() {


	alert('Example Action') ;

}




function S101_show_galleries(gallery_id, username, form) {

//alert(username) ;

//alert(form) ;

var oForm = document.forms[form];

var oTagsList = oForm.elements['photo_gallery'];

var i = oForm.elements['photo_gallery'].selectedIndex ;

var gallery_id = oTagsList.options[i].value;

//alert(gallery_id) ;

S101_replace_div('js/get_gallery_pics_v4.php?gallery=' + gallery_id + '&username=' + username + '&form=' + form ) ;

//alert('test3a') ;

}

var http = false;

if(navigator.appName == "Microsoft Internet Explorer") {
  http = new ActiveXObject("Microsoft.XMLHTTP");
} else {
  http = new XMLHttpRequest();
}


function S101_replace_div(file_name) {
  http.open("GET", file_name , true);
  http.onreadystatechange=function() {
    if(http.readyState == 4) {
      document.getElementById('gallery_pics').innerHTML = http.responseText;
    }
  }
  http.send(null);
}


function doPageRefresh() {

	if (s101_popup_mode == 'forced' ) {

       var new_page = window.location.href.split('&');

		var new_url = new_page[0] ;

        var new_page = new_url.split('?');

		var new_url = new_page[0] ;

		window.location.href = new_url ;

	} else {

	    refresh();

	}

}

function S101_toggleDiv(divid){

    var e = document.getElementById(divid);

//  alert(e.style.display) ;

 if (e.style.display != 'block') {

    e.style.display = 'block';

 } else {

   e.style.display = 'none';

}

//  alert(e.style.display) ;

}


function S101_toggleDivTags(button){

    var e = document.getElementById('form_tags');

//  alert(e.style.display) ;

 if (button == 'smart') {

    e.style.display = 'block';

 }

 if (button == 'text') {

   e.style.display = 'none';

}

 if (button == 'html') {

   e.style.display = 'none';

   start_MCE() ;

var id = document.getElementById('NewsItem');

tinyMCE.execCommand("mceAddControl", true, id);

   tinyMCE.idCounter=0;

   tinyMCE.execCommand("mceAddControl", true, 'NewsItem') ;


   tinyMCE.execCommand("mceAddControl", true, document.getElementById('NewsItem')) ;

   tinyMCE.execCommand("mceAddControl", true, "edit_content");

//   alert('exec started') ;

}


//  alert(e.style.display) ;

}





var playerWin = null;

function S101_launchPopup(link,width,height,top,left) {

//    link = '/player/popup.html' ;

//alert(link) ;

  var win_params = 'width=' + width + ',height=' + height + ',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,top=' + top + ',left=' + left ;

//alert(win_params) ;

    if (playerWin != null && playerWin.closed == false) {
        playerWin.location = link;
        playerWin.focus();
    }
    else {
        playerWin = window.open(link, '', win_params);
    }

}


function showFormElements(oForm) {
   var cnt = 0;
   var msg = "Form with 'name' attribute='" + oForm.name + "'";
   var str = "\nThe elements are: \n\n";
   for (i = 0; i < oForm.length; i++) {
	cnt ++;
	str += oForm.elements[i].tagName + " with 'name' attribute='" + oForm.elements[i].name + "'\n";
   }

   msg += " has " + cnt + " elements. \n" + str;
   alert(msg);
}

function showFormData(oForm) {
   var msg = "The data that you entered for the form with 'name' attribute='" + oForm.name + "': \n";

   for (i = 0; i < oForm.length, oForm.elements[i].getAttribute("type") !== 'button'; i++) {
	   msg += oForm.elements[i].tagName + " with 'name' attribute='" + oForm.elements[i].name + "' and data: ";
	   if(oForm.elements[i].value == null || oForm.elements[i].value == '') {
		msg += "NOT SET \n";
	   } else {
		   msg += oForm.elements[i].value + "\n";
	   }
   }

   alert(msg);
}


function copyFormElementToElementOfDifferentForm(oForm1Name, oForm2Name, oForm1ElementName, oForm2ElementName) {

	var oForm1 = document.forms[oForm1Name];
	var oForm2 = document.forms[oForm2Name];
	var oForm1Element = oForm1[oForm1ElementName];
	var oForm2Element = oForm2[oForm2ElementName];

	if(oForm2Element.value == '') {
		oForm2Element.value += oForm1Element.value;
	} else {
		oForm2Element.value += ', ' + oForm1Element.value;
	}
}


function start_MCE() {

//alert('init mce') ;

             tinyMCE.init({
                // General options
                mode : "textareas",
                xmode : "exact",

                theme : "advanced",
                pxlugins : "s101rss,example,code,safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",
                plugins : "code,safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

                // Theme options
                apply_source_formatting : true,
                cleanup_on_startup : true,
                fix_nesting : true,

                // Theme options
                theme_advanced_buttons1 : "undo,redo,|,link,unlink,anchor,image,|,cut,copy,paste,|,advhr,|,bullist,numlist,outdent,indent,|,code,|,pastetext,pasteword",
                theme_advanced_buttons2 : ",fontselect,fontsizeselect,forecolor,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,emotions,inserttime,sub,sup,|,fullscreen" ,
                theme_advanced_buttons3 : "",
                theme_advanced_toolbar_location : "top",
                theme_advanced_resizing : true,
                extended_valid_elements : "hr[class|width|size|noshade]",


                //cleanup : false,
                //remove_script_host : true,
                //relative_urls : false,

                // Example content CSS (should be your site CSS)
                content_css : "./schemes/default/skin.css",

                // Drop lists for link/image/media/template dialogs
                template_external_list_url : "lists/template_list.js",
                external_link_list_url : "lists/link_list.js",
                external_image_list_url : "lists/image_list.js",
                media_external_list_url : "lists/media_list.js",

                // Replace values for the template plugin
                template_replace_values : {
                    username : "Some User",
                    staffid : "991234"
                }
            });

//alert('start mce') ;

}


var tooltip=function(){
 var id = 'tt';
 var top = 3;
 var left = 3;
 var maxw = 300;
 var speed = 10;
 var timer = 20;
 var endalpha = 95;
 var alpha = 0;
 var tt,t,c,b,h;
 var ie = document.all ? true : false;
 return{
  show:function(v,w){
   if(tt == null){
    tt = document.createElement('div');
    tt.setAttribute('id',id);
    t = document.createElement('div');
    t.setAttribute('id',id + 'top');
    c = document.createElement('div');
    c.setAttribute('id',id + 'cont');
    b = document.createElement('div');
    b.setAttribute('id',id + 'bot');
    tt.appendChild(t);
    tt.appendChild(c);
    tt.appendChild(b);
    document.body.appendChild(tt);
    tt.style.opacity = 0;
    tt.style.filter = 'alpha(opacity=0)';
    document.onmousemove = this.pos;
   }
   tt.style.display = 'block';
   c.innerHTML = v;
   tt.style.width = w ? w + 'px' : 'auto';
   if(!w && ie){
    t.style.display = 'none';
    b.style.display = 'none';
    tt.style.width = tt.offsetWidth;
    t.style.display = 'block';
    b.style.display = 'block';
   }
  if(tt.offsetWidth > maxw){tt.style.width = maxw + 'px'}
  h = parseInt(tt.offsetHeight) + top;
  clearInterval(tt.timer);
  tt.timer = setInterval(function(){tooltip.fade(1)},timer);
  },
  pos:function(e){
   var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
   var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
   tt.style.top = (u - h) + 'px';
   tt.style.left = (l + left) + 'px';
  },
  fade:function(d){
   var a = alpha;
   if((a != endalpha && d == 1) || (a != 0 && d == -1)){
    var i = speed;
   if(endalpha - a < speed && d == 1){
    i = endalpha - a;
   }else if(alpha < speed && d == -1){
     i = a;
   }
   alpha = a + (i * d);
   tt.style.opacity = alpha * .01;
   tt.style.filter = 'alpha(opacity=' + alpha + ')';
  }else{
    clearInterval(tt.timer);
     if(d == -1){tt.style.display = 'none'}
  }
 },
 hide:function(){
  clearInterval(tt.timer);
   tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
  }
 };
}();




function show_networks_posted(responseText) {

	var poster_to_array = responseText.split('|');

	var cover_div = '<div id="network_done_screen_cover" style="padding:20px;text-align:left;">'+
	                    'Done! - your post is now on:<br />' +
	                    poster_to_array[1] +
	                    '<br /><br /><br />' +
	                    '<input type="button" value="OK" name="ok" class="network_button_light" onclick="reload_cur_frame();">' +
	                '</div>';

	$('#s101_popup_scroll').html(cover_div);
	$('#s101_form_input_submit_td').fadeOut(600);
	$('.s101_popup_wrap_body').css('background', '#ffffff');
	$('#network_done_screen_cover').fadeIn(600);
}

function reload_cur_frame() {

    s101_popup_close();
    reload_selected_collection();

}


function s101_admin_set_user_edit_mode(s101_edit_mode, user_id) {

    s101Manager.doPopup('designer_v4','Change Edit Mode','&user_id=' + user_id + '&edit_mode=' + s101_edit_mode + '&update_mode=user_edit_mode','0px');
}


function rm_quote(input_id) {

	var temp = document.getElementById(input_id).value;
	var temp_clean = temp.replace( new RegExp( '"', "g" ), "'" );

	if(temp != temp_clean)
	{
	    document.getElementById(input_id).value=temp_clean;
	}

	return false;
}



function s101_download_file(file_path) {


    window.location.href = "http://section101.com/js/s101_admin/download_file.php?path="+file_path;
}


function news_form_get(sect, vars, form_size, form_mode) {

	if (typeof form_mode === 'undefined') {
		form_mode = 'std' ;
	}

    var pos_top = $(document).scrollTop() + 60;

    $('#s101_container2').css({display: 'none', top: pos_top +'px'});

    $('#s101_container2').load('../../index.php?popup=1&action='+ sect + vars, '#news_f_wrap', function() {


        $('#s101_container2').fadeIn(300, function() {

            $('#s101_container2').draggable({ handle: '#news_f_h_tag' });

            news_form_init(form_mode);

        });
    });
}



function icon_manager(opt_switch, site_id) {

    if (opt_switch == 'hide')
    {
        $('#icon_manager_wrap').fadeOut(120, function() {

            $('#icon_manager_wrap').remove();
        });
    }
    else
    {
        $('#s101_container2').css('display', 'none');
        $('#s101_container2').load('../../index.php?popup=1&action=sn_links_edit', function() {

           icon_manager_init();
        });
    }
}
