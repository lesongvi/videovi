
 //getElementsById_select('div') ;

var Last_ID = 'start' ;

function init_picker() {

// alert('1') ;

//		cp1 = new Refresh.Web.ColorPicker('cp1',{startHex: 'ffcc00', startMode:'s'});

// alert('2') ;

}

function close_color() {
    document.getElementById("s101_css_color_picker").style.visibility = 'hidden' ;

}



function s101_popup_toggle_extra(divid) {

//	alert(divid);

    var e = document.getElementById(divid);

//  alert(e.style.display) ;

	 if (e.style.display != 'block') {

    	e.style.display = 'block';

		$('span.s101_form_additional_info').html('hide additional info ') ;

		$('.s101_form_additional_info_icon').attr("src", '/js/s101_admin/images/caret_close.png');

		$('img.s101_form_additional_info_icon').css('padding-bottom','2px') ;

		var catTopPosition = jQuery('#s101_popup_form_extra').offset().top;

		$('#s101_popup_scroll').animate({scrollTop:catTopPosition}, 'slow');


	} else {

	    e.style.display = 'none';

		$('span.s101_form_additional_info').html('show additional info ') ;

		$('.s101_form_additional_info_icon').attr("src", '/js/s101_admin/images/caret.png');

		$('img.s101_form_additional_info_icon').css('padding-bottom','0px') ;

	}




}


function s101_popup_toggle_site_extra(divid) {

		$('#s101_popup_form_extra1').css('display', 'none');

		$('#s101_popup_form_extra2').css("display", 'none');

		$('#s101_popup_form_extra3').css("display", 'none');

		$('#s101_popup_form_extra4').css("display", 'none');

		$('#s101_popup_form_extra5').css("display", 'none');

		$('#s101_popup_form_extra6').css("display", 'none');

		$('#s101_popup_form_extra7').css("display", 'none');

		$('.s101_popup_wrap_v4').css("height", '600px');

		$('.s101_popup_wrap_body_v4').css("height", '570px');

		$('.holder').css("height", '560px');

		$('#s101_popup_scroll').css("height", '510px');

		$('#' + divid).css("display", 'block');

}


function s101_popup_toggle_extra_close(divid) {

//	alert(divid);

    var e = document.getElementById(divid);

//  alert(e.style.display) ;


	    e.style.display = 'none';

		$('span.s101_form_additional_info').html('show additional info ') ;

		$('.s101_form_additional_info_icon').attr("src", '/js/s101_admin/images/caret.png');

		$('img.s101_form_additional_info_icon').css('padding-bottom','0px') ;


}




function grab_color() {


  doc_color = document.xs101_css_color_picker_form.cp1_Hex.value;

  doc_color = '#' + doc_color ;

//        alert(doc_color);

		  item_id = document.s101_css_color_picker_form.css_item.value;

		  item_type = document.s101_css_color_picker_form.css_item_type.value;

//        doc_color = '[' +  doc_color + ']' ;

  //      alert(item_id);


//	        alert(item_type);

	if (item_type == 'background') {

		  document.getElementById(item_id).style.backgroundColor = doc_color;
		  }

		if (item_type == 'font') {

		  document.getElementById(item_id).style.color = doc_color;
		  }


		  item_id2 = item_id + '_' + item_type + '_display' ;

		  	  item_id3 = item_id + '_' + item_type  + '_info' ;

		    document.getElementById(item_id2).style.backgroundColor = doc_color ;

	    document.getElementById(item_id3).value = doc_color ;


    document.getElementById("s101_css_color_picker").style.visibility = 'hidden' ;




}

function close_div() {

//	alert("1") ;

    document.getElementById("testdiv_5").style.visibility = 'hidden' ;

//	alert("2") ;


}


function show_color_picker(item_type) {



var i = document.div_select_editor.select_div.selectedIndex;

//         alert(i);

var item = document.div_select_editor.select_div.options[i].value;

//         alert(item);

//	alert(item_type) ;









//	alert(item) ;

//	alert(item_type) ;



	document.s101_css_color_picker_form.css_item.value = item ;

		document.s101_css_color_picker_form.css_item_type.value = item_type ;


  document.getElementById("s101_css_color_picker").style.visibility = 'visible' ;

//alert('main window') ;

//  document.getElementById("s101_css_color_picker_pane").style.visibility = 'visible' ;

//alert('window 2') ;

//alert('start1a');

//		cp1 = new Refresh.Web.ColorPicker('cp1',{startHex: 'ffcc00', startMode:'s'});

//alert('start2b');



}



function initialize_items() {


	borderLeft = CJL_getCurrentStyle(document.getElementById("s101_css_edit_slug_header"), "backgroundColor");

  item_value =   getStyleById("s101_css_edit_slug_header", "backgroundColor") ;

  item_value2 = toRGBHex(item_value) ;


 document.form1.s101_css_edit_slug_header_background_info.value = '#' + item_value2 ;

  document.getElementById("s101_css_edit_slug_header_background_display").style.backgroundColor = '#' + item_value2 ;

  getElementsById_select('div') ;


}

function toRGBHex(num)
{
var decToHex="";
var arr = new Array();
var numStr = new String();
var num2 = num.split("(");

var num3 = num2[1] ;
var num4 = num3.split(")");

var num5 = num4[0] ;


numStr = num5;


arr = numStr.split(",");

for(var i=0;i<3;i++)
{
var hexArray = new Array( "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" );
var code1 = Math.floor(arr[i] / 16);var code2 = arr[i] - code1 * 16;
decToHex += hexArray[code1];
decToHex += hexArray[code2];
}
return (decToHex);
}


// Copyright © 2001 by Apple Computer, Inc., All Rights Reserved.
//
// You may incorporate this Apple sample code into your own code
// without restriction. This Apple sample code has been provided "AS IS"
// and the responsibility for its operation is yours. You may redistribute
// this code, but you are not permitted to redistribute it as
// "Apple sample code" after having made changes.

