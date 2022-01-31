jQuery(document).ready(function(){
    jQuery(window).resize(function(){
        if(jQuery(window).width()< "900px"){
            jQuery(".navbar-text .nav-link").removeClass("signIn btn btn-sm me-2");
        }
    });
});


