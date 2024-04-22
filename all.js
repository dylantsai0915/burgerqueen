$(document).ready(function () {
    $('.showmenu').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('open');
    });
});