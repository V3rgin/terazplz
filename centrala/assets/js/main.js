$(document).ready(function () {	
    $('#menu').click(function(e) {

    });
});
function createMenu() {
	$.getJSON('menu.json', function(json) {
		var menu = json.menu;
        htmlMenu = '';
        for (let i = 0; i < menu.length; i++) {
            htmlMenu = htmlMenu + '<li><a href="' + menu[i].url + '">'+ menu[i].name + '</a></li>';
        }
        $('.sidebar-menu').html(htmlMenu);
    });
}

function loadView(){
    $('.sidebar-menu').on('click', 'a', function(e){
        var htmlFile = $(this).attr('href');
        $('#main-content').load("views/", htmlFile);
        helperHideSidebar();
        e.preventDefault();
    });
}

function helperHideSidebar(){
    $('#overlay-menu').hide();
    $('$sidebar').animate({left: "-280px"}, 300);
}