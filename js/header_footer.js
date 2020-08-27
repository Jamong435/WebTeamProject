function show_mobile_menu(){
    var showMobileMenu =  document.getElementById('show_mobile_menu');
    var spacer = document.getElementById('show_mobile_menu_space');
    if( showMobileMenu.className == 'display_none' ) {
        showMobileMenu.className = 'display_block';
        spacer.className = 'display_block';
    } else if( showMobileMenu.className == 'display_block' ) {
        showMobileMenu.className = 'display_none';
        spacer.className = 'display_none';
    }
}

function show_mobile_out_touch(){
    var showMobileMenu =  document.getElementById('show_mobile_menu');
    var spacer = document.getElementById('show_mobile_menu_space');
    if( showMobileMenu.className == 'display_none' ) {
        showMobileMenu.className = 'display_block';
        spacer.className = 'display_block';
    } else if( showMobileMenu.className == 'display_block' ) {
        showMobileMenu.className = 'display_none';
        spacer.className = 'display_none';
    }
}

var clicked01 = true;
var clicked02 = true;
var clicked03 = true;
var clicked04 = true;
var clicked05 = true;

function show_sub_menu01() {
    
    var showMobileSubMenu01 = document.getElementById('menu_sub_text_mobile01');

    if( showMobileSubMenu01.className == 'menu_sub_text_mobile display_none' && clicked01 ){
        showMobileSubMenu01.className = 'menu_sub_text_mobile display_block';
        clicked01 = false;
    } else if( showMobileSubMenu01.className == 'menu_sub_text_mobile display_block' && !clicked01 ){
        showMobileSubMenu01.className = 'menu_sub_text_mobile display_none';
        clicked01 = true;
    }
}

function show_sub_menu02() {
    
    var showMobileSubMenu02 = document.getElementById('menu_sub_text_mobile02');

    if( showMobileSubMenu02.className == 'menu_sub_text_mobile display_none' && clicked02  ) {
        showMobileSubMenu02.className = 'menu_sub_text_mobile display_block';
        clicked02 = false;
    } else if( showMobileSubMenu02.className == 'menu_sub_text_mobile display_block' && !clicked02 ){
        showMobileSubMenu02.className = 'menu_sub_text_mobile display_none';
        clicked02 = true;
    }
}

function show_sub_menu03() {
    
    var showMobileSubMenu03 = document.getElementById('menu_sub_text_mobile03');

    if( showMobileSubMenu03.className == 'menu_sub_text_mobile display_none' && clicked03  ) {
        showMobileSubMenu03.className = 'menu_sub_text_mobile display_block';
        clicked03 = false;
    } else if( showMobileSubMenu03.className == 'menu_sub_text_mobile display_block' && !clicked03 ){
        showMobileSubMenu03.className = 'menu_sub_text_mobile display_none';
        clicked03 = true;
    }
}

function show_sub_menu04() {
    
    var showMobileSubMenu04 = document.getElementById('menu_sub_text_mobile04');

    if( showMobileSubMenu04.className == 'menu_sub_text_mobile display_none' && clicked04  ) {
        showMobileSubMenu04.className = 'menu_sub_text_mobile display_block';
        clicked04 = false;
    } else if( showMobileSubMenu04.className == 'menu_sub_text_mobile display_block' && !clicked04 ){
        showMobileSubMenu04.className = 'menu_sub_text_mobile display_none';
        clicked04 = true;
    }
}

function show_sub_menu05() {
    
    var showMobileSubMenu05 = document.getElementById('menu_sub_text_mobile05');

    if( showMobileSubMenu05.className == 'menu_sub_text_mobile display_none' && clicked05  ) {
        showMobileSubMenu05.className = 'menu_sub_text_mobile display_block';
        clicked05 = false;
    } else if( showMobileSubMenu05.className == 'menu_sub_text_mobile display_block' && !clicked05 ){
        showMobileSubMenu05.className = 'menu_sub_text_mobile display_none';
        clicked05 = true;
    }
}