// ugly workaround for missing support for selectorText in Netscape6/Mozilla
// call onLoad() or before you need to do anything you would have otherwise used
// selectorText for.
var ugly_selectorText_workaround_flag = false;
var allStyleRules;
// code developed using the following workaround (CVS v1.15) as an example.
// http://lxr.mozilla.org/seamonkey/source/extensions/xmlterm/ui/content/XMLTermCommands.js
function ugly_selectorText_workaround() {
	if((navigator.userAgent.indexOf("Gecko") == -1) ||
	   (ugly_selectorText_workaround_flag)) {
		return; // we've already been here or shouldn't be here
	}
	var styleElements = document.getElementsByTagName("style");

	for(var i = 0; i < styleElements.length; i++) {
		var styleText = styleElements[i].firstChild.data;
		// this should be using match(/\b[\w-.]+(?=\s*\{)/g but ?= causes an
		// error in IE5, so we include the open brace and then strip it
		allStyleRules = styleText.match(/\b[\w-.]+(\s*\{)/g);
	}

	for(var i = 0; i < allStyleRules.length; i++) {
		// probably insufficient for people who like random gobs of
		// whitespace in their styles
		allStyleRules[i] = allStyleRules[i].substr(0, (allStyleRules[i].length - 2));
	}
	ugly_selectorText_workaround_flag = true;
}


// setStyleById: given an element id, style property and
// value, apply the style.
// args:
//  i - element id
//  p - property
//  v - value
//
function setStyleById(i, p, v) {
	var n = document.getElementById(i);
	n.style[p] = v;
}

// getStyleById: given an element ID and style property
// return the current setting for that property, or null.
// args:
//  i - element id
//  p - property
function getStyleById(i, p) {
	var n = document.getElementById(i);
	var s = eval("n.style." + p);

	// try inline
	if((s != "") && (s != null)) {
		return s;
	}

	// try currentStyle
	if(n.currentStyle) {
		var s = eval("n.currentStyle." + p);
		if((s != "") && (s != null)) {
			return s;
		}
	}

	// try styleSheets
	var sheets = document.styleSheets;
	if(sheets.length > 0) {
		// loop over each sheet
		for(var x = 0; x < sheets.length; x++) {
			// grab stylesheet rules
			var rules = sheets[x].cssRules;
			if(rules.length > 0) {
				// check each rule
				for(var y = 0; y < rules.length; y++) {
					var z = rules[y].style;
					// selectorText broken in NS 6/Mozilla: see
					// http://bugzilla.mozilla.org/show_bug.cgi?id=51944
					ugly_selectorText_workaround();
					if(allStyleRules) {
						if(allStyleRules[y] == i) {
							return z[p];
						}
					} else {
						// use the native selectorText and style stuff
						if(((z[p] != "") && (z[p] != null)) ||
						   (rules[y].selectorText == i)) {
							return z[p];
						}
					}
				}
			}
		}
	}
	return null;
}

// setStyleByClass: given an element type and a class selector,
// style property and value, apply the style.
// args:
//  t - type of tag to check for (e.g., SPAN)
//  c - class name
//  p - CSS property
//  v - value
var ie = (document.all) ? true : false;

function setStyleByClass(t,c,p,v){
	var elements;
	if(t == '*') {
		// '*' not supported by IE/Win 5.5 and below
		elements = (ie) ? document.all : document.getElementsByTagName('*');
	} else {
		elements = document.getElementsByTagName(t);
	}
	for(var i = 0; i < elements.length; i++){
		var node = elements.item(i);
		for(var j = 0; j < node.attributes.length; j++) {
			if(node.attributes.item(j).nodeName == 'class') {
				if(node.attributes.item(j).nodeValue == c) {
					eval('node.style.' + p + " = '" +v + "'");
				}
			}
		}
	}
}

// getStyleByClass: given an element type, a class selector and a property,
// return the value of the property for that element type.
// args:
//  t - element type
//  c - class identifier
//  p - CSS property
function getStyleByClass(t, c, p) {
	// first loop over elements, because if they've been modified they
	// will contain style data more recent than that in the stylesheet
	var elements;
	if(t == '*') {
		// '*' not supported by IE/Win 5.5 and below
		elements = (ie) ? document.all : document.getElementsByTagName('*');
	} else {
		elements = document.getElementsByTagName(t);
	}
	for(var i = 0; i < elements.length; i++){
		var node = elements.item(i);
		for(var j = 0; j < node.attributes.length; j++) {
			if(node.attributes.item(j).nodeName == 'class') {
				if(node.attributes.item(j).nodeValue == c) {
					var theStyle = eval('node.style.' + p);
					if((theStyle != "") && (theStyle != null)) {
						return theStyle;
					}
				}
			}
		}
	}
	// if we got here it's because we didn't find anything
	// try styleSheets
	var sheets = document.styleSheets;
	if(sheets.length > 0) {
		// loop over each sheet
		for(var x = 0; x < sheets.length; x++) {
			// grab stylesheet rules
			var rules = sheets[x].cssRules;
			if(rules.length > 0) {
				// check each rule
				for(var y = 0; y < rules.length; y++) {
					var z = rules[y].style;
					// selectorText broken in NS 6/Mozilla: see
					// http://bugzilla.mozilla.org/show_bug.cgi?id=51944
					ugly_selectorText_workaround();
					if(allStyleRules) {
						if((allStyleRules[y] == c) ||
						   (allStyleRules[y] == (t + "." + c))) {
							return z[p];
						}
					} else {
						// use the native selectorText and style stuff
						if(((z[p] != "") && (z[p] != null)) &&
						   ((rules[y].selectorText == c) ||
						    (rules[y].selectorText == (t + "." + c)))) {
							return z[p];
						}
					}
				}
			}
		}
	}

	return null;
}

// setStyleByTag: given an element type, style property and
// value, and whether the property should override inline styles or
// just global stylesheet preferences, apply the style.
// args:
//  e - element type or id
//  p - property
//  v - value
//  g - boolean 0: modify global only; 1: modify all elements in document
function setStyleByTag(e, p, v, g) {
	if(g) {
		var elements = document.getElementsByTagName(e);
		for(var i = 0; i < elements.length; i++) {
			elements.item(i).style[p] = v;
		}
	} else {
		var sheets = document.styleSheets;
		if(sheets.length > 0) {
			for(var i = 0; i < sheets.length; i++) {
				var rules = sheets[i].cssRules;
				if(rules.length > 0) {
					for(var j = 0; j < rules.length; j++) {
						var s = rules[j].style;
						// selectorText broken in NS 6/Mozilla: see
						// http://bugzilla.mozilla.org/show_bug.cgi?id=51944
						ugly_selectorText_workaround();
						if(allStyleRules) {
							if(allStyleRules[j] == e) {
								s[p] = v;
							}
						} else {
							// use the native selectorText and style stuff
							if(((s[p] != "") && (s[p] != null)) &&
							   (rules[j].selectorText == e)) {
								s[p] = v;
							}
						}

					}
				}
			}
		}
	}
}

// getStyleByTag: given an element type and style property, return
// the property's value
// args:
//  e - element type
//  p - property
function getStyleByTag(e, p) {
	var sheets = document.styleSheets;
	if(sheets.length > 0) {
		for(var i = 0; i < sheets.length; i++) {
			var rules = sheets[i].cssRules;
			if(rules.length > 0) {
				for(var j = 0; j < rules.length; j++) {
					var s = rules[j].style;
					// selectorText broken in NS 6/Mozilla: see
					// http://bugzilla.mozilla.org/show_bug.cgi?id=51944
					ugly_selectorText_workaround();
					if(allStyleRules) {
						if(allStyleRules[j] == e) {
							return s[p];
						}
					} else {
						// use the native selectorText and style stuff
						if(((s[p] != "") && (s[p] != null)) &&
						   (rules[j].selectorText == e)) {
							return s[p];
						}
					}

				}
			}
		}
	}

	// if we don't find any style sheets, return the value for the first
	// element of this type we encounter without a CLASS or STYLE attribute
	var elements = document.getElementsByTagName(e);
	var sawClassOrStyleAttribute = false;
	for(var i = 0; i < elements.length; i++) {
		var node = elements.item(i);
		for(var j = 0; j < node.attributes.length; j++) {
			if((node.attributes.item(j).nodeName == 'class') ||
			   (node.attributes.item(j).nodeName == 'style')){
			   sawClassOrStyleAttribute = true;
			}
		}
		if(! sawClassOrStyleAttribute) {
			return elements.item(i).style[p];
		}
	}
}



/********************************************************
 * Copyright (C) 2002-2003, CodeHouse.com. All rights reserved.
 * CodeHouse(TM) is a registered trademark.
 *
 * THIS SOURCE CODE MAY BE USED FREELY PROVIDED THAT
 * IT IS NOT MODIFIED OR DISTRIBUTED, AND IT IS USED
 * ON A PUBLICLY ACCESSIBLE INTERNET WEB SITE.
 *
 * CodeHouse.com JavaScript Library Module: Get Current Style Method
 *
 * You can obtain this script at http://www.codehouse.com
 ********************************************************/
function CJL_getCurrentStyle(elem, prop)
{
   if( elem.currentStyle )
   {
      var ar = prop.match(/\w[^-]*/g);
      var s = ar[0];

      for(var i = 1; i < ar.length; ++i)
      {
         s += ar[i].replace(/\w/, ar[i].charAt(0).toUpperCase());
      }

      return elem.currentStyle[s]
   }
   else if( document.defaultView.getComputedStyle )
   {
      return document.defaultView.getComputedStyle(elem, null).getPropertyValue(prop);
   }
}


function change_body_bg() {

        //  alert('1a');

		borderLeft = CJL_getCurrentStyle(document.body, "margin-left");

		        //  alert(borderLeft);

		borderLeft = CJL_getCurrentStyle(document.getElementById("s101_css_edit_page_col2"), "width");

		        //  alert(borderLeft);


  item_height =   getStyleById("s101_css_edit_page_col2", "height") ;

	        //  alert(item_height) ;


  i = document.form1.body_bg.selectedIndex;
  doc_color = document.form1.body_bg.options[i].value;

        //  alert(doc_color);
  document.getElementById("s101_css_edit_page_col2").style.backgroundColor = doc_color;
}

function change_body_bg_file() {

  i = document.form1.body_bg_file.selectedIndex;
      //   alert('2');

  doc_color = document.form1.body_bg_file.value;

  doc_color = 'url(' + doc_color + ')' ;


         // alert(doc_color);
  document.getElementById("s101_css_edit_page_col2").style.backgroundImage = doc_color ;
}

function change_background_image() {

  i = document.form1.body_bg_file.selectedIndex;
//       alert('2a');

  doc_color = document.form1.body_bg_file.value;

  doc_color = 'url(' + doc_color + ')' ;


  //      alert(doc_color);
  document.getElementById("s101_css_edit_page_col2").style.backgroundImage = doc_color ;
}

function change_body_background_image() {

  i = document.form1.body_bg_file.selectedIndex;
   //    alert('2a-body');

  doc_color = document.form1.body_bg_file.value;

  doc_color = 'url(' + doc_color + ')' ;


   //      alert(doc_color);
  document.body.style.backgroundImage = doc_color ;
}





function change_content_bg() {
  i = document.form1.content_bg.selectedIndex;
  doc_color = document.form1.content_bg.options[i].value;
        //  alert(doc_color);
  document.getElementById("s101_css_edit_page_content").style.backgroundColor = doc_color;
}

function no_content_bg() {

// alert('here');

  doc_color = '# ' ;
 //     alert(doc_color);
  document.getElementById("s101_css_edit_page_content").style.backgroundImage = doc_color;
}

function change_slug_bg() {
  i = document.form1.slug_bg.selectedIndex;
  doc_color = document.form1.slug_bg.value;
        //  alert(doc_color);
  document.getElementById("s101_css_edit_slug").style.backgroundColor = doc_color;
}


function change_slub_header_bg() {
  i = document.form1.slug_header_bg.selectedIndex;
  doc_color = document.form1.slug_header_bg.value;
        //  alert(doc_color);
  document.getElementById("s101_css_edit_slug_header").style.backgroundColor = doc_color;
}


function change_head() {
  i = document.form1.heading.selectedIndex;

  head_color = document.form1.heading.options[i].value;
      //  alert(head_color);
  document.getElementById("head1").style.color = head_color;
}



function change_width() {
  i = document.form1.width.selectedIndex;
  doc_width = document.form1.width.options[i].value;
      //  alert(doc_width);

  document.getElementById("s101_css_edit_page_col2").style.width = doc_width  ;

}


function change_default_font_color() {

//   alert('font_color');

  var doc_color = document.form1.default_font_color.value;

  //    alert(doc_color);

var i = document.div_select_editor.select_div.selectedIndex;

var item_id = document.div_select_editor.select_div.options[i].value;

  //    alert(item_id);


//  document.body.style.color = "#" + doc_color;

  document.getElementById(item_id).style.color = "#" + doc_color;

// alert('done');

}


function change_default_site_link_color() {

//  alert('font_color');

  var doc_color = document.form1.default_site_link_color.value;

 //      alert(doc_color);


setStyleByTag("A","color","#" + doc_color,1) ;

// alert('done');

}

function change_default_link_color() {

//  alert('font_color');

  var doc_color = document.form1.default_link_color.value;

  //    alert(doc_color);

var i = document.div_select_editor.select_div.selectedIndex;

var item_id = document.div_select_editor.select_div.options[i].value;

// alert('done0');


setStyleById(item_id,"color","#" + doc_color) ;

// alert('done');

}



function change_default_site_link_font_style() {

//  alert('font_color');

  var doc_color = document.form1.default_site_link_font_style.value;

 //      alert(doc_color);

//  document.getElementsByTagName('A').style.color = "#" + doc_color;

//  document.styleSheets.styles.addRule("P","color:blue");


setStyleByTag("A","fontStyle",doc_color,1) ;

// alert('done');

}

function change_default_site_link_font_weight() {

//  alert('font_color');

  var doc_color = document.form1.default_site_link_font_weight.value;

 //      alert(doc_color);

//  document.getElementsByTagName('A').style.color = "#" + doc_color;

//  document.styleSheets.styles.addRule("P","color:blue");


setStyleByTag("A","fontWeight",doc_color,1) ;

// alert('done');

}


function change_default_site_link_decoration() {

//  alert('font_color');

  var doc_color = document.form1.default_site_link_decoration.value;

 //      alert(doc_color);

//  document.getElementsByTagName('A').style.color = "#" + doc_color;

//  document.styleSheets.styles.addRule("P","color:blue");


setStyleByTag("A","textDecoration",doc_color,1) ;

// alert('done');

}





function change_default_bg_color() {

// alert('div_color');

 doc_color = document.form1.default_bg_color.value;

//  alert(doc_color);

var i = document.div_select_editor.select_div.selectedIndex;

     //    alert(i);

var item_id = document.div_select_editor.select_div.options[i].value;

document.getElementById(item_id).style.backgroundColor = "#" + doc_color;

// alert('done');

}


function change_background_image_select() {

  i = document.form1.bg_image_id.selectedIndex;

//       alert('2a-body');

  doc_color = document.form1.bg_image_id.options[i].value;

//  doc_color = document.form1.news_image_id.value;

   //    alert('2b-body');

  doc_color =  'url(' + 'http://users.section101.com/memberdata/de/default/photos/' + doc_color + ')' ;


var i = document.div_select_editor.select_div.selectedIndex;

     //    alert(i);

var item_id = document.div_select_editor.select_div.options[i].value;


  //    alert(doc_color);

  document.getElementById(item_id).style.backgroundImage = doc_color;

//alert('done') ;

}






function change_default_font_size() {

   //      alert('font size');

var i = document.div_select_editor.select_div.selectedIndex;

     //    alert(i);

var item_id = document.div_select_editor.select_div.options[i].value;

       //   alert(item_id);

  i = document.form1.default_font_size.selectedIndex;
  doc_color = document.form1.default_font_size.options[i].value;
        //  alert(doc_color);
  document.getElementById(item_id).style.fontSize = doc_color;


}




function change_default_font_family() {

      //   alert('font family');

var i = document.div_select_editor.select_div.selectedIndex;

      //   alert(i);

var item_id = document.div_select_editor.select_div.options[i].value;

       //   alert(item_id);

  i = document.form1.default_font_family.selectedIndex;
  doc_color = document.form1.default_font_family.options[i].value;

//  alert(doc_color);

  document.getElementById(item_id).style.fontFamily = doc_color;

 // alert('done');

}




function change_font_size2(item_id) {

form_id = item_id + '_font_size' ;
  //        alert(form_id);

  i = document.form1.slug_header_font_size.selectedIndex;

   //      alert(form_id);

    //     alert(i);


// doc_size = document.form1.slug_header_font_size.options[i].value;

  doc_size = document.form1.slug_header_font_size.options[i].value;

      //    alert(doc_size);

  document.getElementById("slug_header_font_size").style.fontSize = doc_size;
}

function change_slug_header_font_size() {

        // alert('size');
  i = document.form1.slug_header_font_size.selectedIndex;

       //  alert('size2');
//         alert(i);

  doc_color = document.form1.slug_header_font_size.options[i].value;
//         alert('size3');
  //       alert(doc_color);
  document.getElementById("s101_css_edit_slug_header").style.fontSize = doc_color;
}

function change_default_font_family_test() {
//alert('here11') ;
 i = document.form1.slug_header_font_family.selectedIndex;
  doc_color = document.form1.slug_header_font_family.options[i].value;
//  doc_color = document.form1.slug_header_font_family.value;

//    alert(doc_color);
  document.getElementById("slug_header").style.fontFamily = doc_color;
}





function change_default_font_familyx() {

//alert('here') ;

  i = document.form1.default_font_family.selectedIndex;
  doc_color = document.form1.default_font_family.options[i].value;
  //  alert(doc_color);
  document.getElementById("s101_css_edit_slug_body").style.fontFamily = doc_color;
}





function change_default_line_height() {

//alert('Line Height') ;

var i = document.div_select_editor.select_div.selectedIndex;

  //      alert(i);

var item_id = document.div_select_editor.select_div.options[i].value;

//alert(item_id) ;

var form_id = 'default_line_height' ;

  i = eval("document.form1." + form_id + ".selectedIndex");

  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;
     //    alert(doc_size);

  document.getElementById(item_id).style.lineHeight = doc_size;

   //      alert('done');


}



function change_default_font_style() {

//alert('Font Style') ;

var i = document.div_select_editor.select_div.selectedIndex;

 //       alert(i);

var item_id = document.div_select_editor.select_div.options[i].value;

//alert(item_id) ;

var form_id = 'default_font_style' ;

  i = eval("document.form1." + form_id + ".selectedIndex");

  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;
  //       alert(doc_size);

  document.getElementById(item_id).style.fontStyle = doc_size;

    //     alert('done');


}





function change_default_site_font_weight() {

//alert('Font Weight') ;

var form_id = 'default_site_font_weight' ;

  i = eval("document.form1." + form_id + ".selectedIndex");

  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;
  //       alert(doc_size);

  document.body.style.fontWeight = doc_size;

    //     alert('done');


}


function change_default_font_weight() {

//alert('Font Weight') ;

var i = document.div_select_editor.select_div.selectedIndex;

  //    alert(i);

var item_id = document.div_select_editor.select_div.options[i].value;

//alert(item_id) ;

var form_id = 'default_font_weight' ;

  i = eval("document.form1." + form_id + ".selectedIndex");

  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;
  //     alert(doc_size);

  document.getElementById(item_id).style.fontWeight = doc_size;

  //   alert('done');


}











function change_font_family_old(item_id, form_id) {

var item_id ;

var form_id ;

//alert(item_id) ;

//alert(form_id) ;

i = eval("document.form1." + form_id + ".selectedIndex") ;

//alert(i) ;

 doc_color = eval("document.form1." + form_id + ".options[i].value") ;

  //  alert(doc_color);

var item_id2 = item_id + '1' ;

//var item_id2 = item_id ;

// item_id3 = item_id + '2' ;

  var allHTMLTags=document.getElementsByTagName('*');

 //  alert('ready');

var item_list ;

  //Loop through all tags using a for loop

  for (i=0; i<allHTMLTags.length; i++) {

       var item_idx = allHTMLTags[i].className ;

	item_list = item_list + " - " +   allHTMLTags[i].className ;

   if ( item_idx == item_id2) {

   document.getElementById(item_idx).style.fontFamily = doc_color;

  }
}

 //  alert('done');

//  document.getElementById(item_id2).style.fontFamily = doc_color;

// document.getElementById(item_id3).style.fontFamily = doc_color;

// document.getElementsTagName(item_id).style.fontFamily = doc_color;

}


function getElementsById(id)
{
   var divs = document.getElementsByTagName(id);
   var arr = new Array();
   var temp_id = '';

//alert('css id2') ;

   for (var i=0; i < divs.length; i++)
   {

   temp_id = divs[i].id ;

   if ( temp_id.length > 0) {

     if ( temp_id != 'undefined' ) {

            var css_Items = css_Items + "<a href='#' onMouseOver=\"change_div('"+ temp_id + "', 'content_font_family', 'select');\" onMouseOut=\"change_div2('"+ temp_id + "', 'content_font_family', 'select');\" >" + temp_id + "</a><br>" ;

      }

   }

      if (divs[i].id == id)
      {
    //     alert(divs[i].id) ;

         arr[arr.length] = divs[i];


      }
   }

// alert('done') ;

document.getElementById('result').innerHTML=css_Items ;

}

function change_div(item_id, value_type, new_value) {

var item_id ;

var value_type ;

var new_value ;

//alert(item_id) ;

//  i = document.form1.slug_font_color.selectedIndex;

//  doc_color = document.form1.slug_font_color.options[i].value;
        //  alert(doc_color);

    document.getElementById(item_id).style.background = 'green';

    document.getElementById(item_id).style.border = 'red groove';


//  document.getElementByTagName('homepage_latestnews').style.color = 'red';

//  document.getElementByTagName('homepage_latestnews').style.background = 'green';

  document.body.style.background = 'blue' ;

//alert('done') ;

}

function change_div2(item_id, value_type, new_value) {

var item_id ;

var value_type ;

var new_value ;

//alert(item_id) ;

//  i = document.form1.slug_font_color.selectedIndex;

//  doc_color = document.form1.slug_font_color.options[i].value;
        //  alert(doc_color);

    document.getElementById(item_id).style.background = 'white';

    document.getElementById(item_id).style.border = 'none';


//  document.getElementByTagName('homepage_latestnews').style.color = 'red';

//  document.getElementByTagName('homepage_latestnews').style.background = 'green';

  document.body.style.background = 'blue' ;

//alert('done') ;

}


function toggle_page_seo() {

	if ($('input[name=page_seo_override]').is(':checked')) {

		$('#s101_page_seo_info').css('display','block') ;

	} else {

		$('#s101_page_seo_info').css('display','none') ;

	}

}


function select_email_template() {

  i = document.s101_email_select.email_template.selectedIndex;

  email_template = document.s101_email_select.email_template.options[i].value;

  document.s101_email_select_values.s101_email_template_selected.value = email_template ;

  temp_value_id = document.s101_email_select.email_template_temp_id.value;

  s101Manager.doPopup('save_temp_site_values','save temp values','&temp_value_id=' + temp_value_id + '&temp_value=' + email_template,'0px');

}

function select_cs_email_template(site_id,cs_site_id) {

  i = document.s101_email_select.email_template.selectedIndex;

  email_template = document.s101_email_select.email_template.options[i].value;

  document.s101_email_select_values.s101_email_template_selected.value = email_template ;

  temp_value_id = document.s101_email_select.email_template_temp_id.value;

  s101Manager.doPopup('save_temp_site_values','save temp values','&temp_value_id=' + temp_value_id + '&temp_value=' + email_template + '&site_id=' + site_id + '&cs_site_id=' + cs_site_id,'0px');

}


function select_client_email_template() {

  i = document.s101_email_select.client_email_template.selectedIndex;

  email_template = document.s101_email_select.client_email_template.options[i].value;

  document.s101_email_select_values.s101_client_email_template_selected.value = email_template ;

  temp_value_id = document.s101_email_select.client_email_template_temp_id.value;

  s101Manager.doPopup('save_temp_site_values','save temp values','&temp_value_id=' + temp_value_id + '&temp_value=' + email_template,'0px');

}





function getElementsById_select(id)
{
   var divs = document.getElementsByTagName(id);
   var arr = new Array();
   var temp_id = '';

//alert('css id2') ;


//var s101_compatible = document.form1.s101_compatible.value ;

//alert(s101_compatible) ;

var s101_compatible = 'off' ;


var css_Items = "<form name='div_select_editor'><select name='select_div' id='select_div' onChange=\"change_div_select();\" >" ;


   for (var i=0; i < divs.length; i++)
   {

   temp_id = divs[i].id ;

   if ( temp_id.length > 0) {

     if ( temp_id != 'undefined' ) {



           if  ( s101_compatible == 'on' )  {

//            var css_Items = css_Items + "<a href='#' onMouseOver=\"change_div('"+ temp_id + "', 'content_font_family', 'select');\" onMouseOut=\"change_div2('"+ temp_id + "', 'content_font_family', 'select');\" >" + temp_id + "</a><br>" ;

	    if  ( temp_id.substring(0,5) != 's101_' )  {

              css_Items = css_Items + "<option value='" + temp_id + "'>" + temp_id + "</option>"  ;

	    }

          } else {

              css_Items = css_Items + "<option value='" + temp_id + "'>" + temp_id +"</option>"  ;

	  }


      }

   }

      if (divs[i].id == id)
      {
//         alert(divs[i].id) ;

         arr[arr.length] = divs[i];


      }
   }


     css_Items = css_Items + "</select></form>" ;


//alert('done') ;

// document.getElementById('result').innerHTML=css_Items ;

}

function change_div_select() {

//alert('start') ;

var item_id ;

var value_type ;

var new_value ;


if (Last_ID != 'start') {

change_div_deselect()

}

var i = document.div_select_editor.select_div.selectedIndex;

item_id = document.div_select_editor.select_div.options[i].value;

Last_ID = item_id ;

//alert(item_id) ;



//  i = document.form1.slug_font_color.selectedIndex;

//  doc_color = document.form1.slug_font_color.options[i].value;
        //  alert(doc_color);

//    document.getElementById(item_id).style.background = 'green';

    document.getElementById(item_id).style.border = 'red groove';


//  document.getElementByTagName('homepage_latestnews').style.color = 'red';

//  document.getElementByTagName('homepage_latestnews').style.background = 'green';

//  document.body.style.background = 'blue' ;

//alert('done') ;

}

function change_div_deselect() {

//alert('start') ;

var item_id ;

var value_type ;

var new_value ;


item_id = Last_ID ;

//alert(item_id) ;



//  i = document.form1.slug_font_color.selectedIndex;

//  doc_color = document.form1.slug_font_color.options[i].value;
        //  alert(doc_color);

//    document.getElementById(item_id).style.background = 'white';

    document.getElementById(item_id).style.border = 'none';


//  document.getElementByTagName('homepage_latestnews').style.color = 'red';

//  document.getElementByTagName('homepage_latestnews').style.background = 'green';

//  document.body.style.background = 'blue' ;

//alert('done') ;

}




/* getElementByClass
/**********************/
var allHTMLTags = new Array();
function getElementByClass(theClass) {

//alert('css') ;

// var = css_Items ;

  //Create Array of All HTML Tags
  var allHTMLTags=document.getElementsByTagName("*");
  //Loop through all tags using a for loop
  for (i=0; i<allHTMLTags.length; i++) {
  //Get all tags with the specified class name.
     if (allHTMLTags[i].className==theClass) {
       //Place any code you want to apply to all
       //pages with the class specified.
       //In this example is to ?display:none;? them
       //Making them all dissapear on the page.
       allHTMLTags[i].style.display='none';

     }

   var css_Items = css_Items + " - " + allHTMLTags[i].className ;

  }



document.getElementById('result').innerHTML=css_Items ;

}




function change_slug_font_color() {
  i = document.form1.slug_font_color.selectedIndex;
  doc_color = document.form1.slug_font_color.options[i].value;
        //  alert(doc_color);
  document.getElementById("s101_css_edit_slug").style.color = doc_color;
}


function change_slug_font_size() {
  i = document.form1.slug_font_size.selectedIndex;
  doc_color = document.form1.slug_font_size.options[i].value;
        //  alert(doc_color);
  document.getElementById("s101_css_edit_slug").style.fontSize = doc_color;
}

function change_slug_font_family() {
  i = document.form1.slug_font_family.selectedIndex;
  doc_color = document.form1.slug_font_family.options[i].value;
  //  alert(doc_color);
  document.getElementById("s101_css_edit_slug").style.fontFamily = doc_color;
}


function change_slug_header_font_color() {
  i = document.form1.slug_header_font_color.selectedIndex;
  doc_color = document.form1.slug_header_font_color.options[i].value;
        //  alert(doc_color);
  document.getElementById("s101_css_edit_slug_header").style.color = doc_color;
}



function change_slug_header_font_family() {
//   alert('font');

  i = document.form1.slug_header_font_family.selectedIndex;
  doc_color = document.form1.slug_header_font_family.options[i].value;
 //  alert(doc_color);
  document.getElementById("s101_css_edit_slug_header").style.fontFamily = doc_color;
}


function close_color() {
    document.getElementById("s101_css_color_picker").style.visibility = 'hidden' ;

}

function grab_color2() {


  doc_color = document.s101_css_color_picker_form.cp1_Hex.value;

  doc_color = '#' + doc_color ;

//        alert(doc_color);

		  item_id = document.s101_css_color_picker_form.css_item.value;

		  item_type = document.s101_css_color_picker_form.css_item_type.value;

//        doc_color = '[' +  doc_color + ']' ;

  //     alert(item_id);


//	        alert(item_type);

	if (item_type == 'background') {

	       if (item_id == 'body') {

    //  alert('body');

		  document.body.style.background = doc_color;
   //   alert('body1');


		} else {

  //    alert('other');


		  document.getElementById(item_id).style.backgroundColor = doc_color;

//      alert('other2');

		}

          }

		if (item_type == 'font') {

		  document.getElementById(item_id).style.color = doc_color;
		  }


// Update the Display

		  item_id2 = item_id + '_' + item_type + '_display' ;

		  	  item_id3 = item_id + '_' + item_type  + '_info' ;

//alert(item_id2) ;

//alert(item_id3) ;

		    document.getElementById(item_id).style.background = doc_color ;


//alert('almost done2') ;


	    document.getElementById(item_id).value = doc_color ;

//alert('almost done3') ;


    document.getElementById("s101_css_color_picker").style.visibility = 'hidden' ;

//alert('almost done4') ;


    document.getElementById("s101_color_picker_arrows").style.visibility = 'hidden' ;


//alert('almost done5') ;


  document.body.removeChild(this._arrow);


//alert('almost done6') ;


   document.body.removeChild(_arrow);


//alert('almost done7') ;


//alert('almost done6') ;
 document.getElementById("this._arrow").style.visibility = 'hidden' ;

//alert('done') ;

}



function show_color_picker2(item, item_type) {


	var css_item = item ;

//	alert(item) ;

//	alert(item_type) ;



	document.s101_css_color_picker_form.css_item.value = item ;

		document.s101_css_color_picker_form.css_item_type.value = item_type ;


  document.getElementById("s101_css_color_picker").style.visibility = 'visible' ;



}


function ahah(url, target) {
  document.getElementById(target).innerHTML = ' Fetching data...';
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    req.onreadystatechange = function() {ahahDone(url, target);};
    req.open("GET", url, true);
    req.send("");
  }
}

