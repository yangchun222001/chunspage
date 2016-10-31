/**
 * Created by yc on 11/12/2015.
 */
function main(){

    $('.cart').click(function() {
        $('.account .dropdown-menu').hide();
        $('.help .dropdown-menu').hide();
        $('.cart .dropdown-menu').toggle();
    });
    $('.account').click(function() {
        $('.cart .dropdown-menu').hide();
        $('.help .dropdown-menu').hide();
        $('.account .dropdown-menu').toggle();
    });
    $('.help').click(function() {
        $('.cart .dropdown-menu').hide();
        $('.account .dropdown-menu').hide();
        $('.help .dropdown-menu').toggle();
    });



}

$(document).ready(main());