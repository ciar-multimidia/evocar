// Abrir e fechar menu

$('#abrir-menu').click(function(){
	$('#menu-aberto').addClass("ativa").attr("aria-expanded","true");
    $('.menus , #menu-aberto .botoes a , #fechar-menu').attr("tabindex", "0");
});

$('#fechar-menu').click(function(){
	$('#menu-aberto').removeClass("ativa").attr("aria-expanded","false");
  $('.menus , #menu-aberto .botoes a , #fechar-menu').attr("tabindex", "-1");
});

$(".itens-menu>ul>.fechar-menu").click(function(e) {
        if( $(this).hasClass("mostrar-menu") ) {
            $(this).removeClass("mostrar-menu").addClass("fechar-menu");
        } else {
            $(this).siblings().removeClass("mostrar-menu").addClass("fechar-menu"); 
            $(this).removeClass("fechar-menu").addClass("mostrar-menu");
        }
});


// Background menu

$(document).ready(function() {
    var destaque = $('.destaque').offset();
    var textos = $('.mudarcor').offset();
    var $window = $(window);
    
    $window.scroll(function() {
        if ( $window.scrollTop() >= destaque.top) {
            $("#abrir-menu").removeClass().addClass("bgescuro");
        }
        if ( $window.scrollTop() < destaque.top) {
            $("#abrir-menu").removeClass();
        }
    });     
});