function ahahDone(url, target) {
  if (req.readyState == 4) { // only if req is "loaded"
    if (req.status == 200) { // only if "OK"
      document.getElementById(target).innerHTML = req.responseText;
    } else {
      document.getElementById(target).innerHTML=" AHAH Error:\n"+ req.status + "\n" +req.statusText;
    }
  }
}

function showPageEditor(site_id) {

//  alert(site_id) ;


   load('?page=page_css_editor_load','s101_css_editor_popup_html');
//   alert("here2") ;
//   getElementsById_select('div') ;

}

function showFontEditor(site_id) {

  alert(site_id) ;


   load_fonts('?page=page_font_editor_old','s101_container2');

   alert("here2") ;
//   getElementsById_select('div') ;

}



function load(name, div) {
//	ahah(name,div);
  document.getElementById(div).style.visibility = 'visible' ;
  document.getElementById("s101_css_editor_popup_dragbar").style.visibility = 'visible' ;
//  document.getElementById("s101_css_editor_popup_close").style.visibility = 'visible' ;


	return false;
}


function load_fonts(name, div) {
//	ahah(name,div);

div = 's101_font_editor_popup' ;

  document.getElementById(div).style.visibility = 'visible' ;
  document.getElementById("s101_fonts_editor_popup_dragbar").style.visibility = 'visible' ;
//  document.getElementById("s101_css_editor_popup_close").style.visibility = 'visible' ;


	return false;
}



function close_editor() {
  document.getElementById("s101_css_editor_popup").style.visibility = 'hidden' ;
  document.getElementById("s101_css_editor_popup_dragbar").style.visibility = 'hidden' ;
  document.getElementById("s101_css_editor_popup_close").style.visibility = 'hidden' ;
  document.getElementById("s101_css_editor_popup_html").style.visibility = 'hidden' ;

	return false;
}



// **** Main Versions for Design Wizard ******* //



// **** BODY Functions **** //



function change_body_background_image_select(form,form_id) {

//  i = document.form1.news_image_id.selectedIndex;

//i = eval("document." + form + "." + form_id + ".selectedIndex");



//    alert('2a-body');

//  doc_color = document.form1.news_image_id.options[i].value;

//doc_color = eval("document." + form + "." + form_id + ".options[i].value");


doc_color = eval("document." + form + "." + form_id + ".value");

//  doc_color = document.form1.news_image_id.value;

  //  alert('2b-body');

  doc_color =  'url(' + doc_color + ')' ;


// alert(doc_color);

  document.body.style.backgroundImage = doc_color ;

//alert('done');

//eval("document." + target + ".style.backgroundImage") = doc_color ;

}


function change_logo_image_select(form,form_id,logo_id) {

alert('logo') ;

alert(form) ;

alert(form_id) ;

	doc_color = eval("document." + form + "." + form_id + ".value");

//	doc_color =  'url(' + doc_color + ')' ;

alert('start') ;

	$(logo_id).html('<img src="' + doc_color + '" alt="logo" />');

alert('done') ;

//	document.body.style.backgroundImage = doc_color ;

}



function change_site_bg_color(form,form_id) {

//  alert('site_color');

// doc_color = document.form1.default_site_bg_color.value;

doc_color = eval("document." + form + "." + form_id + ".value");

//  alert(doc_color);

  document.body.style.backgroundImage="none"

// alert('done');

  document.body.style.backgroundColor = "#" + doc_color;

// alert('done2');

}

function change_page_bg_color(form,form_id) {

//  alert('page_color');

// doc_color = document.form1.default_site_bg_color.value;

doc_color = eval("document." + form + "." + form_id + ".value");

//  alert(doc_color);

  $('#s101_site-wrapper-bg').css('background-image','none') ;

// alert('done');

  $('#s101_site-wrapper-bg').css('background-color', '#' + doc_color);

// alert('done2');

}



function change_site_font_family(form,form_id) {

 //       alert('font family');

//  i = document.form1.default_site_font_family.selectedIndex;

i = eval("document." + form + "." + form_id + ".selectedIndex");

//  doc_color = document.form1.default_site_font_family.options[i].value;

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

//  alert(doc_color);

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

//  alert(new_string);

//new_string = "'" + new_string + "'";

//  alert(new_string);

//  document.body.style.fontFamily = new_string;

//alert('jquery') ;

  $('.s101_std_text, p, #s101_page_tour  .s101_tourRow_date, #s101_page_tour .s101_tourRow_event,#s101_page_tour  .s101_tourRow_moreinfo,  #s101_page_tour_archive .s101_tourRow_date, #s101_page_tour_archive .s101_tourRow_event,  #s101_page_tour_archive .s101_tourRow_moreinfo, .news-wrapper .news-blurb-wrapper, .s101_news_content').css('font-family',new_string) ;

// alert('done');

}


function change_site_link_font_family(form,form_id) {

//        alert('font family');

//  i = document.form1.default_site_link_font_family.selectedIndex;

i = eval("document." + form + "." + form_id + ".selectedIndex");

//  doc_color = document.form1.default_site_link_font_family.options[i].value;

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

//  alert(doc_color);

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

//  alert(new_string);

//new_string = "'" + new_string + "'";

//  alert(new_string);

//  document.a.style.fontFamily = new_string;

 $('.s101_read_more, .s101_read_more a,.s101_read_more_link ,s101_read_more_link a, .read-more a, .s101_join_button, .s101_fancy_link a,.s101_fancy_link, .s101_twitter_readmore a,.s101_link, .s101_link a,.s101_insert_link ,.s101_insert_link a,.s101_page_links ,.s101_page_links a').css('font-family',new_string) ;

// alert('done');

}





function change_site_font_size(form,form_id) {

    //   alert('font size');

//  i = document.form1.default_site_font_size.selectedIndex;

//  doc_color = document.form1.default_site_font_size.options[i].value;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

//  alert(doc_color);

//  document.body.style.fontSize = doc_color;

  $('.s101_std_text, p, #s101_page_tour  .s101_tourRow_date, #s101_page_tour .s101_tourRow_event,#s101_page_tour  .s101_tourRow_moreinfo,  #s101_page_tour_archive .s101_tourRow_date, #s101_page_tour_archive .s101_tourRow_event,  #s101_page_tour_archive .s101_tourRow_moreinfo, .news-wrapper .news-blurb-wrapper, .s101_news_content').css('font-size',doc_color) ;


// alert('done');

}


function change_site_font_color(form,form_id) {

 //  alert('font_color');

//  var doc_color = document.form1.default_site_font_color.value;

doc_color = eval("document." + form + "." + form_id + ".value");

   //    alert(doc_color);

//  document.body.style.color = "#" + doc_color;

  $('.s101_std_text, p, #s101_page_tour  .s101_tourRow_date, #s101_page_tour .s101_tourRow_event,#s101_page_tour  .s101_tourRow_moreinfo,  #s101_page_tour_archive .s101_tourRow_date, #s101_page_tour_archive .s101_tourRow_event,  #s101_page_tour_archive .s101_tourRow_moreinfo, .news-wrapper .news-blurb-wrapper, .s101_news_content').css('color', '#' + doc_color) ;




// alert('done');

}



