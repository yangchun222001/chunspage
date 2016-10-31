/**
 * Created by yc on 11/12/2015.
 */
var template = function(text) {
    return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var commands = {
    'add *term': add
};

var add = function(item){
    var html = template(item);
    $(html).appendTo('.list');
}

var main = function() {

    $('form').submit(function() {
        var text = $('#todo').val();
        if(text){
            add(text);
            $('#todo').val("");
        }
        return false;
    });

    $(document).on('click', '.glyphicon-star', function(){
        $(this).toggleClass('active');
    });

    $(document).on('click', '.glyphicon-remove', function(){
        $(this).parent().remove();
    });

    if(annyang){
        var commands = {
            'add *term': add
        };
        annyang.addCommands(commands);
        annyang.start();
    }

};

$(document).ready(main);