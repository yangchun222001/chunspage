/**
 * Created by yc on 11/10/2015.
 */


var main = function() {
    $('#image-url').keyup(function(){
        var url = $('#image-url').val();
        $('.thumbnail img').attr('src',url);
    });
    $("#top-text").keyup(function(){
        var top = $('#top-text').val();
        $('.top-caption').text(top);
    });
    $('#bottom-text').keyup(function(){
        var bottom = $('#bottom-text').val();
        $('.bottom-caption').text(bottom);
    });

};

$(document).ready(main());






