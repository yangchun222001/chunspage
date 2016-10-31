/**
 * Created by yc on 11/12/2015.
 */
var main = function() {
    var cities = ['Chongqing', 'Beijing', 'Chengdu', 'New York', 'Boston', 'Shanghai'];
    $('input').autocomplete({
        source: cities
    });
}


$(document).ready(main);