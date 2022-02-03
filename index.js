jQuery(document).ready(function(){
    $('.navbar-collapse').on('click',function(){ 
        $('.navbar-collapse').collapse('hide');})

    const loginForm = $('#login-form');
    const createAccForm = $("#createAccount-form");
    $('#linkcreateAccount').click(function(){
        loginForm.addClass("form-hidden");
        createAccForm.removeClass("form-hidden");
    })
    $('#linklogin').click(function(){
        loginForm.removeClass("form-hidden");
        createAccForm.addClass("form-hidden");
    })

    $('.pass-status').click(function(){
        var passInput = $('.passType');
        var passStatus = $('.pass-status');
        if(passInput.attr('type')=='password'){
            passInput.attr("type",'text');
            passStatus.removeClass('fa fa-eye');
            passStatus.addClass('fa fa-eye-slash');
        }
        else
        {
          passInput.attr("type",'password');
          passStatus.removeClass('fa fa-eye-slash');
         passStatus.addClass('fa fa-eye');
        }
    })

    $('.firstDiv').addClass("top-padding");
});

