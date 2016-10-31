/**
 * Created by yc on 11/12/2015.
 */
var main = function() {
    $('.more-btn').click(function(){
       $(this).next().toggle();
    });

    $('.share').click(function(){
        $(this).next().toggle();
    });

    $('.bell').click(function(){
        $(this).toggleClass('notification active');
    });
};

$(document).ready(main);