function change_site_link_color(form,form_id) {

 //  alert('font_color');

//  var doc_color = document.form1.default_site_font_color.value;

doc_color = eval("document." + form + "." + form_id + ".value");

   //    alert(doc_color);

//  document.a.style.color = "#" + doc_color;

//setStyleByTag("A","color","#" + doc_color,1) ;



 $('.s101_read_more, .s101_read_more a,.s101_read_more_link ,s101_read_more_link a, .read-more a, .s101_join_button, .s101_fancy_link a,.s101_fancy_link, .s101_twitter_readmore a,.s101_link, .s101_link a,.s101_insert_link ,.s101_insert_link a,.s101_page_links ,.s101_page_links a').css('color','#' + doc_color) ;


// alert('done');

}


function change_site_link_rollover_color(form,form_id) {

 //  alert('font_color');


doc_color = eval("document." + form + "." + form_id + ".value");

   //    alert(doc_color);

//setStyleByTag("a:hover","color","#" + doc_color,1) ;

 $('.s101_read_more a:hover, .read-more a:hover, .s101_link a:hover,.s101_insert_link a:hover').css('color','#' + doc_color) ;


// alert('done');

}



function change_site_font_style(form,form_id) {

//alert('Font Style') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");//

//  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

        // alert(doc_size);

//  document.body.style.fontStyle = doc_color;

  $('.s101_std_text, p, #s101_page_tour  .s101_tourRow_date, #s101_page_tour .s101_tourRow_event,#s101_page_tour  .s101_tourRow_moreinfo,  #s101_page_tour_archive .s101_tourRow_date, #s101_page_tour_archive .s101_tourRow_event,  #s101_page_tour_archive .s101_tourRow_moreinfo, .news-wrapper .news-blurb-wrapper, .s101_news_content').css('font-style',doc_color) ;




      //   alert('done');


}


function change_site_link_font_style(form,form_id) {

//alert('Font Style') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");//

//  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

        // alert(doc_size);

//  document.body.style.fontStyle = doc_color;

      //   alert('done');

//setStyleByTag("A","fontStyle",doc_color,1) ;


 $('.s101_read_more, .s101_read_more a,.s101_read_more_link ,s101_read_more_link a, .read-more a, .s101_join_button, .s101_fancy_link a,.s101_fancy_link, .s101_twitter_readmore a,.s101_link, .s101_link a,.s101_insert_link ,.s101_insert_link a,.s101_page_links ,.s101_page_links a').css('font-style', doc_color) ;


}


function change_site_link_rollover_size(form,form_id) {

//alert('Font Style') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");//

//  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

        // alert(doc_size);

//  document.body.style.fontStyle = doc_color;

      //   alert('done');

//setStyleByTag("A","fontStyle",doc_color,1) ;


 $('.s101_read_more a:hover, .read-more a:hover, .s101_link a:hover,.s101_insert_link a:hover ').css('font-size', doc_color) ;


}





function change_site_font_weight(form,form_id) {

//alert('Font Weight') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");

//  doc_color = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

  //       alert(doc_size);

//  document.body.style.fontWeight = doc_color;

  $('.s101_std_text, p, #s101_page_tour  .s101_tourRow_date, #s101_page_tour .s101_tourRow_event,#s101_page_tour  .s101_tourRow_moreinfo,  #s101_page_tour_archive .s101_tourRow_date, #s101_page_tour_archive .s101_tourRow_event,  #s101_page_tour_archive .s101_tourRow_moreinfo, .news-wrapper .news-blurb-wrapper, .s101_news_content').css('font-weight',doc_color) ;




    //     alert('done');

}


function change_site_link_font_weight(form,form_id) {

//alert('Link Font Weight') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");

//  doc_color = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

    //     alert(doc_color);

//  document.body.style.fontWeight = doc_color;

//setStyleByTag("A","fontWeight",doc_color,1) ;

 $('.s101_read_more, .s101_read_more a,.s101_read_more_link ,s101_read_more_link a, .read-more a, .s101_join_button, .s101_fancy_link a,.s101_fancy_link, .s101_twitter_readmore a,.s101_link, .s101_link a,.s101_insert_link ,.s101_insert_link a,.s101_page_links ,.s101_page_links a').css('font-weight', doc_color) ;

    //   alert('done');

}




function change_site_line_height(form,form_id) {

//alert('Line Height') ;

//var i = document.div_select_editor.select_div.selectedIndex;

  //      alert(i);

//var item_id = document.div_select_editor.select_div.options[i].value;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

//  document.body.style.lineHeight = doc_color;

    //     alert('done');

  $('.s101_std_text, p, #s101_page_tour  .s101_tourRow_date, #s101_page_tour .s101_tourRow_event,#s101_page_tour  .s101_tourRow_moreinfo,  #s101_page_tour_archive .s101_tourRow_date, #s101_page_tour_archive .s101_tourRow_event,  #s101_page_tour_archive .s101_tourRow_moreinfo, .news-wrapper .news-blurb-wrapper, .s101_news_content').css('line-height',doc_color) ;



}


function change_site_link_decoration(form,form_id) {

//alert('Font Decoration') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");

//  doc_color = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

//      alert(doc_color);

//  document.body.style.fontWeight = doc_color;

//setStyleByTag("A","textDecoration",doc_color,1) ;

 $('.s101_read_more, .s101_read_more a,.s101_read_more_link ,s101_read_more_link a, .read-more a, .s101_join_button, .s101_fancy_link a,.s101_fancy_link, .s101_twitter_readmore a,.s101_link, .s101_link a,.s101_insert_link ,.s101_insert_link a,.s101_page_links ,.s101_page_links a').css('text-decoration', doc_color) ;

  //     alert('done');

}





// **** Universal Functions **** //


function change_background_color(form,form_id,target) {

// alert('start');


doc_color = eval("document." + form + "." + form_id + ".value");

document.getElementById(target).style.backgroundColor = "#" + doc_color;

if (target == 's101_site-wrapper-bg') {

	background_rgb_dec = parseInt(doc_color.substr(0,2),16) + "," + parseInt(doc_color.substr(2,2),16) + "," + parseInt(doc_color.substr(4,2),16) ;

//	alert(background_rgb_dec) ;

}

// alert('done');

}


function change_font_family(form,form_id,target, element_type) {

 //     alert('font family');


//  i = document.form1.default_site_font_family.selectedIndex;

i = eval("document." + form + "." + form_id + ".selectedIndex");

//alert('1') ;

//  doc_color = document.form1.default_site_font_family.options[i].value;

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

// alert(doc_color);

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

//  alert(new_string);

//new_string = "'" + new_string + "'";

//  alert(new_string);

if (target.substr(0,1) == '.') {

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"fontFamily",new_string,0) ;

if (target == 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"fontFamily",new_string,0) ;

setStyleByClass(element_type,target + '_last',"fontFamily",new_string,0) ;

}

if (target == 's101_page_headings') {

	$('.s101_page_headings, h1, #s101_page_heading_##PAGE##, .s101_page_headings a, .s101_page_headings_app, .s101_page_headings_app a').css('font-family', new_string) ;

}


if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('font-family',new_string) ;

}

if (target == 's101_alt_text') {


$('.s101_alt_text, .s101_twitter_feed, .s101_db_list_press a ').css('font-family', new_string) ;

}

if (target == 's101_top-nav-element') {

$('.s101_top-nav-element, .s101_top-nav-element a,.s101_top-nav-element_first, .s101_top-nav-element_first a,.s101_top-nav-element_last, .s101_top-nav-element_last a').css('font-family', new_string) ;

}

} else {

  document.getElementById(target).style.fontFamily = new_string;

}

//setStyleByTag(target,"fontFamily",new_string,1) ;

// alert('done');

}


function change_font_size(form,form_id, target, element_type) {

//      alert('font size');

//  i = document.form1.default_site_font_size.selectedIndex;

//  doc_color = document.form1.default_site_font_size.options[i].value;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

if (target.substr(0,1) == '.') {

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"fontSize",doc_color,0) ;

if (target == 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"fontSize",doc_color,0) ;

setStyleByClass(element_type,target + '_last',"fontSize",doc_color,0) ;

}

if (target == 's101_page_headings') {

	$('.s101_page_headings, h1, #s101_page_heading_##PAGE##, .s101_page_headings a, .s101_page_headings_app, .s101_page_headings_app a').css('font-size', doc_color) ;

}


if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('font-size',doc_color) ;

}

if (target == 's101_alt_text') {

$('.s101_alt_text, .s101_twitter_feed, .s101_db_list_press a ').css('font-size', doc_color) ;

}

if (target == 's101_top-nav-element') {

$('.s101_top-nav-element, .s101_top-nav-element a,.s101_top-nav-element_first, .s101_top-nav-element_first a,.s101_top-nav-element_last, .s101_top-nav-element_last a').css('font-size', doc_color) ;

}


} else {

  document.getElementById(target).style.fontSize = doc_color;

}


// alert('done');

}


function change_item_spacing(form,form_id, target, element_type) {

//    alert('item spacing');

//  i = document.form1.default_site_font_size.selectedIndex;

//  doc_color = document.form1.default_site_font_size.options[i].value;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

if (target.substr(0,1) == '.') {

//alert('class') ;

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"marginRight",doc_color,0) ;

if (target = 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"marginRight",doc_color,0) ;

setStyleByClass(element_type,target + '_last',"marginRight",doc_color,0) ;

}




} else {

//alert('id') ;

//alert(doc_color) ;

  document.getElementById(target).style.marginRight = doc_color;

// alert('done1');

}


// alert('done2');

}


function change_menu_spacing(form,form_id, target, element_type) {


i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");


//alert(target) ;

//alert(doc_color) ;


// $(target).css("padding-left",doc_color) ;

$('#s101_top-nav ul li').css('padding-left', doc_color) ;



$(target + ":first_child").css("padding-left","0px") ;

}


function change_alignment(form,form_id, target, element_type) {

//    alert('alignment');

//  i = document.form1.default_site_font_size.selectedIndex;

//  doc_color = document.form1.default_site_font_size.options[i].value;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

if (target.substr(0,1) == '.') {

//alert('class') ;

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"textAlign",doc_color,0) ;

if (target = 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"textAlign",doc_color,0) ;

setStyleByClass(element_type,target + '_last',"textAlign",doc_color,0) ;

}

if (target == 's101_top-nav-element') {

$('.s101_top-nav-element, .s101_top-nav-element a,.s101_top-nav-element_first, .s101_top-nav-element_first a,.s101_top-nav-element_last, .s101_top-nav-element_last a').css('textAlign', doc_color) ;

}



} else {

//alert('id') ;

//alert(doc_color) ;

//alert(target) ;


  document.getElementById(target).style.textAlign = doc_color;

// alert('done1');

}


// alert('done2');

}



function change_item_style(form,form_id, style_item ,target) {

// alert(style_item) ;

doc_color = eval("document." + form + "." + form_id + ".value");

//alert(target);

//alert(doc_color);

$(target).css(style_item,doc_color) ;

if (target == '#s101_site-fullwidth-photo img') {

	target = '.s101_db_content_image .large' ;

//	alert(target);

	$(target).css(style_item,doc_color) ;

}

if (target == '.suboptions .s101_db_content_image img, .s101_db_content_image_small, .suboptions .s101_db_content_image_small') {

	target = '.s101_db_content_image .small' ;

//	alert(target);

	$(target).css(style_item,doc_color) ;

}



if (g_Page == 'admin_wizard_image') {

 $('.s101_db_content_image .large').css('border-width', doc_color) ;

}





}




function change_item_color(form, form_id, style_item, target, variate_obj) {

doc_color = eval("document." + form + "." + form_id + ".value");

$(target).css(style_item,'#' + doc_color) ;

if (target == '#s101_site-fullwidth-photo img') {

	target = '.s101_db_content_image .large' ;

	$(target).css(style_item,'#' + doc_color) ;

}

if (target == '.suboptions .s101_db_content_image img, .s101_db_content_image_small, .suboptions .s101_db_content_image_small') {

	target = '.s101_db_content_image .small' ;

	$(target).css(style_item,'#' + doc_color) ;

}


if (variate_obj.length >= 1)
{
    var new_color = brightness_variate(doc_color, 40);
    $(variate_obj).css(style_item,'#' + new_color) ;
}

// for Wizard Support

if (g_Page == 'admin_wizard_image') {

	$('.s101_db_content_image .large').css('border-color','#' + doc_color) ;

}

}


function brightness_variate(color, step) {

	var r;
	var g;
	var b;
	var r_hex_q;
	var g_hex_q;
	var b_hex_q;
	var r_hex = hex_dec(color.substr(0,2));
	var g_hex = hex_dec(color.substr(2,2));
	var b_hex = hex_dec(color.substr(4,2));
	var sum = r_hex + g_hex + b_hex;

	if (sum <= 380)
	{
		r_hex_q = dec_hex(Math.max(0,Math.min(255,r_hex + step)));
		g_hex_q = dec_hex(Math.max(0,Math.min(255,g_hex + step)));
		b_hex_q = dec_hex(Math.max(0,Math.min(255,b_hex + step)));
	}
	else
	{
		r_hex_q = dec_hex(Math.max(0,Math.min(255,r_hex - step)));
		g_hex_q = dec_hex(Math.max(0,Math.min(255,g_hex - step)));
		b_hex_q = dec_hex(Math.max(0,Math.min(255,b_hex - step)));
	}

	r = str_pad(r_hex_q,2,'0');
	g = str_pad(g_hex_q,2,'0');
	b = str_pad(b_hex_q,2,'0');

	var new_color = r + g + b;

	return new_color;
}


function dec_hex(decimal) {
	var hex = decimal.toString(16);
	if (hex.length == 1) { hex = '0' + hex; } return hex;
}


function hex_dec(color) {
    return parseInt(color, 16);
}


function str_pad(input, pad_length, pad_string, pad_type) {

    var half = '',
        pad_to_go;

    var str_pad_repeater = function (s, len)
    {
        var collect = '',
            i;

        while (collect.length < len)
        {
            collect += s;
        }
        collect = collect.substr(0, len);

        return collect;
    };

    input += '';
    pad_string = pad_string !== undefined ? pad_string : ' ';

    if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH')
    {
        pad_type = 'STR_PAD_RIGHT';
    }
    if ((pad_to_go = pad_length - input.length) > 0)
    {
        if (pad_type == 'STR_PAD_LEFT')
        {
            input = str_pad_repeater(pad_string, pad_to_go) + input;
        } else if (pad_type == 'STR_PAD_RIGHT')
        {
            input = input + str_pad_repeater(pad_string, pad_to_go);
        }
        else if (pad_type == 'STR_PAD_BOTH')
        {
            half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
            input = half + input + half;
            input = input.substr(0, pad_length);
        }
    }

    return input;
}






