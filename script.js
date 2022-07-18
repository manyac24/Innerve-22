$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

function openSideNav() {
    $("#sideNav").css("transform", "translateX(0%)");
    $('body').css('overflow', 'hidden');
}
function closeSideNav() {
    $("#sideNav").css("transform", "translateX(100%)");
    $('body').css('overflow', 'auto');
}