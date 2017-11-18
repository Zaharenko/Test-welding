/** При навидении на меню **/
$(document).ready(function() {
    $('.navbar a.dropdown-toggle').mouseover(function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });

});

/** При клике на меню **/
$(window).resize(function() {
  if(document.documentElement.clientWidth < 1025) {
    $('.navbar a.dropdown-toggle').on('click',function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
  }
});

/** Preloader **/
$(document).ready(function() {
    setTimeout(function() { $(".welding").fadeOut('fast'); }, 3000);
    setTimeout(function() { $(".products").fadeIn('slow'); }, 3000);
});

/** Таблица **/
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();


/** Блок или Таблица **/
$(document).ready(function() {
    $('.block1').click(function(){
        $('.products').show();
        $('.table').hide();
        $('.block1').hide();
        $('.table2').show();
    });
});

/** Блок или Таблица **/
$(document).ready(function() {
    $('.table2').click(function(){
      $('.table').show();
      $('.products').hide();
      $('.table2').hide();
      $('.block1').show();

    });
});


    