function change_font_color(form,form_id, target, element_type) {

//  alert('font_color');



//  var doc_color = document.form1.default_site_font_color.value;

doc_color = eval("document." + form + "." + form_id + ".value");

 //  alert(doc_color);

if (target.substr(0,1) == '.') {

// alert('here') ;

var r = target.length ;

target = target.substr(1, r - 1);  ;

// alert(target) ;

setStyleByClass(element_type,target,"color",'#' + doc_color,0) ;

// alert('here1a') ;


if (target == 's101_top-nav-element') {

// alert('here2') ;

setStyleByClass(element_type,target + '_first',"color",'#' + doc_color,0) ;

setStyleByClass(element_type,target + '_last',"color",'#' + doc_color,0) ;

}

// alert('here2a') ;

// alert(target) ;

setStyleByClass(element_type,target ,"color",'#' + doc_color,0) ;

if (target == 's101_page_headings') {

	$('.s101_page_headings, h1, #s101_page_heading_##PAGE##, .s101_page_headings a, .s101_page_headings_app, .s101_page_headings_app a').css('color','#' + doc_color) ;

}

if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('color','#' + doc_color) ;

}

if (target == 's101_alt_text') {

$('.s101_alt_text, .s101_twitter_feed, .s101_db_list_press a ').css('color','#' + doc_color) ;

}

if (target == 's101_top-nav-element') {

$('.s101_top-nav-element, .s101_top-nav-element a,.s101_top-nav-element_first, .s101_top-nav-element_first a,.s101_top-nav-element_last, .s101_top-nav-element_last a').css('color','#' + doc_color) ;

}

} else {


// 	alert(target) ;
// 	alert(doc_color) ;

 document.getElementById(target).style.color = "#" + doc_color;

}
//setStyleByTag(target,"color","#" + doc_color,1) ;

// alert('done');

}




function change_font_style(form,form_id, target, element_type) {

//alert('Font Style') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");//

//  doc_size = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

        // alert(doc_size);

if (target.substr(0,1) == '.') {

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"fontStyle",doc_color,0) ;


if (target == 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"fontStyle",doc_color,0) ;

setStyleByClass(element_type,target + '_last',"fontStyle",doc_color,0) ;

}

if (target == 's101_page_headings') {

	$('.s101_page_headings, h1, #s101_page_heading_##PAGE##, .s101_page_headings a, .s101_page_headings_app, .s101_page_headings_app a').css('font-style', doc_color) ;

}


if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('font-style',doc_color) ;

}

if (target == 's101_alt_text') {

$('.s101_alt_text, .s101_twitter_feed, .s101_db_list_press a ').css('font-style', doc_color) ;

}

if (target == 's101_top-nav-element') {

$('.s101_top-nav-element, .s101_top-nav-element a,.s101_top-nav-element_first, .s101_top-nav-element_first a,.s101_top-nav-element_last, .s101_top-nav-element_last a').css('font-style', doc_color) ;

}



} else {

  document.getElementById(target).style.fontStyle = doc_color;

}
//setStyleByTag(target,"fontStyle",doc_color,1) ;

      //   alert('done');


}



function change_font_weight(form,form_id, target, element_type) {

//alert('Font Weight') ;

//  i = eval("document.form1." + form_id + ".selectedIndex");

//  doc_color = eval("document.form1." + form_id  + ".options[i].value") ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

  //       alert(doc_size);

if (target.substr(0,1) == '.') {

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"fontWeight",doc_color,0) ;

if (target == 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"fontWeight",doc_color,0) ;

setStyleByClass(element_type,target + '_last',"fontWeight",doc_color,0) ;

}

if (target == 's101_page_headings') {

	$('.s101_page_headings, h1, #s101_page_heading_##PAGE##, .s101_page_headings a, .s101_page_headings_app, .s101_page_headings_app a').css('font-weight', doc_color) ;

}

if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('font-weight',doc_color) ;

}

if (target == 's101_top-nav-element') {

$('.s101_top-nav-element, .s101_top-nav-element a,.s101_top-nav-element_first, .s101_top-nav-element_first a,.s101_top-nav-element_last, .s101_top-nav-element_last a').css('font-weight', doc_color) ;

}



} else {

  document.getElementById(target).style.fontWeight = doc_color;

}

//setStyleByTag(target,"fontWeight",doc_color,1) ;

    //     alert('done');

}



function change_line_height(form,form_id, target, element_type) {

//alert('Line Height') ;

//var i = document.div_select_editor.select_div.selectedIndex;

  //      alert(i);

//var item_id = document.div_select_editor.select_div.options[i].value;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

if (target.substr(0,1) == '.') {

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"lineHeight",doc_color,0) ;

if (target == 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"lineHeight",doc_color,0) ;

setStyleByClass(element_type,target + '_last',"lineHeight",doc_color,0) ;

}

if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('line-height', doc_color) ;

}

if (target == 's101_alt_text') {

$('.s101_alt_text, .s101_twitter_feed, .s101_db_list_press a ').css('line-height', doc_color) ;

}

if (target == 's101_top-nav-element') {

$('.s101_top-nav-element, .s101_top-nav-element a,.s101_top-nav-element_first, .s101_top-nav-element_first a,.s101_top-nav-element_last, .s101_top-nav-element_last a').css('line-height', doc_color) ;

}



} else {

  document.getElementById(target).style.lineHeight = doc_color;

}

//setStyleByTag(target,"lineHeight",doc_color,1) ;

    //     alert('done');

}



function change_text_transform(form,form_id, target, element_type) {

//alert('Line Height') ;

//var i = document.div_select_editor.select_div.selectedIndex;

  //      alert(i);

//var item_id = document.div_select_editor.select_div.options[i].value;

i = eval("document." + form + "." + form_id + ".selectedIndex");

doc_color = eval("document." + form + "." + form_id + ".options[i].value");

if (target.substr(0,1) == '.') {

var r = target.length ;

target = target.substr(1, r - 1);  ;

setStyleByClass(element_type,target,"textTransform",doc_color,0) ;

if (target == 's101_top-nav-element') {

setStyleByClass(element_type,target + '_first',"textTransform",doc_color,0) ;

setStyleByClass(element_type,target + '_last',"textTransform",doc_color,0) ;

}

if (target == 's101_page_headings') {

	$('.s101_page_headings, h1, #s101_page_heading_##PAGE##, .s101_page_headings a, .s101_page_headings_app, .s101_page_headings_app a').css('text-transform', doc_color) ;

}


if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('text-transform',doc_color) ;

}

if (target == 's101_content_titles') {

$('.s101_content_titles, .s101_album_track_title,.s101_content_titles a, .s101_album_track_title a, .s101_db_list_press, .s101_db_list_news, .s101_general_title ,.s101_general_title a  ,.s101_db_content_item_title, .s101_blog_title').css('text-transform',doc_color) ;

}


} else {

  document.getElementById(target).style.textTransform = doc_color;

}

//setStyleByTag(target,"lineHeight",doc_color,1) ;

    //     alert('done');

}








// ----------------------------------- //


function get_background_style_data() {

var data;


// Get Background Image


// Get Backgound Image File

 field_data = document.form1.default_site_bg_file.value;

data = '&background_image_file=' + field_data ;


// Get Backgound Color

 field_data = document.form1.default_site_bg_color.value;

data = data + '&background_color=' + field_data ;

// Get Backgound Color

 field_data = document.form1.default_site_bg_link.value;

data = data + '&background_link=' + field_data ;


// Get Backgound Style

 field_data = document.form1.site_background_style.value;

data = data + '&background_style=' + field_data ;


// Get Page Image File

 field_data = document.form1.page_background.value;

data = data + '&page_background=' + field_data ;


// Get Page Backgound Color

 field_data = document.form1.default_page_bg_color.value;

data = data + '&page_background_color=' + field_data ;


// Get Page Transparency

 field_data = document.form1.page_bg_transparency.value;

field_data = field_data / 100 ;

data = data + '&page_background_transparency=' + field_data ;

return data;


}




// ----------------------------------- //


function get_background_style_data_shortcuts() {

var data;


// Get Background Image

alert('1-') ;

// Get Backgound Image File

 field_data = $("#default_site_bg_file").val() ;

data = '&background_image_file=' + field_data ;

// Get Backgound Color

 field_data = $("#default_site_bg_color").val() ;

data = data + '&background_color=' + field_data ;


alert('1b') ;

// Get Backgound Style

 field_data = $("#site_background_style").val() ;

data = data + '&background_style=' + field_data ;


alert('1c') ;

// Get Page Image File

 field_data = $("#page_background").val() ;

data = data + '&page_background=' + field_data ;

alert('1f') ;


// Get Page Backgound Color

 field_data = $("#default_page_bg_color").val() ;

data = data + '&page_background_color=' + field_data ;


// Get Page Transparency

 field_data = $("#page_bg_transparency").val() ;

field_data = field_data / 100 ;

data = data + '&page_background_transparency=' + field_data ;

alert('1g') ;


// field_data = document.s101_action_popup_form2.site_id.value;

data = data + '&site_id=' + field_data ;

alert('1h') ;


// field_data = document.s101_action_popup_form2.mode.value;

data = data + '&mode=' + field_data ;

alert('1i') ;


// field_data = document.s101_action_popup_form2.style_selection.value;

data = data + '&style_selection=' + field_data ;

alert('1j') ;


return data;


}







// ----------------------------------- //


function get_site_font_style_data() {

var data;

// Default Site Font Family

 i = document.site_font_form.default_site_font_family.selectedIndex;


  doc_color = document.site_font_form.default_site_font_family.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data =  '&default_site_font=' + new_string ;

// Default Site Font Size

  i = document.site_font_form.default_site_font_size.selectedIndex;

  field_data = document.site_font_form.default_site_font_size.options[i].value;

data = data + '&default_site_font_size=' + field_data ;

// Default Site Font Color

 field_data = document.site_font_form.default_site_font_color.value;

data = data + '&default_site_font_color=' + field_data ;

// Default Site Font Line Height

var form_id = 'default_site_line_height' ;

  i = eval("document.site_font_form." + form_id + ".selectedIndex");

 field_data = eval("document.site_font_form." + form_id  + ".options[i].value") ;

data = data + '&default_site_line_height=' + field_data ;


// Default Site Font Style

var form_id = 'default_site_font_style' ;

  i = eval("document.site_font_form." + form_id + ".selectedIndex");

  field_data = eval("document.site_font_form." + form_id  + ".options[i].value") ;

data = data + '&default_site_font_style=' + field_data ;


// Default Site Font Weight

var form_id = 'default_site_font_weight' ;

  i = eval("document.site_font_form." + form_id + ".selectedIndex");

  field_data = eval("document.site_font_form." + form_id  + ".options[i].value") ;

data = data + '&default_site_font_weight=' + field_data ;

return data;


}




// ----------------------------------- //


function get_header_layout_data() {

var data;

// Site Header

 i = document.site_header_form.default_site_header.selectedIndex;

  field_data = document.site_header_form.default_site_header.options[i].value;

data =  '&default_site_header=' + field_data ;

// Site Footer

  i = document.site_header_form.default_site_footer.selectedIndex;

  field_data = document.site_header_form.default_site_footer.options[i].value;

data = data + '&default_site_footer=' + field_data ;

// Site Logo Color

  i = document.site_header_form.default_s101_logo_color.selectedIndex;

  field_data = document.site_header_form.default_s101_logo_color.options[i].value;

data = data + '&default_site_s101_logo_color=' + field_data ;


// Site Fixed Header Apps

  i = document.site_header_form.default_site_header_fixed_apps.selectedIndex;

  field_data = document.site_header_form.default_site_header_fixed_apps.options[i].value;

data = data + '&default_site_header_fixed_apps=' + field_data ;


// Site Menu Position

  i = document.site_header_form.default_site_menu_position.selectedIndex;

  field_data = document.site_header_form.default_site_menu_position.options[i].value;

data = data + '&default_site_menu_position=' + field_data ;

// Site Logo Force

  i = document.site_header_form.default_site_logo_force.selectedIndex;

  field_data = document.site_header_form.default_site_logo_force.options[i].value;

data = data + '&default_site_logo_force=' + field_data ;


// Site Logo Position Top

  i = document.site_header_form.default_site_logo_force_top.selectedIndex;

  field_data = document.site_header_form.default_site_logo_force_top.options[i].value;

data = data + '&default_site_logo_force_top=' + field_data ;



// Site Freeform Key Image

  i = document.site_header_form.default_site_key_image_freeform.selectedIndex;

  field_data = document.site_header_form.default_site_key_image_freeform.options[i].value;

data = data + '&default_site_key_image_freeform=' + field_data ;

// Site Force Key Image

  i = document.site_header_form.default_site_key_image_force.selectedIndex;

  field_data = document.site_header_form.default_site_key_image_force.options[i].value;

data = data + '&default_site_key_image_force=' + field_data ;


// Site Mobile Mode

  i = document.site_header_form.default_site_mobile_mode.selectedIndex;

  field_data = document.site_header_form.default_site_mobile_mode.options[i].value;

data = data + '&default_site_mobile_mode=' + field_data ;



// Site Cache Mode

  i = document.site_header_form.default_site_cache_mode.selectedIndex;

  field_data = document.site_header_form.default_site_cache_mode.options[i].value;

data = data + '&default_site_cache_mode=' + field_data ;






return data;


}








// ----------------------------------- //


function get_alt_font_style_data() {

var data;

//alert('alt font change') ;




// Alt Site Font Family

 i = document.form_header.alt_site_font_family.selectedIndex;

  doc_color = document.form_header.alt_site_font_family.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data = '&alt_site_font=' + new_string ;


// Alt Site Font Size

  i = document.form_header.alt_site_font_size.selectedIndex;

  field_data = document.form_header.alt_site_font_size.options[i].value;

data = data + '&alt_site_font_size=' + field_data ;


// Alt Site Font Color

 field_data = document.form_header.alt_site_font_color.value;

data = data + '&alt_site_font_color=' + field_data ;


// Alt Site Font Line Height

var form_id = 'alt_site_line_height' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

 field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&alt_site_line_height=' + field_data ;


// Alt Site Font Style

var form_id = 'alt_site_font_style' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&alt_site_font_style=' + field_data ;


// Alt Site Font Weight

var form_id = 'alt_site_font_weight' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&alt_site_font_weight=' + field_data ;


return data;


}


// ----------------------------------- //


function get_mp3_player_style_data() {

    return $('.s101_color_picker_input_site_link_color').serialize();
}







// ----------------------------------- //


function get_image_style_data() {

var data;

//alert('image change') ;


 i = document.form_header.image_border_width_large.selectedIndex;

  doc_color = document.form_header.image_border_width_large.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data = '&image_border_width_large=' + new_string ;



  i = document.form_header.image_border_width_small.selectedIndex;

  field_data = document.form_header.image_border_width_small.options[i].value;

data = data + '&image_border_width_small=' + field_data ;


 field_data = document.form_header.image_border_color_small.value;

data = data + '&image_border_color_small=' + field_data ;

 field_data = document.form_header.image_border_color_large.value;

data = data + '&image_border_color_large=' + field_data ;

return data;


}





