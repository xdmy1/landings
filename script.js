const nav = document.querySelector(".menu-ul")
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
var x = window.matchMedia("(max-width: 700px)")
function openNav() {
    /*if (x.matches) { // If media query matches
    menu.style.width = '100vw'
    nav.style.transform = 'translateX(100%)'
    nav.style.transition = '.7s all'
    burger.style.transform = 'translateY(-100%)'
    burger.style.transition = '1s all' }
    else {
    menu.style.width = '50vw'
    nav.style.transform = 'translateX(100%)'
    nav.style.transition = '.7s all'
    burger.style.transform = 'translateY(-100%)'
    burger.style.transition = '1s all'
    }*/
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    if (x.matches) {
        menu.style.width = '100vw';
        nav.style.transform = 'translateX(100%)';
        nav.style.transition = '.7s all'
    } else {
        menu.style.width = '50vw';
        nav.style.transform = 'translateX(100%)';
        nav.style.transition = '.7s all'
    }
    burger.style.transform = 'translateY(-100%)';
}


function closeNav() {
    /*nav.style.transform = 'translateX(-100%)'
    nav.style.transition = '1s all'
    burger.style.transform = 'translateY(0)'
    burger.style.transition = '1s all'*/
    document.body.style.overflow = ''; // Re-enable scrolling
    nav.style.transform = 'translateX(-100%)';
    burger.style.transform = 'translateY(0)';
    burger.style.transition = '1s all'
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      nav.style.transform = 'translateX(200%)'
    nav.style.transition = '1s all'
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  (function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
  
