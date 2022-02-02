jQuery(document).ready(function(){
    $('.navbar-collapse').on('click',function(){ 
        $('.navbar-collapse').collapse('hide');})

    $('#pass-status').click(function(){
            var passInput = $('#passType');
            var passStatus = $('#pass-status');
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
});