// ----------------------------------- //


function get_links_style_data() {

var data;

//alert('link change') ;



// Default Link Font Family

 i = document.form_header.default_site_link_font_family.selectedIndex;

  doc_color = document.form_header.default_site_link_font_family.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data =  '&default_site_link_font=' + new_string ;



// Default Site Link Font Color

 field_data = document.form_header.default_site_link_color.value;

data = data + '&default_site_link_color=' + field_data ;


// Default Site Link Font Rollover Color

 field_data = document.form_header.default_site_link_rollover_color.value;

data = data + '&default_site_link_rollover_color=' + field_data ;


// Default Site Link Font Style

var form_id = 'default_site_link_font_style' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&default_site_link_font_style=' + field_data ;


// Default Site Link Font Weight

var form_id = 'default_site_link_font_weight' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&default_site_link_font_weight=' + field_data ;


// Default Site Link Decoration

field_data = document.form_header.default_site_link_decoration.value;

data = data + '&default_site_link_decoration=' + field_data ;


// Default Site Link Font Rollover Size

var form_id = 'default_site_link_rollover_size' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&default_site_link_rollover_size=' + field_data ;


return data;

}



// ----------------------------------- //

function get_menu_style_data() {

var data;

//alert('get_change1') ;


// Default Site Font Family

 i = document.form_menus.menu_font_family.selectedIndex;

  doc_color = document.form_menus.menu_font_family.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data = '&menu_font=' + new_string ;


// Default Site Font Size

  i = document.form_menus.menu_font_size.selectedIndex;

  field_data = document.form_menus.menu_font_size.options[i].value;

data = data + '&menu_font_size=' + field_data ;


// Default Site Font Color

 field_data = document.form_menus.menu_font_color.value;

data = data + '&menu_font_color=' + field_data ;


// Default Site Font Line Height

var form_id = 'menu_line_height' ;

  i = eval("document.form_menus." + form_id + ".selectedIndex");

 field_data = eval("document.form_menus." + form_id  + ".options[i].value") ;

data = data + '&menu_line_height=' + field_data ;



// Default Site Font Style

var form_id = 'menu_font_style' ;

  i = eval("document.form_menus." + form_id + ".selectedIndex");

  field_data = eval("document.form_menus." + form_id  + ".options[i].value") ;

data = data + '&menu_font_style=' + field_data ;


// Default Site Font Weight

var form_id = 'menu_font_weight' ;

  i = eval("document.form_menus." + form_id + ".selectedIndex");

  field_data = eval("document.form_menus." + form_id  + ".options[i].value") ;

data = data + '&menu_font_weight=' + field_data ;



// menu rollover Color

 field_data = document.form_menus.menu_rollover_color.value;

data = data + '&menu_rollover_color=' + field_data ;



// Menu Rollover Size

  i = document.form_menus.menu_rollover_size.selectedIndex;

  field_data = document.form_menus.menu_rollover_size.options[i].value;

data = data + '&menu_rollover_size=' + field_data ;


// Menu Item Spacing

  i = document.form_menus.menu_item_spacing.selectedIndex;


  field_data = document.form_menus.menu_item_spacing.options[i].value;


data = data + '&menu_item_spacing=' + field_data ;


// Menu Alignment

  i = document.form_menus.menu_alignment.selectedIndex;


  field_data = document.form_menus.menu_alignment.options[i].value;


data = data + '&menu_alignment=' + field_data ;

// Text Transform

  i = document.form_menus.menu_text_transform.selectedIndex;


  field_data = document.form_menus.menu_text_transform.options[i].value;


data = data + '&menu_text_transform=' + field_data ;



return data;

}

// ----------------------------------- //

function get_logo_style_data() {

var data;


//alert('change1') ;

// Default Site Font Color

 field_data = document.s101_form_logo.site_main_logo.value;

data = '&logo_file=' + field_data ;

if (g_Version == 'v4') {


// Default Site Font Family

 i = document.s101_form_logo.logo_font_family.selectedIndex;

  doc_color = document.s101_form_logo.logo_font_family.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data = data + '&logo_font=' + new_string ;


// Default Site Font Size

  i = document.s101_form_logo.logo_font_size.selectedIndex;

  field_data = document.s101_form_logo.logo_font_size.options[i].value;

data = data + '&logo_font_size=' + field_data ;


// Default Site Font Color

 field_data = document.s101_form_logo.logo_font_color.value;

data = data + '&logo_font_color=' + field_data ;


// Default Site Font Line Height

var form_id = 'logo_line_height' ;

  i = eval("document.s101_form_logo." + form_id + ".selectedIndex");

 field_data = eval("document.s101_form_logo." + form_id  + ".options[i].value") ;

data = data + '&logo_line_height=' + field_data ;


// Default Site Font Style

var form_id = 'logo_font_style' ;

  i = eval("document.s101_form_logo." + form_id + ".selectedIndex");

  field_data = eval("document.s101_form_logo." + form_id  + ".options[i].value") ;

data = data + '&logo_font_style=' + field_data ;


// Default Site Font Weight

var form_id = 'logo_font_weight' ;

  i = eval("document.s101_form_logo." + form_id + ".selectedIndex");

  field_data = eval("document.s101_form_logo." + form_id  + ".options[i].value") ;

data = data + '&logo_font_weight=' + field_data ;


// Default Site Font Weight

var form_id = 'logo_text_transform' ;

  i = eval("document.s101_form_logo." + form_id + ".selectedIndex");

  field_data = eval("document.s101_form_logo." + form_id  + ".options[i].value") ;

data = data + '&logo_text_transform=' + field_data ;

}

 // Default Site Font Color

//	if ($('input[name=logo_force_text]').is(':checked')) {

//	    field_data = 'on';

//	} else {

//	    field_data = 'off';

//	}


var form_id = 'logo_force_text' ;

  i = eval("document.s101_form_logo." + form_id + ".selectedIndex");

  field_data = eval("document.s101_form_logo." + form_id  + ".options[i].value") ;

// alert('change2') ;

data = data + '&logo_force_text=' + field_data ;



 // Default Site Font Color

 field_data = document.s101_form_logo.logo_size.value;

data = data + '&logo_image_size=' + field_data ;

// alert('change3') ;

if (g_Version == 'v4') {

 // Default Site Font Color

 field_data = document.s101_form_logo.logo_xpos.value;

data = data + '&logo_image_xpos=' + field_data ;


 // Default Site Font Color

 field_data = document.s101_form_logo.logo_ypos.value;

data = data + '&logo_image_ypos=' + field_data ;


}

 field_data = document.s101_form_logo.app_bottom_margin.value;

data = data + '&app_bottom_margin=' + field_data ;


 // Default Site Font Color

 field_data = document.s101_form_logo.top_margin.value;

data = data + '&page_top_margin=' + field_data ;


 // Default Site Font Color

 field_data = document.s101_form_logo.top_padding.value;

data = data + '&page_top_padding=' + field_data ;





// alert(data);

return data;

}

// ----------------------------------- //

function get_header_style_data() {

var data;

//alert('change1a') ;


// Header Site Font Family

 i = document.form_header.header_font_family.selectedIndex;

  doc_color = document.form_header.header_font_family.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data =  '&header_font=' + new_string ;


// Header Site Font Size

  i = document.form_header.header_font_size.selectedIndex;

  field_data = document.form_header.header_font_size.options[i].value;

data = data + '&header_font_size=' + field_data ;


// Header Site Font Color

 field_data = document.form_header.header_font_color.value;

data = data + '&header_font_color=' + field_data ;


// Header Site Font Line Height

var form_id = 'header_line_height' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

 field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&header_line_height=' + field_data ;


// Header Site Font Style

var form_id = 'header_font_style' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&header_font_style=' + field_data ;


// Header Site Font Weight

var form_id = 'header_font_weight' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&header_font_weight=' + field_data ;


// Header Site Text Transform

var form_id = 'header_text_transform' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&header_text_transform=' + field_data ;


//alert('Header change1b') ;

//alert(data) ;

//alert('Header read done') ;


return data ;

}



// ----------------------------------- //

function get_title_style_data() {

var data;

//alert('change1a') ;



// Title Site Font Family

 i = document.form_header.title_font_family.selectedIndex;

  doc_color = document.form_header.title_font_family.options[i].value;

new_string = doc_color.replace('+',' ') ;

xpos = new_string.search(':') ;

if (xpos > 0) {

new_string = new_string.substr(0, xpos) ;

}

data = '&title_font=' + new_string ;


// Title Site Font Size

  i = document.form_header.title_font_size.selectedIndex;

  field_data = document.form_header.title_font_size.options[i].value;

data = data + '&title_font_size=' + field_data ;


// Title Site Font Color

 field_data = document.form_header.title_font_color.value;

data = data + '&title_font_color=' + field_data ;


// Title Site Font Line Height

var form_id = 'title_line_height' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

 field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&title_line_height=' + field_data ;


// Title Site Font Style

var form_id = 'title_font_style' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&title_font_style=' + field_data ;


// Title Site Font Weight

var form_id = 'title_font_weight' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&title_font_weight=' + field_data ;


// Title Site Text Transform

var form_id = 'title_text_transform' ;

  i = eval("document.form_header." + form_id + ".selectedIndex");

  field_data = eval("document.form_header." + form_id  + ".options[i].value") ;

data = data + '&title_text_transform=' + field_data ;

//alert('Header change1b') ;

//alert(data) ;

//alert('Header read done') ;


return data ;

}



function save_site_font_change(style_mode,response_div) {

var data;

//alert('start font change') ;

data = get_site_font_style_data() ;

//alert(data) ;

form_id = 'master_style_name' ;

//alert('change2') ;


//  i = eval("document.form_style_master_select." + form_id + ".selectedIndex");

// alert('change3') ;


// field_data = eval("document.form_style_master_select." + form_id  + ".options[i].value") ;

// data = data + '&style_selection=' + field_data ;

//alert(data);

document.getElementById('s101_container2').display = 'none' ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;

//document.getElementById('s101_container2').display = 'none' ;

}


function save_header_change(style_mode,response_div) {

var data;

//alert('start layout') ;

data = get_header_layout_data() ;

//alert(data) ;

form_id = 'master_style_name' ;

document.getElementById('s101_container2').display = 'none' ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

// document.getElementById(response_div).innerHTML = "Saved" ;

}



