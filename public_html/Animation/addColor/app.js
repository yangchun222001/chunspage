/**
 * Created by yc on 11/18/2015.
 */
var chooseColor = 'red';

var main = function(){
    $('.color').click(function(){
        chooseColor = $(this).css('background-color');
        console.log('choose color: ' + chooseColor);
    });

    $('.node').click(function(){
       $(this).attr('fill', chooseColor);
        console.log('seleced element id is ' + $(this).attr('id'));
    });
    
};

$(document).ready(main);