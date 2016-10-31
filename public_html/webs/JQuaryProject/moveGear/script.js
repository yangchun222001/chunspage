/**
 * Created by yc on 11/12/2015.
 */

function main(){
    $('.login').click(function(){
        $('.login .dropdown-menu').toggle();
    });
    $(function() {
        $( "#accordion" ).accordion();
    });
}

$(document).ready(main());