function save_alt_font_change(style_mode,response_div) {

var data;

//alert('change1') ;

data = get_alt_font_style_data() ;

//alert(data) ;


s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;

//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}


function save_image_style_change(style_mode,response_div) {

var data;

//alert(style_mode) ;

//alert('save image changes') ;

data = get_image_style_data() ;

//alert(data) ;


s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

}

function save_mp3_player_style_change(style_mode,response_div) {

var data;

//alert('change1') ;

data = get_mp3_player_style_data() ;

//alert(data) ;


s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

}


function save_links_change(style_mode,response_div) {

var data;

//alert('change1') ;

data = get_links_style_data() ;

//alert(data) ;


//alert(data);

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;

//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}


function save_background_change(style_mode,response_div) {

var data;

data = get_background_style_data() ;

// alert(data) ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'700px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;

//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;


}

function save_background_change_shortcuts(style_mode,response_div) {

var data;

alert('change1f') ;

data = get_background_style_data_shortcuts() ;

alert(data) ;

s101Manager.doPopup('site_edit_v5','Style Edit…','&style_mode=' + style_mode + '&' + data,'700px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;

//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

// $('div#result2').html('Done') ;

}



function save_style_change(style_mode,response_div) {

var data;

//alert('change1') ;

data = get_general_style_data() ;

//alert(data) ;

form_id = 'master_style_name' ;

//alert('change2') ;


  i = eval("document.form_style_master_select." + form_id + ".selectedIndex");

//alert('change3') ;


 field_data = eval("document.form_style_master_select." + form_id  + ".options[i].value") ;

data = data + '&style_selection=' + field_data ;

//alert(data);

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;

//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}



function save_menu_style_change(style_mode,response_div) {



var data;

data = get_menu_style_data() ;

// alert(data) ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'700px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}




function save_logo_style_change(style_mode,response_div) {

var data;

data = get_logo_style_data() ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

}


function save_header_style_change(style_mode,response_div) {

var data;

//alert('change1') ;

data = get_header_style_data() ;

//alert('change2') ;

//alert(style_mode) ;

//alert(data) ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'700px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change3') ;

//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}


function save_title_style_change(style_mode,response_div) {

var data;

//alert('change1') ;

data = get_title_style_data() ;

//alert('change2') ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change3') ;

document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}




function save_color_scheme(style_mode,response_div) {

//alert('1') ;

var form_id = 'color_scheme' ;

  i = eval("document.form_style_master_select." + form_id + ".selectedIndex");

 field_data = eval("document.form_style_master_select." + form_id  + ".options[i].value") ;

data = '&color_scheme=' + field_data ;

//alert(data) ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + data,'0px');

document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;


document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}




function save_master_style(style_mode,response_div) {

//alert('1') ;

var form_id = 'master_style_name' ;

form_id = 'master_style_name' ;

  i = eval("document.form_style_master_select." + form_id + ".selectedIndex");

 field_data = eval("document.form_style_master_select." + form_id  + ".options[i].value") ;

data = '&style_selection=' + field_data ;

//alert(data) ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + data,'0px');

//document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;


//document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}


function save_new_master_style(style_mode,response_div) {

var data;
var data1;
var data2;
var data3;
var data4;

//alert('1') ;


data1 = get_general_style_data() ;

data2 = get_menu_style_data() ;

data3 = get_logo_style_data() ;

data4 = get_header_style_data() ;

//alert('2') ;


data = data1 + '&' + data2 + '&' + data3 + '&' + data4 ;

//alert('3') ;

 field_data = document.form_style_master.new_master_style.value;

//alert('4') ;

data = data + '&style_name=' + field_data ;

//alert(data) ;


//alert(style_mode) ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + data,'0px');

document.getElementById(response_div).innerHTML = "Saved" ;

//alert('change2') ;


document.getElementById('s101_container2').display = 'none' ;

//YAHOO.example.container.panel2.hide() ;

}


function change_master_style() {

//alert('1') ;

form_id = 'master_style_name' ;

  i = eval("document.form_style_master_select." + form_id + ".selectedIndex");

 field_data = eval("document.form_style_master_select." + form_id  + ".options[i].value") ;

data = 'http://demo22.section101.com/?page=read_style&style_selection=' + field_data + '&element=s101_site-wrapper-bg&value=background' ;

//alert(data) ;

//new_value = getUrl(data) ;

//alert(new_value) ;

//document.getElementById('s101_site-wrapper-bg').style.backgroundColor = 'red' ;

}



function getUrl(url) {

var theText = $.get(url);

//alert(theText) ;

return theText;
}


function color_test() {

document.getElementById('s101_site-wrapper-bg').style.backgroundColor = 'green' ;


}





function div_edit_mode_on(div,highlight) {

var new_div = div + '_edit_bar' ;

	 document.getElementById(new_div).style.display = 'block' ;

   document.getElementById(div).style.backgroundColor = "#" + highlight ;

}


function div_edit_mode_off(div,highlight) {

var new_div = div + '_edit_bar' ;


	 document.getElementById(new_div).style.display = 'none' ;

   document.getElementById(div).style.backgroundColor = "#" + highlight ;

//    alert(div) ;

}


function div_edit_mode_on2(div,highlight) {

var new_div = div + '_edit_bar' ;

var new_div = div  ;

	 document.getElementById(new_div).style.opacity = '.4' ;

	 document.getElementById(new_div).filters.alpha.opacity = '40' ;


   document.getElementById(div).style.backgroundColor = "#" + highlight ;

}


function div_edit_mode_off2(div,highlight) {

var new_div = div + '_edit_bar' ;

var new_div = div  ;


	 document.getElementById(new_div).style.opacity = '1' ;

	 document.getElementById(new_div).filters.alpha.opacity = '100' ;




   document.getElementById(div).style.backgroundColor = "#" + highlight ;

//    alert(div) ;

}


function div_edit_mode_on5(div,highlight) {

var new_div = div + '_edit_bar' ;

var new_div = div  ;

	 document.getElementById(new_div).style.cursor = 'pointer' ;

}


function div_edit_mode_off5(div,highlight) {

var new_div = div + '_edit_bar' ;

var new_div = div  ;


	 document.getElementById(new_div).style.cursor = 'default' ;




//    alert(div) ;

}







function div_edit_mode_click(div,highlight) {

//alert('click') ;




 var d = document.getElementById(div);
  var olddiv = document.getElementById('div1ssssss');
  d.removeChild(olddiv);

   document.getElementById(div).style.backgroundColor = "#" + highlight ;

//    alert(div) ;

}


/**
 * A simple querystring parser.
 * Example usage: var q = $.parseQuery(); q.fooreturns  "bar" if query contains "?foo=bar"; multiple values are added to an array.
 * Values are unescaped by default and plus signs replaced with spaces, or an alternate processing function can be passed in the params object .
 * http://actingthemaggot.com/jquery
 *
 * Copyright (c) 2008 Michael Manning (http://actingthemaggot.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 **/

function parseQuery (qs,options) {

	var q = (typeof qs === 'string'?qs:window.location.search), o = {'f':function(v){return unescape(v).replace(/\+/g,' ');}}, options = (typeof qs === 'object' && typeof options === 'undefined')?qs:options, o = jQuery.extend({}, o, options), params = {};
	jQuery.each(q.match(/^\??(.*)$/)[1].split('&'),function(i,p){
		p = p.split('=');
		p[1] = o.f(p[1]);
		params[p[0]] = params[p[0]]?((params[p[0]] instanceof Array)?(params[p[0]].push(p[1]),params[p[0]]):[params[p[0]],p[1]]):p[1];
	});
	return params;
}

function grabS101StyleSheet(style_id){

//	if (style_id < 1) {

form_id = 'master_style_name' ;

  i = eval("document.form_style_master_select." + form_id + ".selectedIndex");

 style_id = eval("document.form_style_master_select." + form_id  + ".options[i].value") ;

//	}

//alert(style_id) ;

           var newdata = $.get("?page=read_style&style_id=" + style_id + "&s101_page_mode=strip",
                      { name: $("input[type=text]").val()},
                      function(data){
//                        $("div#retval").html(data);
//						alert('read-' + data) ;
						loadS101StyleSheet(data) ;
	                 });



}

function loadS101StyleSheet(data) {

data = data.replace("\n","") ;

//alert('callback2-' + data) ;

q = parseQuery(data);

var bcolor = q.default_site_font_size  ;

//alert('query-' + bcolor) ;


// Background Image
var doc_value = q.background_image  ;
doc_value =  'url(' + doc_value + ')' ;
document.body.style.backgroundImage = doc_value ;

// Default Font Color
target = 'default_site_font_color' ;
var doc_value = q.default_site_font_color ;
document.form1.default_site_font_color.value = doc_value ;
document.body.style.color = "#" + doc_value ;

// Background Color
target = 's101_site-wrapper-bg' ;
var doc_value = q.mainpage_background_color ;
document.form1.default_page_bg_color.value = doc_value ;
document.getElementById(target).style.backgroundColor = "#" + doc_value ;


}


function show_google_font(form,form_id) {

//alert(form) ;

//alert(form_id) ;

family = $('#font-family').val();

//alert(family) ;

//alert('start') ;

document.getElementById('s101_page_heading_home').style.fontStyle = family;

//alert('done') ;

}


function change_preview(form,form_id,item_type) {

//alert(item_type) ;

i = eval("document." + form + "." + form_id + ".selectedIndex");

//alert('here') ;

//alert(i) ;

doc_item = eval("document." + form + "." + form_id + ".options[i].value");

//alert(doc_item);

if (item_type == 'video') {



}

if (item_type == 'widget') {

//alert(form_id) ;


if (doc_item == 'none') {

file_name = 'http://section101.com/no_content_selected.html' ;

} else {

file_name = '?page=admin_widget_view&s101_page_mode=strip&widget_id=' + doc_item ;

}


//  alert(file_name);

  doc_item = "<div id='s101_page_edit_preview_window'><div id='s101_edit_select_preview_content'><iframe width='520' height='70' src='" + file_name + "'  frameborder='0'  scrolling='yes'></iframe></div></div>" ;




}


if (item_type == 'image') {

//alert('image') ;

//http://s101.assets.s101new.s3.amazonaws.com/image/no_selected_image.jpg

var where = doc_item.indexOf('_photo_gal_') ;

var user_string = doc_item.substr(0,where) ;

//alert(doc_item);

if (doc_item == '0') {


doc_item = "<div id='s101_page_edit_preview_window'><div id='s101_edit_select_text'> Selection<br>Preview</div><div id='s101_edit_select_preview_content'><center><img src='http://s101.assets.s101new.s3.amazonaws.com/image/no_selected_image.jpg' width='375'></center></div></div>" ;


} else {


//alert(user_string) ;


var user_sub_string = doc_item.substr(0,2) ;


//alert(user_sub_string) ;


//doc_item = "<table><tr><td valign='top' width='118' id='s101_edit_select_text'> Selection<br>Preview</td><td width='450'><img src='http://memberdata.s3.amazonaws.com/" + user_sub_string + "/" + user_string + "/photos/" + doc_item + "' width='375'></td></tr></table>" ;

doc_item = "<div id='s101_page_edit_preview_window'><div id='s101_edit_select_text'> Selection<br>Preview</div><div id='s101_edit_select_preview_content'><center><img src='http://memberdata.s3.amazonaws.com/" + user_sub_string + "/" + user_string + "/photos/" + doc_item + "' width='375'></center></div></div>" ;

}

//alert(doc_item) ;

}

if (item_type == 'text') {

if (doc_item == '0') {

file_name = 'http://section101.com/inc/no_content_selected.html' ;

} else {

file_name = '?page=admin_text_view&s101_page_mode=strip&NewsID=' + doc_item ;

}


//  alert(file_name);

  doc_item = "<div id='s101_page_edit_preview_window'><div id='s101_edit_select_text'> Selection<br>Preview</div><div id='s101_edit_select_preview_content'><iframe width='420' src='" + file_name + "'></iframe></div></div>" ;


}

// alert('here');

document.getElementById('s101_content_selection_preview').innerHTML = doc_item ;

//  alert('done');

  //      alert(doc_item);



}

function preview_color_styles(pg_color, bg_color, lg_color, mn_color, mn_selected_color, ht_color, style_selection) {

//alert('set color') ;

document.s101_admin_color_popup.s101_color_popup_selection1.value = pg_color ;
document.s101_admin_color_popup.s101_color_popup_selection2.value = bg_color ;
document.s101_admin_color_popup.s101_color_popup_selection3.value = lg_color ;
document.s101_admin_color_popup.s101_color_popup_selection4.value = mn_color ;
document.s101_admin_color_popup.s101_color_popup_selection5.value = mn_selected_color ;
document.s101_admin_color_popup.s101_color_popup_selection6.value = ht_color ;
document.s101_admin_color_popup.s101_color_popup_style_id.value = style_selection ;

if ( bg_color.length > 1 ) {

 $('body').css('background','#' + bg_color) ;

}

if ( pg_color.length > 1 ) {

 $('#s101_site-wrapper-bg').css('background','#' + pg_color) ;

}

if ( lg_color.length > 1 ) {

 $('#s101_site-logo_text').css('color','#' + lg_color) ;

}

if ( mn_color.length > 1 ) {

 $('.s101_top-nav-element').css('color','#' + mn_color) ;

}

if ( mn_selected_color.length > 1 ) {

 $('#s101_top-nav ul li a:hover').css('color','#' + mn_selected_color) ;

 $('#s101_vert_nav ul li a').css('color','#' + mn_selected_color) ;

}

if ( ht_color.length > 1 ) {

 $('.s101_page_headings').css('color','#' + ht_color) ;

 $('.s101_content_titles').css('color','#' + ht_color) ;

}


//


//alert('done') ;

}

function save_color_group_styles() {

//alert('save color') ;

var style_mode = 'color_scheme' ;

var pg_color = document.s101_admin_color_popup.s101_color_popup_selection1.value ;
var bg_color = document.s101_admin_color_popup.s101_color_popup_selection2.value ;
var lg_color = document.s101_admin_color_popup.s101_color_popup_selection3.value ;
var mn_color = document.s101_admin_color_popup.s101_color_popup_selection4.value ;
var mn_selected_color = document.s101_admin_color_popup.s101_color_popup_selection5.value ;
var ht_color = document.s101_admin_color_popup.s101_color_popup_selection6.value ;
var style_selection = document.s101_admin_color_popup.s101_color_popup_style_id.value ;


data = 'style_selection=' +  style_selection + '&page_background_color=' + pg_color + '&background_color=' + bg_color + '&logo_font_color=' + lg_color +  '&menu_font_color=' + mn_color + '&menu_rollover_color=' + mn_selected_color + '&header_font_color=' + ht_color ;

//alert(data) ;

s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

}



function initizalize_zendesk(email,fname,lname,username,site_name,time_stamp, message) {

var zendesk_form = {"email" : email, "fname" : fname,  "lname" : lname,  "username" : username, "site_name" : site_name,  "target_page" : "https:/section101.zendesk.com/entries/21694096-uploading-content" };

    save_mp3_q = $.ajax({
        type: 'POST',
        url: '/inc/code/zendesk.php',
		data: zendesk_form,
        success: function(content)
        {

//			alert(content) ;

        }
    });


//s101Manager.doPopup('style_edit','Style Edit...','&style_mode=' + style_mode + '&' + data,'0px');

}




function init_popup_scripts(popup) {

	if (popup == 'design_menus') {

//		timeoutID = window.setTimeout(init_popup_design_menus, 5000);

	}

	if (popup == 'design_logo') {

		timeoutID = window.setTimeout(init_popup_design_logo, 10000);

	}

	if (popup == 'design_headers') {

		timeoutID = window.setTimeout(init_popup_design_headers, 5000);

	}

	if (popup == 'design_titles') {

		timeoutID = window.setTimeout(init_popup_design_titles, 5000);

	}

	if (popup == 'design_site_font') {

		timeoutID = window.setTimeout(init_popup_design_site_font, 5000);

	}


	if (popup == 'design_alt_font') {

		timeoutID = window.setTimeout(init_popup_design_alt_font, 5000);

	}

	if (popup == 'design_links') {

		timeoutID = window.setTimeout(init_popup_design_links, 5000);

	}

	if (popup == 'design_background') {

		timeoutID = window.setTimeout(init_popup_design_background, 5000);

	}

	if (popup == 'page_style') {

		timeoutID = window.setTimeout(init_popup_page_style, 5000);

	}

	if (popup == 'design_images') {

		timeoutID = window.setTimeout(init_popup_design_images, 5000);

	}

	if (popup == 'design_mp3_player') {

		timeoutID = window.setTimeout(init_popup_design_mp3_player, 5000);

	}

	if (popup == 'design_colors') {

		timeoutID = window.setTimeout(init_popup_design_colors, 3000);

	}


	if (popup == 'blog_post_add') {

		timeoutID = window.setTimeout(init_blog_post_add, 3000);

	}

	if (popup == 'edit_news_db_news') {

		timeoutID = window.setTimeout(init_popup_edit_news_db_news, 3000);

	}

	if (popup == 'edit_news_db_general') {

		timeoutID = window.setTimeout(init_edit_news_db_general, 3000);

	}

	if (popup == 'edit_news_db_press') {

		timeoutID = window.setTimeout(init_edit_news_db_press, 3000);

	}


	if (popup == 'app_settings_spacer') {

		timeoutID = window.setTimeout(init_edit_app_settings_spacer, 5000);

	}

	if (popup == 'app_settings_image') {

		timeoutID = window.setTimeout(init_edit_app_settings_image, 5000);
	}


	if (popup == 'app_settings') {

		timeoutID = window.setTimeout(init_edit_app_settings, 5000);

	}

}

function init_edit_app_settings() {

	var myPicker = new jscolor.color(document.getElementById('s101_app_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}

function init_popup_app_settings() {

	var myPicker = new jscolor.color(document.getElementById('s101_app_border_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}



function init_edit_app_settings_spacer() {

	var myPicker = new jscolor.color(document.getElementById('s101_app_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}

function init_edit_app_settings_image() {

	var myPicker2 = new jscolor.color(document.getElementById('s101_app_border_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}


function init_popup_design_menus() {

	var myPicker = new jscolor.color(document.getElementById('menu_font_color'), {})

	var myPicker2 = new jscolor.color(document.getElementById('menu_rollover_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}

function init_popup_design_logo() {



if (g_Version == 'v5') {

	// skip Color init

} else {

//	var myPicker = new jscolor.color(document.getElementById('logo_font_color'), {})

}


	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable


	$(function() {
		$( "#slider-size" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 1200,
			value: logo_image_size,
			slide: function( event, ui ) {
				$( "#logo_size" ).val( ui.value );
                $("#s101_site-logo_text").css({width: ui.value });
			}
		});

	$( "#slider-topmargin" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 100,
			value: page_top_margin,
			slide: function( event, ui ) {
				$( "#top_margin" ).val( ui.value );

                $("#s101_site-wrapper").css({marginTop: ui.value });
			}
		});

		$( "#slider-toppadding" ).slider({
			orientation: "horizontal",
			range: "min",
			min: -10,
			max: 100,
			value: page_top_padding,
			slide: function( event, ui ) {
				$( "#top_padding" ).val( ui.value );

                $("#s101_header-wrapper").css({marginTop: ui.value });
			}
		});



		$( "#slider-app-bott-margin" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 60,
			value: app_bottom_margin,
			slide: function( event, ui ) {
				$( "#app_bottom_margin" ).val( ui.value );
                $("#" + g_Page + "_column1 .s101_BorderlessWidget").css({marginBottom: ui.value });
                $("#" + g_Page + "_column2 .s101_BorderlessWidget").css({marginBottom: ui.value });
                $("#" + g_Page + "_column3 .s101_BorderlessWidget").css({marginBottom: ui.value });
                $("#" + g_Page + "_column4 .s101_BorderlessWidget").css({marginBottom: ui.value });
                $("#" + g_Page + "_column5 .s101_BorderlessWidget").css({marginBottom: ui.value });
                $("#" + g_Page + "_column6 .s101_BorderlessWidget").css({marginBottom: ui.value });
                $("#s101_side_menu_apps .s101_BorderlessWidget").css({marginBottom: ui.value });
				$('div.s101_BorderlessWidget[rel=site_header]').css({marginBottom: '0px' });
			}
		});


		$( "#logo_size" ).val( $( "#slider-size" ).slider( "value" ) );

        $( "#top_margin" ).val( $( "#slider-topmargin" ).slider( "value" ) );

        $( "#top_padding" ).val( $( "#slider-toppadding" ).slider( "value" ) );

		$( "#app_bottom_margin" ).val( $( "#slider-app-bott-margin" ).slider( "value" ) );

	});


}

function init_popup_design_headers() {


	var myPicker = new jscolor.color(document.getElementById('header_font_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}

function init_popup_design_titles() {

	var myPicker = new jscolor.color(document.getElementById('title_font_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}


function init_popup_design_site_font() {

	var myPicker = new jscolor.color(document.getElementById('default_site_font_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}

function init_popup_design_alt_font() {

	var myPicker = new jscolor.color(document.getElementById('alt_site_font_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}


function init_popup_design_links() {

	var myPicker = new jscolor.color(document.getElementById('default_site_link_color'), {})

	var myPicker = new jscolor.color(document.getElementById('default_site_link_rollover_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}

function init_popup_design_background() {

	var myPicker = new jscolor.color(document.getElementById('default_site_bg_color'), {})

	var myPicker = new jscolor.color(document.getElementById('default_page_bg_color'), {})

	$(function() {
		$( "#trans-amount" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 100,
			value: page_transparency,
			slide: function( event, ui ) {
//				alert(ui.value) ;
				new_val = ui.value / 100 ;
				$( "#page_bg_transparency" ).val( ui.value );
//                 $('#s101_site-wrapper-bg').css('opacity',new_val);
//				  $('#s101_site-wrapper-bg').css('filter','alpha(opacity=' + new_val + ')');


  jQuery("#s101_site-wrapper-bg").animate({backgroundColor: jQuery.Color( "rgba(" + background_rgb_dec + "," + new_val +  ")" ) }, 10 );



//				trans_code = 'opacityOrig:.3,opacityNew:.7,fadeSpeed:200' ;

//				$('#s101_site-wrapper-bg').transify({opacityOrig:.3,opacityNew:.7,fadeSpeed:200});
	//			alert(new_val) ;
			}
		});

		$( "#page_bg_transparency" ).val( $( "#trans-amount" ).slider( "value" ) );

	});

// http://jorenrapini.com/blog/css/transify-a-jquery-plugin-to-easily-apply-transparency-opacity-to-an-elements-background



	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}


function init_popup_shortcuts_design_popup() {

//	 init_popup_design_background() ;


	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}



function init_popup_page_style() {

	var myPicker = new jscolor.color(document.getElementById('site_background_color'), {})

	var myPicker = new jscolor.color(document.getElementById('page_background_color'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable

}

function init_popup_design_images() {

	var myPicker = new jscolor.color(document.getElementById('image_border_color_large'), {})

	var myPicker = new jscolor.color(document.getElementById('image_border_color_small'), {})

	//myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable


}

function init_popup_design_mp3_player() {

	/*
        not sure why did we need to initiate each instance separately so I commented them out...

        var myPicker = new jscolor.color(document.getElementById('mp3_body_color'), {})

        var myPicker = new jscolor.color(document.getElementById('mp3_scrub_bar_color'), {})

        //myPicker.fromString('99FF33')  // now you can access API via 'myPicker' variable
	*/

	$('.s101_color_picker_input_site_link_color').each(function() {

        var myPicker = new jscolor.color(document.getElementById(this.id), {required:false});
    });


}


function init_popup_design_colors() {


}

function save_design_colors() {

var answer = confirm ("Are you sure you want to change your color scheme?") ;
if (answer) {

save_color_group_styles();


} else {

//alert ("Darn. Well, keep trying then.")

}

}
media_strict: false

function insert_to_id(inst) {

	if (inst.id == 'NewsItem')
	{
		document.getElementById('NewsItem').value = inst.getBody().innerHTML;
	}
}


function init_popup_blog_post_add() {

	init_tinymce() ;

	tinyMCE.execCommand('mceAddControl', false, 'edit_content');

   var el = document.getElementById('content');
   tinyMCE.setContent(el.innerHTML);
   el.style.display = "none";

}

function init_popup_blog_post_edit() {

	init_tinymce() ;

	tinyMCE.execCommand('mceAddControl', false, 'edit_content');

   var el = document.getElementById('content');
   tinyMCE.setContent(el.innerHTML);
   el.style.display = "none";

}


function init_popup_edit_news_db_news() {

	init_tinymce() ;

	tinyMCE.execCommand('mceAddControl', false, 'NewsItem');
	tinyMCE.execCommand('mceAddControl', false, 'edit_content');

   var el = document.getElementById('PageItem');
   tinyMCE.setContent(el.innerHTML);
   el.style.display = "none";

}

function init_popup_edit_news_db_general() {

	init_tinymce() ;

	tinyMCE.execCommand('mceAddControl', false, 'edit_content');

   var el = document.getElementById('NewsItem');
   tinyMCE.setContent(el.innerHTML);
   el.style.display = "none";

}


function init_popup_edit_news_db_press() {

	init_tinymce() ;

	tinyMCE.execCommand('mceAddControl', false, 'NewsItem');
	tinyMCE.execCommand('mceAddControl', false, 'edit_content');

   var el = document.getElementById('NewsItem');
   tinyMCE.setContent(el.innerHTML);
   el.style.display = "none";

}

function init_tinymce() {

//alert(g_User_Edit_Mode);

 tinymce.create('tinymce.plugins.MailToPlugin', {

  init : function(ed) {
   ed.addCommand('mceMailTo', function() {
    var linkText = ed.selection.getContent({format : 'text'});
    var newText = "<a href='mailto:" + linkText + "'>" + linkText + "</a>"
    ed.execCommand('mceInsertContent', false, newText);
   });

   // Register example button
   ed.addButton('mailto', {
    title : 'MailTo',
    cmd : 'mceMailTo',
    image : '/js/s101_admin/tinymce_latest/examples/media/tiny_mce_maillink_icon.jpg'
   });
  }
 });

 // Register plugin with a short name
 tinymce.PluginManager.add('mailto', tinymce.plugins.MailToPlugin);

if (g_UserAdminLevel < 3) {

	if (1 == 1) {

//	if (g_User_Edit_Mode == 'advanced') {

//	if (g_User_Edit_Mode == 'on') {


	tinyMCE.init({
   	mode : "none",
	theme_advanced_toolbar_location : "top",
	theme_advanced_statusbar_location: 'none',
	onchange_callback : "insert_to_id",
	plugins : "paste,advhr,fullscreen,table,mailto,media",
	media_strict: false,
    theme_advanced_buttons1 : "undo,redo,|,link,unlink,anchor,mailto,|,insertqimage,image,|,cut,copy,paste,|,advhr,|,bullist,numlist,outdent,indent,|,code,|,pastetext,pasteword,media",
    theme_advanced_buttons2 : ",fontselect,fontsizeselect,forecolor,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,fullscreen" ,
	theme_advanced_buttons3 : "tablecontrols",
   	theme : "advanced",
   	    setup : function(ed) {
            // Add a custom button
            ed.addButton('insertqimage', {
                title : 'Insert Image',
                image : '/js/s101_admin/tinymce_latest/examples/media/tiny_mce_image_edit.png',
                onclick : function() {
                    // Add you own code to execute something on click
                    image_editor_load('temp_image_holder', 'input', 150, 150, 's101_image_editor', '', '', 's101_insert_image', 'save_final_processing');
                }
            });
        }
	});


	} else {


	tinyMCE.init({
   	mode : "none",
	theme_advanced_toolbar_location : "top",
	theme_advanced_statusbar_location: 'none',
	onchange_callback : "insert_to_id",
	plugins : "paste,advhr,fullscreen,table,mailto,media",
	media_strict: false,
    theme_advanced_buttons1 : "undo,redo,|,link,unlink,anchor,mailto,|,insertqimage,image,|,cut,copy,paste,|,advhr,|,bullist,numlist,outdent,indent,|,pastetext,pasteword,media",
    theme_advanced_buttons2 : ",fontselect,fontsizeselect,forecolor,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,fullscreen" ,
	theme_advanced_buttons3 : "",
   	theme : "advanced",
   	    setup : function(ed) {
            // Add a custom button
            ed.addButton('insertqimage', {
                title : 'Insert Image',
                image : '/js/s101_admin/tinymce_latest/examples/media/tiny_mce_image_edit.png',
                onclick : function() {
                    // Add you own code to execute something on click
                    image_editor_load('temp_image_holder', 'input', 150, 150, 's101_image_editor', '', '', 's101_insert_image', 'save_final_processing');
                }
            });
        }
	});




	}


} else {

	tinyMCE.init({
   	mode : "none",
	theme_advanced_toolbar_location : "top",
	theme_advanced_statusbar_location: 'none',
	onchange_callback : "insert_to_id",
	plugins : "paste,advhr,fullscreen,table,mailto,media",
	media_strict: false,
    theme_advanced_buttons1 : "undo,redo,|,link,unlink,anchor,mailto,|,insertqimage,image,|,cut,copy,paste,|,advhr,|,bullist,numlist,outdent,indent,|,code,|,pastetext,pasteword,media",
    theme_advanced_buttons2 : ",fontselect,fontsizeselect,forecolor,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,fullscreen" ,
	theme_advanced_buttons3 : "",
   	theme : "advanced",
   	    setup : function(ed) {
            // Add a custom button
            ed.addButton('insertqimage', {
                title : 'Insert Image',
                image : '/js/s101_admin/tinymce_latest/examples/media/tiny_mce_image_edit.png',
                onclick : function() {
                    // Add you own code to execute something on click
                    image_editor_load('temp_image_holder', 'input', 150, 150, 's101_image_editor', '', '', 's101_insert_image', 'save_final_processing');
                }
            });
        }
	});



}

}




function s101_insert_image(val) {

var form = 's101_action_popup_form' ;

//var image_width = document.s101_action_popup_form.image_width.value ;

var image_url_loc = document.s101_action_popup_form.temp_image_holder.value ;

var image_width = '300' ;

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

var link_data = '<img src="' + ins + '" width="' + image_width + '"  rel="s101_inserted_image" >' ;

}

var editor_mode = document.s101_action_popup_form.editor_mode.value ;

if (editor_mode == 'tinymce') {

	var el = document.s101_action_popup_form.tinymce ;

	tinyMCE.execCommand('mceInsertContent', false, link_data );

} else {

	var el = document.s101_action_popup_form.content ;

    if (el.setSelectionRange){
        el.value = el.value.substring(0,el.selectionStart) + link_data + el.value.substring(el.selectionStart,el.selectionEnd) + el.value.substring(el.selectionEnd,el.value.length);
    }
    else if (document.selection && document.selection.createRange) {
        el.focus();
        var range = document.selection.createRange();
        range.text = link_data + range.text;
    }

}

document.s101_action_popup_form.temp_image_holder.value = '' ;

}


function s101_toggle_tinymce() {

//  alert('toggle start') ;


	tinymce.execCommand('mceToggleEditor',false,'edit_content');

	var editor_mode = document.s101_action_popup_form.editor_mode.value ;

	if (editor_mode == 'tinymce') {

		document.s101_action_popup_form.editor_mode.value = 'text' ;

	} else {

		document.s101_action_popup_form.editor_mode.value = 'tinymce' ;

	}

//  alert('toggle end') ;

}

function cleanup_mce(area_id) {

//	alert(area_id) ;

//  alert('cleanup start') ;

  var active = false;

  for (edId in tinyMCE.editors) {
    if (edId === area_id) active = true;
  }

//  if (active == true) {

	tinyMCE.execCommand('mceRemoveControl', false, 'edit_content');
	tinyMCE.execCommand('mceRemoveControl', false, 'NewsItem');

	var el = document.getElementById(area_id);

	$('s101_action_popup_form').bind('form-pre-serialize', function(e) {
    	tinyMCE.triggerSave();
	});

//  }

//  alert('cleanup end') ;

}

function read_mce() {

	alert('here') ;


	var ed = tinyMCE.get('content');

	alert(ed.getContent());


	alert(ed) ;

	alert(document.s101_action_popup_form.content.value);

	alert($('#tinymce').val()) ;






}

function set_user_update_time() {




}


	function slide_change() {

		alert('here') ;
//       s101_site-logo-image.style.width = '200px';


	}

function toggle_logo_size() {

  i = eval("document.s101_form_logo.logo_force_text.selectedIndex");

  field_data = eval("document.s101_form_logo.logo_force_text.options[i].value") ;


  if (field_data == 'on') {

	  $(".show_logo_size").css({display: 'none' });

	} else {

  $(".show_logo_size").css({display: 'block' });

	}

}


function access_password() {

	access_mode = $('#page_access').val() ;

	if (access_mode == 'password') {

		$('#show_access_password').css('display','block') ;

	} else {

		$('#show_access_password').css('display','none') ;

	}
}




function set_layout_thumb(thumb_id) {

//	alert(thumb_id) ;

		page_id = $('#page_id').val() ;

		current_id = eval("document.s101_action_popup_form.current_layout_id.value");

		$('#' + current_id ).removeClass('template_preview_wrap template_preview_wrap_selected').addClass('template_preview_wrap');
		$('#' + current_id ).attr('onclick', 'set_layout_thumb(this.id);');

//		$('#'+thumb_id).attr('onclick', 'unset_thumb(\''+cur_selected_menu+'\');');
		$('#'+thumb_id).removeClass('template_preview_wrap').addClass('template_preview_wrap_selected');


		$('.s101_layout_options').css('display','block') ;

	    $.post('/js/s101_admin/page_edit/layouts.php', 'site_id=' + g_SITE + '&page_id=' + page_id + '&layout_id=' + thumb_id , function(data) {

//		alert(data) ;

			$('#s101_layout_specific_options').html(data) ;

		}) ;

		document.s101_action_popup_form.current_layout_id.value = thumb_id ;

}



	function s101_show_news_title() {

		$('#s101_news_title_link').css('display','block') ;


	}
