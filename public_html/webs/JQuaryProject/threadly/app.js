/**
 * Created by yc on 11/11/2015.
 */
///*
var main = function() {
    $('form').submit(function() {
        var comment = $('#comment').val();
        if (comment !== "") {
            var html = $('<li>').text(comment);
            $(html).prependTo($('.comments'));
            $('#comment').val("");
        }
        return false;
    });
};

$(document).ready(main);
//*/
/*
var main = function() {
    $('form').submit(function() {
        var comment = $('#comment').val();
        if (comment !== "") {
            var html = $('<li>').text(comment);
            $(html).prependTo('.comments');
            $('#comment').val("");
        }
        return false;
    });
};
$(document).ready(main);
    */