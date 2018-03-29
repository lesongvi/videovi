
Shadowbox.init({
    modal: true
});

function change_video_menu() {

	//alert('change') ;

  	i = document.video_menu_select.video_menu_select_gallery.selectedIndex;

  	gallery_id = document.video_menu_select.video_menu_select_gallery.options[i].value;

	// alert(gallery_id) ;

 	filter = "&gallery_id=" + gallery_id ;

	if (gallery_id == '0') {

  		filter = '' ;

	}

	window.location = '?page=video' + filter ;

}

