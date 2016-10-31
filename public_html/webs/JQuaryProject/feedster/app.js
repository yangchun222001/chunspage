/**
 * Created by yc on 11/11/2015.
 */
var main = function() {
    $('.notification img').click(function(){
        $('.notification-menu').toggle();
    });

    $('.post .btn').click(function(){
        $(this).toggleClass('btn-like');
    });
};

$(document).ready(main);


var s = 'abcde';
s=s.toUpperCase();
console.log(s.length + s);
console.log(s.charCodeAt(0));
