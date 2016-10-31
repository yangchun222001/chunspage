/**
 * Created by yc on 11/12/2015.
 */

function main(){
    $('.header img').click(function(){
        $(this).next().toggle();
    });

    $('form').submit(function(){
        var email = $('#email').val();
        var password = $('#password').val();
        if(email === "") $('.email-error').text("Please enter your email address");
        if(password === "") $('.password-error').text("Please enter a password");
        return false;
    });

}

$(document).ready(main());