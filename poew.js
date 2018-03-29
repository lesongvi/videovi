

$(function() {

	setTimeout('init_jscroll_pane("pane1")', 300);

});

function init_jscroll_pane(pane_id) {

	$('#'+pane_id).jScrollPane({showArrows:false, scrollbarWidth: 15,  scrollbarMargin:10, reinitialiseOnImageLoad: true});

}

