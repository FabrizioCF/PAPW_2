$(document).ready(function() {
    $('li.list-group-item.accordion').click(function(){
        $(this).children("div.collapse").slideToggle();
    });
});