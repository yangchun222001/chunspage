/**
 * Created by yc on 11/11/2015.
 */
var main = function() {
    $('.day').click(function(){
        $(this).next().toggle();
        $(this).find('.weekday span').toggleClass('glyphicon-minus');
    });
};

$(document).ready(main);