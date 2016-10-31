/**
 * Created by yc on 11/11/2015.
 */
var main = function() {
    $('form').submit(function() {
        var firstName = $('#first').val();

        var lastName = $('#last').val();
        var email = $('#email').val();
        var password = $('#password').val();


        if(firstName === "") {
            $('.first-name-error').text("Please enter your first name");
        }



        if(lastName === ''){
            $('.last-name-error').text("Please enter your last name");
        }

        if(email === ''){
            $('.email-error').text("Please enter your email address");
        }

        if(password.length < 8){
            $('.password-error').text("Short password are easy to guess. Try one with at least 8 characters.")
        }

        if(password === ''){
           $('.password-error').text("Please enter your password");
        }

        return false;
    });
};

$(document).ready(main);